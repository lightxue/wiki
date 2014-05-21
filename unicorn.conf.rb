app_directory = File.expand_path(File.dirname(__FILE__))
log_directory = "/home/lightxue/www/log/wiki"

worker_processes 1

working_directory app_directory

listen "unix:#{log_directory}/wiki.sock", :backlog => 1024

timeout 60

user 'www-data', 'www-data'

File.umask(027)

preload_app true

pid "#{log_directory}/wiki.pid"

stderr_path "#{log_directory}/wiki.stderr.log"
stdout_path "#{log_directory}/wiki.stdout.log"
