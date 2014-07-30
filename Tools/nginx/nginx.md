# nginx

0. nginx -V，查看nginx的各种配置参数

0. 检查配置是否合法
```
nginx -t
```

0. 重新加载配置
```
nginx -s reload
```

0. 浏览目录
```
location / {
    autoindex on;
}
```

0. 重定向
```
return       301 http://blog.lightxue.com$request_uri;
```
