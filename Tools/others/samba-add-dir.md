# samba增加目录

0. 增加用户
```
smbpasswd -a lightxue
```

0. 编辑/etc/samba/smb.conf，增加以下内容
```
[lightxue]
netbios name = lightxue
valid users = lightxue
path = /home/lightxue
browseable = yes
writable = yes
printable = no
create mask = 0644
```

0. 重启samba服务
```
/etc/init.d/smbd restart
or
service smb restart
```

0. 这样就新建一个samba用户并新建一个目录了

0. windows多samba用户切换会有密码缓存问题，请看[[Windows | Operate-System/Windows/Windows]]里的 删除samba密码的缓存

