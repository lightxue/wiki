# 简单的监控脚本

```sh
#!/bin/bash

# Author: lightxue
# LastChange: 2013-01-09 11:37:20

basedir=$(cd $(dirname "$0"); pwd)
logfn="$basedir/restart.log"
tr_redis="$basedir/tr_redis"


redis_proc=$(pgrep redis-server | wc -l)

if [ $redis_proc -eq 0 ]; then
    echo "$(date '+%F %T') redis server restart " >> $logfn
    sleep 1
    $tr_redis start
    wget 10.150.23.77/pushtask -O /dev/null 2> /dev/null
fi
```


