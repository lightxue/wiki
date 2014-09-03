# git

0. 项目初始化
```
git init
```

0. 增加文件
```
git add README.md
```

0. 提交
```
git commit -m 'comment'
```

0. 克隆
```
git clone https://github.com/lightxue/vim_config.git
```

0. 查看状态
```
git status
```

0. .gitignore列出忽略的文件模式
    * 空行和#打头的行被git忽略
    * 可以使用glob语法
    * 最后跟/的说明要忽略的是目录

0. 查看unstage的文件的修改部分
```
git diff
```

0. 查看已提交的文件与上次提交时的快照之间的差异
```
git diff --cached
```

0. 移除，从暂存区移除
```
git rm file
```

0. 移除跟踪但不删除文件
```
git rm --cached file
```

0. 重命名
```
git mv filea fileb
```

0. 查看log
```
git log
// 查看内容差异
git -p
// 最近两次更新
git -2
// 增改行数统计
git log --stat
// 指定展示样式，有online, short, full, fuller
git log --pretty=online
// 限制输出长度，有since, until, author, committer
git log --since=2.weeks
```

0. 撤消最后一次提交
```
git commit --amend
```

0. 取消已经暂存的文件
```
git reset HEAD file
```

0. 取消对文件的修改
```
git checkout -- file
```

0. 添加远程仓库
```
git remote add pb git://github.com/paulboone/ticgit.git
```

0. 远程抓取数据
```
git fetch remote-name
```

0. 推送数据到远程仓库
```
git push origin master
```

0. 查看远程仓库信息
```
git remote show remote-name
```

0. 远程仓库删除和重命名
```
git remote rename remote-name-old remote-name-new
git remote rm rename
```

0. 标签
```
// 查看标签
git tag
// 创建含附注的标签
git tag -a v1.4 -m 'my version 1.4'
// 查看标签的版本信息
git show v1.4
// 把所有tag push到远程仓库
git push --tags
```

0. alias
```
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
```

0. 默认编辑器选择
```
git config --global core.editor vim
```

0. 打开高亮
```
git config --global color.ui true
```

0. 记住密码1小时
```
git config --global credential.helper 'cache --timeout 3600'
```

0. Show information about files in the index and the working tree
```
git ls-files
```

0. 指定合并编辑器
```
git config --global merge.tool vimdiff
```

0. 检查已有配置信息
```
git config --list
```

0. 查看staged状态的diff
```
git diff --staged
```
