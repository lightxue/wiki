# samba

- 增加用户
```bash
smbpasswd -a lightxue
```

- 编辑/etc/samba/smb.conf，增加以下内容
```ini
[lightxue]
netbios name = lightxue
valid users = lightxue
path = /home/lightxue
browseable = yes
writable = yes
printable = no
create mask = 0644
```

- 重启samba服务
```bash
/etc/init.d/smbd restart
// 或者
service smb restart
```

- 这样就新建一个samba用户并新建一个目录了

- 删除samba密码的缓存
```batch
; 查看当前的连接
net use
; 删除
net use * /delete
```

