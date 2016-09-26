---
title: logrotate 10例
---

转自 http://www.thegeekstuff.com/2010/07/logrotate-examples/

Managing log files effectively is an essential task for Linux sysadmin.

In this article, let us discuss how to perform following log file operations using UNIX logrotate utility.

- Rotate the log file when file size reaches a specific size
- Continue to write the log information to the newly created file after rotating the old log file
- Compress the rotated log files
- Specify compression option for the rotated log files
- Rotate the old log files with the date in the filename
- Execute custom shell scripts immediately after log rotation
- Remove older rotated log files

## 1. Logrotate Configuration files

Following are the key files that you should be aware of for logrotate to work properly.

`/usr/sbin/logrotate` – The logrotate command itself.

`/etc/cron.daily/logrotate` – This shell script executes the logrotate command everyday.

```sh
$ cat /etc/cron.daily/logrotate
#!/bin/sh

/usr/sbin/logrotate /etc/logrotate.conf
EXITVALUE=$?
if [ $EXITVALUE != 0 ]; then
    /usr/bin/logger -t logrotate "ALERT exited abnormally with [$EXITVALUE]"
fi
exit 0
```

`/etc/logrotate.conf` – Log rotation configuration for all the log files are specified in this file.

```sh
$ cat /etc/logrotate.conf
weekly
rotate 4
create
include /etc/logrotate.d
/var/log/wtmp {
    monthly
    minsize 1M
    create 0664 root utmp
    rotate 1
}
```

`/etc/logrotate.d` – When individual packages are installed on the system, they drop the log rotation configuration information in this directory. For example, yum log rotate configuration information is shown below.

```sh
$ cat /etc/logrotate.d/yum
/var/log/yum.log {
    missingok
    notifempty
    size 30k
    yearly
    create 0600 root root
}
```

## 2. Logrotate size option: Rotate the log file when file size reaches a specific limit

If you want to rotate a log file (for example, /tmp/output.log) for every 1KB, create the logrotate.conf as shown below.

```sh
$ cat logrotate.conf
/tmp/output.log {
        size 1k
        create 700 bala bala
        rotate 4
}
```

This logrotate configuration has following three options:

- size 1k – logrotate runs only if the filesize is equal to (or greater than) this size.
- create – rotate the original file and create the new file with specified permission, user and group.
- rotate – limits the number of log file rotation. So, this would keep only the recent 4 rotated log files.

Before the logrotation, following is the size of the output.log:

```sh
$ ls -l /tmp/output.log
-rw-r--r-- 1 bala bala 25868 2010-06-09 21:19 /tmp/output.log
```

Now, run the logrotate command as shown below. Option -s specifies the filename to write the logrotate status.

```sh
$ logrotate -s /var/log/logstatus logrotate.conf
```

Note : whenever you need of log rotation for some files, prepare the logrotate configuration and run the logroate command manually.
After the logrotation, following is the size of the output.log:

```sh
$ ls -l /tmp/output*
-rw-r--r--  1 bala bala 25868 2010-06-09 21:20 output.log.1
-rwx------ 1 bala bala        0 2010-06-09 21:20 output.log
```

Eventually this will keep following setup of rotated log files.

- output.log.4.
- output.log.3
- output.log.2
- output.log.1
- output.log

Please remember that after the log rotation, the log file corresponds to the service would still point to rotated file (output.log.1) and keeps on writing in it. You can use the above method, if you want to rotate the apache `access_log` or `error_log` every 5 MB.

Ideally, you should modify the /etc/logrotate.conf to specify the logrotate information for a specific log file.

Also, if you are having huge log files, you can use: 10 Awesome Examples for Viewing Huge Log Files in Unix

## 3. Logrotate copytruncate option: Continue to write the log information in the newly created file after rotating the old log file.

```sh
$ cat logrotate.conf
/tmp/output.log {
         size 1k
         copytruncate
         rotate 4
}
```

