app_directory = "/home/lightxue/www/log/wiki"

worker_processes 1

working_directory app_directory

listen "unix:#{app_directory}/unicorn/wiki.sock", :backlog => 1024

timeout 60

user 'lightxue', 'root'

File.umask(027)

preload_app true

pid "#{app_directory}/unicorn/wiki.pid"

stderr_path "#{app_directory}/unicorn/wiki.stderr.log"
stdout_path "#{app_directory}/unicorn/wiki.stdout.log"
