#!/bin/bash
#
# gitwait - watch file and git commit all changes as they happen
#

GIT_PATH=/var/www/wiki

while true; do

  inotifywait -qq -e CLOSE_WRITE ~/.calendar/calendar

  cd ~/.calendar; git commit -a -m 'autocommit on change'

done