copytruncate instruct logrotate to creates the copy of the original file (i.e rotate the original log file) and truncates the original file to zero byte size. This helps the respective service that belongs to that log file can write to the proper file.

While manipulating log files, you might find the sed substitute, sed delete tips helpful.

## 4. Logrotate compress option: Compress the rotated log files

If you use the compress option as shown below, the rotated files will be compressed with gzip utility.

```sh
$ cat logrotate.conf
/tmp/output.log {
        size 1k
        copytruncate
        create 700 bala bala
        rotate 4
        compress
}
```

Output of compressed log file:

```sh
$ ls /tmp/output*
output.log.1.gz output.log
```

## 5. Logrotate dateext option: Rotate the old log file with date in the log filename

```sh
$ cat logrotate.conf
/tmp/output.log {
        size 1k
        copytruncate
        create 700 bala bala
        dateext
        rotate 4
        compress
}
```

After the above configuration, you’ll notice the date in the rotated log file as shown below.

```sh
$ ls -lrt /tmp/output*
-rw-r--r--  1 bala bala 8980 2010-06-09 22:10 output.log-20100609.gz
-rwxrwxrwx 1 bala bala     0 2010-06-09 22:11 output.log
```

This would work only once in a day. Because when it tries to rotate next time on the same day, earlier rotated file will be having the same filename. So, the logrotate wont be successful after the first run on the same day.

Typically you might use tail -f to view the output of the log file in realtime. You can even combine multiple tail -f output and display it on single terminal.

## 6. Logrotate monthly, daily, weekly option: Rotate the log file weekly/daily/monthly

For doing the rotation monthly once,

```sh
$ cat logrotate.conf
/tmp/output.log {
        monthly
        copytruncate
        rotate 4
        compress
}
```

Add the weekly keyword as shown below for weekly log rotation.

```sh
$ cat logrotate.conf
/tmp/output.log {
        weekly
        copytruncate
        rotate 4
        compress
}
```

Add the daily keyword as shown below for every day log rotation. You can also rotate logs hourly.

```sh
$ cat logrotate.conf
/tmp/output.log {
        daily
        copytruncate
        rotate 4
        compress
}
```

## 7. Logrotate postrotate endscript option: Run custom shell scripts immediately after log rotation

Logrotate allows you to run your own custom shell scripts after it completes the log file rotation. The following configuration indicates that it will execute myscript.sh after the logrotation.

```sh
$ cat logrotate.conf
/tmp/output.log {
        size 1k
        copytruncate
        rotate 4
        compress
        postrotate
               /home/bala/myscript.sh
        endscript
}
```

## 8. Logrotate maxage option: Remove older rotated log files

Logrotate automatically removes the rotated files after a specific number of days.  The following example indicates that the rotated log files would be removed after 100 days.

```sh
$ cat logrotate.conf
/tmp/output.log {
        size 1k
        copytruncate
        rotate 4
        compress
        maxage 100
}
```

## 9. Logrotate missingok option: Dont return error if the log file is missing

You can ignore the error message when the actual file is not available by using this option as shown below.

```sh
$ cat logrotate.conf
/tmp/output.log {
        size 1k
        copytruncate
        rotate 4
        compress
        missingok
}
```

## 10. Logrotate compresscmd and compressext option: Sspecify compression command for the log file rotation

```sh
$ cat logrotate.conf
/tmp/output.log {
        size 1k
        copytruncate
        create
        compress
        compresscmd /bin/bzip2
        compressext .bz2
        rotate 4
}
```

Following compression options are specified above:

- compress – Indicates that compression should be done.
- compresscmd – Specify what type of compression command should be used. For example: /bin/bzip2
- compressext – Specify the extension on the rotated log file. Without this option, the rotated file would have the default extension as .gz. So, if you use bzip2 compressioncmd, specify the extension as .bz2 as shown in the above example.入门10例
