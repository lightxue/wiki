# tmux

0. 创建新session
```bash
tmux new-session -s basic
tmux new -s basic
```

0. 已有session
```bash
tmux list-sessions
tmux ls
```

0. attach session
```bash
tmux attach
tmux attach -t session
tmux a -t session
```

0. kill session
```bash
tmux kill-session -t basic
```

## window

0. rename window `prefix` `,`

0. find window `prefix` `f`

0. display window menu `prefix` `w`

