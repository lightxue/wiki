#!/bin/bash

# kill any running gollums
ps -ef | grep unicorn | grep -v grep | awk '{print $2}' | xargs kill -9
# start gollum as a background process
cd /var/www/wiki
unicorn -c unicorn.conf.rb -D

