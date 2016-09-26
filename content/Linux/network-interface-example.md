---
title: etc network interface 例子
---
ubuntu重新加载/etc/network/interface的方法

```sh
sudo /etc/init.d/networking restart
```

```
# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto eth0
iface eth0 inet dhcp

auto eth1
iface eth1 inet static
    address 192.168.56.102
    netmask 255.255.255.0
    gateway 192.168.56.1
```
