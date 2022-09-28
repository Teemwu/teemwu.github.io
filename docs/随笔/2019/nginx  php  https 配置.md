---
title: nginx + php + https 配置
author: teemwu
date: 2019/10/10 23:23
isPublished: true
categories:
  - 服务器
tags:
  - nginx
  - php
  - https
---

# nginx + php + https 配置

```apache
server {
        listen 80;
        server_name   你的域名或IP;
        rewrite ^(.*)$  https://$host$1 permanent;
}

server {
        listen 443 ssl;
        server_name 你的域名或IP;
        root 站点文件路径;
        index index.php index.html;

        ssl_certificate   证书.pem文件路径;
        ssl_certificate_key  证书.key文件路径;

        location ~ \.php$ {
                fastcgi_pass   127.0.0.1:9000;
                fastcgi_index  index.php;
                fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
                include        fastcgi_params;
        }
}
```
更改保存后需要重新加载下 nginx 配置文件
```apache
nginx -s reload
```