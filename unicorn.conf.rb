app_directory = File.expand_path(File.dirname(__FILE__))
log_directory = "/home/lightxue/www/log/wiki"

worker_processes 1

working_directory app_directory

listen "0.0.0.0:13131", :backlog => 1024

timeout 60

user 'www-data', 'www-data'

File.umask(000)

preload_app true

pid "#{log_directory}/unicorn/wiki.pid"

stderr_path "#{log_directory}/unicorn/wiki.stderr.log"
stdout_path "#{log_directory}/unicorn/wiki.stdout.log"
