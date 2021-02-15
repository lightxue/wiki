# SSH免密码

## 目标
A机器免密码向B机器登陆，可以在A机器通过ssh在B机器上运行脚本

## 步骤

- 在A机器生成密钥对
```bash
a@A:~> ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

- B机器创建目录~/.ssh
```bash
a@A:~> ssh b@B mkdir -p .ssh
```

- 最后把A机器的公钥追加到B机器的`authorized_keys`里
```bash
a@A:~> cat .ssh/id_rsa.pub | ssh b@B 'cat >> .ssh/authorized_keys'
b@B's password:
```

试试能不能ssh免密码访问B机器
```bash
a@A:~> ssh b@B
```

## 注意事项

不同版本的SSH可能有一些不一样的地方

- 公钥放在`.ssh/authorized_keys2`

- `.ssh`目录的权限是700

- `.ssh/authorized_keys2`的权限是640
