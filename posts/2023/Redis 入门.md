---
title: Redis 入门
author: teemwu
date: '2023/03/13 16:52'
isPublished: true
categories:
  - 数据库
tags:
  - redis
wordCount: 1571
---

# Redis 入门

作为一个前端工程师，或许你没用过 Redis ，但应该都听说过它，下面让我们重头开始，快速地了解一下 Redis。

## 什么是 Redis

Redis（Remote Dictionary Server） 是一种基于内存的数据存储系统，它是一种高性能的键值对存储数据库，也被称为缓存数据库。

其主要的优点有：

1. 快速：Redis 可以在内存中快速执行读写操作，因此速度非常快。Redis 的速度比传统的关系型数据库（如 MySQL）快几个数量级，这使得 Redis 成为需要快速读写大量数据的应用程序的首选解决方案。
2. 支持多种数据结构：Redis 不仅支持简单的键值对存储，还支持多种数据结构，如字符串、哈希、列表、集合、有序集合等。这些数据结构可以满足不同的需求，例如可以使用哈希结构来存储用户信息，使用列表结构来存储日志数据。
3. 持久化：Redis 可以通过将数据写入磁盘来实现数据持久化，这样即使 Redis 服务器崩溃或关闭，数据也可以在重新启动后恢复。
4. 原子性：在 Redis 中，原子性是指一个操作要么全部执行成功，要么全部执行失败，不存在部分执行的情况。例如，当多个客户端同时对同一个键进行读写操作时，Redis 会依次处理每个操作，确保每个操作都是原子性的，避免了并发访问的问题。
5. 高并发：Redis 支持多个客户端并发访问，因此可以满足高并发的需求。
6. 可扩展性：Redis 可以通过集群方式实现横向扩展，从而支持大规模应用场景。
7. 开源：Redis 是一款完全开源的软件（[BSD证书](https://github.com/redis/redis/blob/unstable/COPYING)），用户可以免费使用并修改源代码以适应自己的需求。

## Redis 中常见数据类型

### 基本数据类型

Redis 的基本数据类型有如下几种：

1. 字符串类型（string）：可以存储字符串、整数或浮点数等类型的值。
2. 列表类型（list）：由一系列按照插入顺序排序的元素组成，可以在列表头部或尾部添加、删除元素。
3. 集合类型（set）：由一系列无序且唯一的元素组成，支持添加、删除元素，并且可以进行交集、并集、差集等集合操作。
4. 有序集合类型（sorted set）：与集合类型类似，但每个元素有一个分数（score）与之关联，可以按照分数排序。
5. 哈希类型（hash）：由一系列键值对组成，支持添加、删除元素，并且可以获取、修改、查询键值对的值。

### 高级数据类型

除了上述基本数据类型之外，Redis 还提供了一些高级数据类型，例如：

1. 布隆过滤器类型（Bloom Filter）：用于判断某个元素是否存在于一个集合中，具有高效查询和存储的特点。
2. 地理空间类型（Geospatial）：用于存储地理位置信息，并支持按照地理距离查询附近的位置。
3. HyperLogLog 类型：用于处理基数计数（cardinality counting）问题，即统计一个集合中元素的个数，具有高效的存储和查询性能。

更多数据类型可参考 [官方文档](https://redis.io/docs/data-types/)。

## Redis 安装&使用

### 通过第三方工具安装

由于笔者使用的是 macOS ，所以为了方便，就使用 [Homebrew](https://brew.sh/) 进行安装，如果你使用的是其它操作系统，或者其它第三方工具的话，建议直接跳到 [通过编译源码进行安装](#通过编译源码进行安装) 章节进行观看，或者参考 [官方的安装文档](https://redis.io/docs/getting-started/installation/)，这里就不赘述了。

1. 通过 Homebrew 安装

在终端执行以下命令安装 Redis：

```sh
brew install redis
```

2. 启动 Redis

```sh
brew services start redis
```

注意：以上命令将启动 Redis 服务并将其设置为开启自启动，如果需要停止 Redis 服务，可执行以下命令：

```sh
brew services stop redis
```

3. 连接 Redis

```sh
redis-cli
```

连接后终端会进入 Redis 的命令行操作区域，大概长这样子 `127.0.0.1:6379> ` 可进行一些常规操作，如果要退出可执行 `exit` 或者直接按 `Control + C` 。

4. 卸载 Redis

为了流程完备，增加了卸载方法，如果不需要可跳过。

先停止 Redis：

```sh
brew services stop redis
```

然后删除 Redis：

```sh
brew uninstall redis
```

最后删除相关配置文件和数据：

- 移除 Redis Sentinel 的配置文件

```sh
rm -rf /usr/local/etc/redis-sentinel.conf
```

- 移除 Redis 配置文件

``` sh
rm -rf /usr/local/etc/redis.conf
```

- 移除 Redis 数据文件

```sh
rm -rf /usr/local/var/db/redis
```

### 通过编译源码进行安装

如果是个人或者开发环境中快速安装和管理 Redis，建议通过 HomeBrew 这些第三方工具进行安装，在生产环境中使用，最好还是通过发布的二进制包或者从源代码编译安装 Redis 比较稳妥。

1. 下载 Redis

在 Redis 的 [官网](https://redis.io/) 中，下载最新的 Redis 压缩包，解压到任意位置，例如：`/usr/local/redis`。

2. 编译安装 Redis

在解压后的 Redis 目录下，执行以下命令编译 Redis：

```sh
make
```

编译完成后，执行以下命令安装 Redis：

```sh
make install
```

3. 启动 Redis

在终端中执行以下命令启动 Redis：

```sh
redis-server
```

如果要指定配置文件启动Redis，可以使用以下命令：

```sh
redis-server /path/to/redis.conf
```

4. 连接 Redis

在另一个终端中执行以下命令连接 Redis：

```sh
redis-cli
```

5. Redis 基本操作

连接 Redis 后，可以进行以下基本操作：

- 设置键值对：`set key value`
- 获取键值对：`get key`
- 删除键值对：`del key`
- 判断键是否存在：`exists key`
- 获取所有键：`keys *`
- 删除所有键值对：`flushall`

更多 Redis 命令可以参考 Redis 官网的文档：https://redis.io/commands
