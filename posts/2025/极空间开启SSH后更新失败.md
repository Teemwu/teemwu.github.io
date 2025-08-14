---
title: 极空间开启SSH后更新失败
author: teemwu
date: 2025/08/14 17:22
isPublished: true
categories:
tags:
---

# 极空间开启SSH后更新失败

可能导致的原因是 root 权限改变，使用下面命令进行权限修复后，重启系统即可：

```bash
set -euo pipefail

echo "[1/6] 校准 root 账号与家目录"
# root 账号基本信息（若官方固件规定不同的 shell，请保留原值）
getent passwd root
# 家目录与权限
chown root:root /root
chmod 700 /root

# SSH 密钥目录（如不存在则跳过）
if [ -d /root/.ssh ]; then
  chown -R root:root /root/.ssh
  chmod 700 /root/.ssh
  [ -f /root/.ssh/authorized_keys ] && chmod 600 /root/.ssh/authorized_keys
fi

echo "[2/6] 校准账号/组/口令相关文件"
chown root:root   /etc/passwd /etc/group
chmod 644         /etc/passwd /etc/group

chown root:shadow /etc/shadow /etc/gshadow || true
chmod 640         /etc/shadow /etc/gshadow || true

echo "[3/6] 校准 sudo/su/passwd 这些必须的 setuid 工具"
# 注意：有的固件可能没有 sudo（直接 root），无则忽略
for f in /usr/bin/sudo /bin/su /usr/bin/passwd /usr/bin/chsh /usr/bin/chfn; do
  [ -e "$f" ] || continue
  chown root:root "$f"
  chmod 4755 "$f"
done

# gpasswd/newgrp（有的系统是 setgid，按常见安全值处理）
[ -e /usr/bin/gpasswd ] && chown root:root /usr/bin/gpasswd && chmod 2755 /usr/bin/gpasswd || true
[ -e /usr/bin/newgrp ]  && chown root:root /usr/bin/newgrp  && chmod 2755 /usr/bin/newgrp  || true

echo "[4/6] 校准 sudoers 与 sshd 配置权限"
[ -e /etc/sudoers ] && chown root:root /etc/sudoers && chmod 440 /etc/sudoers || true
[ -d /etc/sudoers.d ] && chown -R root:root /etc/sudoers.d && chmod 750 /etc/sudoers.d && chmod 440 /etc/sudoers.d/* 2>/dev/null || true

[ -e /etc/ssh/sshd_config ] && chown root:root /etc/ssh/sshd_config && chmod 644 /etc/ssh/sshd_config || true

echo "[5/6] 校验根目录与关键系统目录的基本权限（防止被误改过大）"
chmod 755 /
chmod 755 /bin /sbin /usr /usr/bin /usr/sbin 2>/dev/null || true
chown root:root /bin /sbin /usr /usr/bin /usr/sbin 2>/dev/null || true

echo "[6/6] 可选：用 dpkg 验证关键包的文件权限（仅 Debian/Ubuntu 有效）"
if command -v dpkg >/dev/null 2>&1; then
  dpkg -V passwd 2>/dev/null || true
  dpkg -V sudo 2>/dev/null   || true
  dpkg -V login 2>/dev/null  || true
  dpkg -V openssh-server 2>/dev/null || true
fi

echo "完成。建议现在重启：reboot"
```