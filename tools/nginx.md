# Nginx

* 通过`X-Forwarded-For`获取真实IP

```nginx
## 这里取得原始用户的IP地址
map $http_x_forwarded_for  $clientRealIp {
    ""  $remote_addr;
    ~^(?P<firstAddr>[0-9\.]+),?.*$  $firstAddr;
}
```

* 详细日志

```nginx
log_format detailed '$time_iso8601 | $remote_addr | $request_method | '
                    '$scheme | $host | $request_uri | $server_protocol | '
                    '$status | $body_bytes_sent | $http_referer | '
                    '$http_user_agent';

access_log logs/access.log detailed;
```
