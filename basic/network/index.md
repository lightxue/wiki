# 计算机网络

![img](./img/90_10.png)



## IP

IPv4头部

![img](./img/90_20.png)

IPv6头部

![img](./img/90_23.png)

## DNS

![img](./img/90_25.png)

![img](./img/90_26.png)

`dig`并没有使用glibc的resolver，解析`/etc/hosts`，可以用`getent hosts xxx.com`来调试glibc的行为。

`getaddrinfo`取代了`gethostbyname`，如果`getaddrinfo`的协议族没有指定，默认的`family = AF_UNSPEC`会`A`和`AAAA`都查询，超时默认5s，如果多个name server会更长。

### 缓存

在 Windows 上清除/刷新 DNS 缓存

```bat
ipconfig /flushdns
```

在 Linux 上清除/刷新 DNS 缓存

在 Linux 上，除非已安装并运行诸如 `Systemd-Resolved`，`DNSMasq` （DNS masquerade）或 `nscd`（Name Service Cache Daemon） 之类的缓存服务，否则没有操作系统级 `DNS` 缓存。根据 Linux 发行版和所使用的缓存服务，清除 DNS 缓存的过程有所不同。

`getaddrinfo`返回的多个地址做了优先级排序，[RFC 3484](https://tools.ietf.org/html/rfc3484)作了规范，可以配置，参考[这里](https://blog.csdn.net/dog250/article/details/87815123)和[这里](https://bbs.huaweicloud.com/blogs/142394)。

```bash
# Ubuntu Systemd-Resolved
sudo systemd-resolve --flush-caches
# DNSMasq
sudo service dnsmasq restart
# nscd
sudo service nscd restart
```

在 MacOS 上清除/刷新 DNS 缓存

```bash
sudo killall -HUP mDNSResponder
```

Chrome：`chrome://net-internals/#dnsChrome`，点击`清除主机缓存`

## TCP

![img](./img/90_28.png)
