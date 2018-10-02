# SSH免密码

## 目标
A机器免密码向B机器登陆，可以在A机器通过ssh在B机器上运行脚本

## 步骤

0. 在A机器生成密钥对
```bash
a@A:~> ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/home/a/.ssh/id_rsa):
Created directory '/home/a/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/a/.ssh/id_rsa.
Your public key has been saved in /home/a/.ssh/id_rsa.pub.
The key fingerprint is:
3e:4f:05:79:3a:9f:96:7c:3b:ad:e9:58:37:bc:37:e4 a@A
```

0. B机器创建目录~/.ssh
```bash
a@A:~> ssh b@B mkdir -p .ssh
b@B's password:
```

0. 最后把A机器的公钥追加到B机器的`authorized_keys`里
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

0. 公钥放在`.ssh/authorized_keys2`

0. `.ssh`目录的权限是700

0. `.ssh/authorized_keys2`的权限是640
