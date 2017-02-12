# Nginx

* 通过`X-Forwarded-For`获取真实IP

```
## 这里取得原始用户的IP地址
map $http_x_forwarded_for  $clientRealIp {
	""	$remote_addr;
	~^(?P<firstAddr>[0-9\.]+),?.*$	$firstAddr;
}
```
