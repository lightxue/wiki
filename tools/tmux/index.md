# tmux

- 创建新session
```bash
tmux new-session -s basic
tmux new -s basic
```

- 已有session
```bash
tmux list-sessions
tmux ls
```

- attach session
```bash
tmux attach
tmux attach -t session
tmux a -t session
```

- kill session
```bash
tmux kill-session -t basic
```

## window

- rename window `prefix` `,`

- find window `prefix` `f`

- display window menu `prefix` `w`

