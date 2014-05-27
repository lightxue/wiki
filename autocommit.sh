#!/bin/bash
#
# gitwait - watch file and git commit all changes as they happen
#

GIT_PATH=/var/www/wiki

while true; do

    inotifywait -qq -e CLOSE_WRITE $GIT_PATH

    cd $GIT_PATH
    git pull && git add -A && git commit -m "auto commit" && git push

done
