# tmux

0. 创建新session
```sh
tmux new-session -s basic
tmux new -s basic
```

0. 已有session
```sh
tmux list-sessions
tmux ls
```

0. attach session
```sh
tmux attach
tmux attach -t session
```

0. kill session
```sh
tmux kill-session -t basic
```
