(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{527:function(t,e,a){"use strict";a.r(e);var o=a(42),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"logrotate-10例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logrotate-10例"}},[t._v("#")]),t._v(" logrotate 10例")]),t._v(" "),a("p",[t._v("转自 http://www.thegeekstuff.com/2010/07/logrotate-examples/")]),t._v(" "),a("p",[t._v("Managing log files effectively is an essential task for Linux sysadmin.")]),t._v(" "),a("p",[t._v("In this article, let us discuss how to perform following log file operations using UNIX logrotate utility.")]),t._v(" "),a("ul",[a("li",[t._v("Rotate the log file when file size reaches a specific size")]),t._v(" "),a("li",[t._v("Continue to write the log information to the newly created file after rotating the old log file")]),t._v(" "),a("li",[t._v("Compress the rotated log files")]),t._v(" "),a("li",[t._v("Specify compression option for the rotated log files")]),t._v(" "),a("li",[t._v("Rotate the old log files with the date in the filename")]),t._v(" "),a("li",[t._v("Execute custom shell scripts immediately after log rotation")]),t._v(" "),a("li",[t._v("Remove older rotated log files")])]),t._v(" "),a("h2",{attrs:{id:"_1-logrotate-configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-logrotate-configuration-files"}},[t._v("#")]),t._v(" 1. Logrotate Configuration files")]),t._v(" "),a("p",[t._v("Following are the key files that you should be aware of for logrotate to work properly.")]),t._v(" "),a("p",[a("code",[t._v("/usr/sbin/logrotate")]),t._v(" – The logrotate command itself.")]),t._v(" "),a("p",[a("code",[t._v("/etc/cron.daily/logrotate")]),t._v(" – This shell script executes the logrotate command everyday.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/cron.daily/logrotate\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/sh")]),t._v("\n\n/usr/sbin/logrotate /etc/logrotate.conf\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXITVALUE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$?")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$EXITVALUE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    /usr/bin/logger -t "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logrotate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ALERT exited abnormally with ['),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$EXITVALUE")]),t._v(']"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("p",[a("code",[t._v("/etc/logrotate.conf")]),t._v(" – Log rotation configuration for all the log files are specified in this file.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/logrotate.conf\nweekly\nrotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\ncreate\ninclude /etc/logrotate.d\n/var/log/wtmp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    monthly\n    minsize 1M\n    create 0664 root utmp\n    rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("/etc/logrotate.d")]),t._v(" – When individual packages are installed on the system, they drop the log rotation configuration information in this directory. For example, yum log rotate configuration information is shown below.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/logrotate.d/yum\n/var/log/yum.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    missingok\n    notifempty\n    size 30k\n    yearly\n    create 0600 root root\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-logrotate-size-option-rotate-the-log-file-when-file-size-reaches-a-specific-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-logrotate-size-option-rotate-the-log-file-when-file-size-reaches-a-specific-limit"}},[t._v("#")]),t._v(" 2. Logrotate size option: Rotate the log file when file size reaches a specific limit")]),t._v(" "),a("p",[t._v("If you want to rotate a log file (for example, /tmp/output.log) for every 1KB, create the logrotate.conf as shown below.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        size 1k\n        create "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),t._v(" bala bala\n        rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This logrotate configuration has following three options:")]),t._v(" "),a("ul",[a("li",[t._v("size 1k – logrotate runs only if the filesize is equal to (or greater than) this size.")]),t._v(" "),a("li",[t._v("create – rotate the original file and create the new file with specified permission, user and group.")]),t._v(" "),a("li",[t._v("rotate – limits the number of log file rotation. So, this would keep only the recent 4 rotated log files.")])]),t._v(" "),a("p",[t._v("Before the logrotation, following is the size of the output.log:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l /tmp/output.log\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" bala bala "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25868")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),t._v("-06-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":19 /tmp/output.log\n")])])]),a("p",[t._v("Now, run the logrotate command as shown below. Option -s specifies the filename to write the logrotate status.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logrotate")]),t._v(" -s /var/log/logstatus logrotate.conf\n")])])]),a("p",[t._v("Note : whenever you need of log rotation for some files, prepare the logrotate configuration and run the logroate command manually.\nAfter the logrotation, following is the size of the output.log:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l /tmp/output*\n-rw-r--r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" bala bala "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25868")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),t._v("-06-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":20 output.log.1\n-rwx------ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" bala bala        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),t._v("-06-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":20 output.log\n")])])]),a("p",[t._v("Eventually this will keep following setup of rotated log files.")]),t._v(" "),a("ul",[a("li",[t._v("output.log.4.")]),t._v(" "),a("li",[t._v("output.log.3")]),t._v(" "),a("li",[t._v("output.log.2")]),t._v(" "),a("li",[t._v("output.log.1")]),t._v(" "),a("li",[t._v("output.log")])]),t._v(" "),a("p",[t._v("Please remember that after the log rotation, the log file corresponds to the service would still point to rotated file (output.log.1) and keeps on writing in it. You can use the above method, if you want to rotate the apache "),a("code",[t._v("access_log")]),t._v(" or "),a("code",[t._v("error_log")]),t._v(" every 5 MB.")]),t._v(" "),a("p",[t._v("Ideally, you should modify the /etc/logrotate.conf to specify the logrotate information for a specific log file.")]),t._v(" "),a("p",[t._v("Also, if you are having huge log files, you can use: 10 Awesome Examples for Viewing Huge Log Files in Unix")]),t._v(" "),a("h2",{attrs:{id:"_3-logrotate-copytruncate-option-continue-to-write-the-log-information-in-the-newly-created-file-after-rotating-the-old-log-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-logrotate-copytruncate-option-continue-to-write-the-log-information-in-the-newly-created-file-after-rotating-the-old-log-file"}},[t._v("#")]),t._v(" 3. Logrotate copytruncate option: Continue to write the log information in the newly created file after rotating the old log file.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         size 1k\n         copytruncate\n         rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("copytruncate instruct logrotate to creates the copy of the original file (i.e rotate the original log file) and truncates the original file to zero byte size. This helps the respective service that belongs to that log file can write to the proper file.")]),t._v(" "),a("p",[t._v("While manipulating log files, you might find the sed substitute, sed delete tips helpful.")]),t._v(" "),a("h2",{attrs:{id:"_4-logrotate-compress-option-compress-the-rotated-log-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-logrotate-compress-option-compress-the-rotated-log-files"}},[t._v("#")]),t._v(" 4. Logrotate compress option: Compress the rotated log files")]),t._v(" "),a("p",[t._v("If you use the compress option as shown below, the rotated files will be compressed with gzip utility.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        size 1k\n        copytruncate\n        create "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),t._v(" bala bala\n        rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n        compress\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Output of compressed log file:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /tmp/output*\noutput.log.1.gz output.log\n")])])]),a("h2",{attrs:{id:"_5-logrotate-dateext-option-rotate-the-old-log-file-with-date-in-the-log-filename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-logrotate-dateext-option-rotate-the-old-log-file-with-date-in-the-log-filename"}},[t._v("#")]),t._v(" 5. Logrotate dateext option: Rotate the old log file with date in the log filename")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        size 1k\n        copytruncate\n        create "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),t._v(" bala bala\n        dateext\n        rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n        compress\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("After the above configuration, you’ll notice the date in the rotated log file as shown below.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -lrt /tmp/output*\n-rw-r--r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" bala bala "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8980")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),t._v("-06-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":10 output.log-20100609.gz\n-rwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" bala bala     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),t._v("-06-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":11 output.log\n")])])]),a("p",[t._v("This would work only once in a day. Because when it tries to rotate next time on the same day, earlier rotated file will be having the same filename. So, the logrotate wont be successful after the first run on the same day.")]),t._v(" "),a("p",[t._v("Typically you might use tail -f to view the output of the log file in realtime. You can even combine multiple tail -f output and display it on single terminal.")]),t._v(" "),a("h2",{attrs:{id:"_6-logrotate-monthly-daily-weekly-option-rotate-the-log-file-weekly-daily-monthly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-logrotate-monthly-daily-weekly-option-rotate-the-log-file-weekly-daily-monthly"}},[t._v("#")]),t._v(" 6. Logrotate monthly, daily, weekly option: Rotate the log file weekly/daily/monthly")]),t._v(" "),a("p",[t._v("For doing the rotation monthly once,")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        monthly\n        copytruncate\n        rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n        compress\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Add the weekly keyword as shown below for weekly log rotation.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        weekly\n        copytruncate\n        rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n        compress\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Add the daily keyword as shown below for every day log rotation. You can also rotate logs hourly.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        daily\n        copytruncate\n        rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n        compress\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_7-logrotate-postrotate-endscript-option-run-custom-shell-scripts-immediately-after-log-rotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-logrotate-postrotate-endscript-option-run-custom-shell-scripts-immediately-after-log-rotation"}},[t._v("#")]),t._v(" 7. Logrotate postrotate endscript option: Run custom shell scripts immediately after log rotation")]),t._v(" "),a("p",[t._v("Logrotate allows you to run your own custom shell scripts after it completes the log file rotation. The following configuration indicates that it will execute myscript.sh after the logrotation.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        size 1k\n        copytruncate\n        rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n        compress\n        postrotate\n               /home/bala/myscript.sh\n        endscript\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_8-logrotate-maxage-option-remove-older-rotated-log-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-logrotate-maxage-option-remove-older-rotated-log-files"}},[t._v("#")]),t._v(" 8. Logrotate maxage option: Remove older rotated log files")]),t._v(" "),a("p",[t._v("Logrotate automatically removes the rotated files after a specific number of days.  The following example indicates that the rotated log files would be removed after 100 days.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        size 1k\n        copytruncate\n        rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n        compress\n        maxage "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_9-logrotate-missingok-option-dont-return-error-if-the-log-file-is-missing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-logrotate-missingok-option-dont-return-error-if-the-log-file-is-missing"}},[t._v("#")]),t._v(" 9. Logrotate missingok option: Dont return error if the log file is missing")]),t._v(" "),a("p",[t._v("You can ignore the error message when the actual file is not available by using this option as shown below.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        size 1k\n        copytruncate\n        rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n        compress\n        missingok\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_10-logrotate-compresscmd-and-compressext-option-sspecify-compression-command-for-the-log-file-rotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-logrotate-compresscmd-and-compressext-option-sspecify-compression-command-for-the-log-file-rotation"}},[t._v("#")]),t._v(" 10. Logrotate compresscmd and compressext option: Sspecify compression command for the log file rotation")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" logrotate.conf\n/tmp/output.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        size 1k\n        copytruncate\n        create\n        compress\n        compresscmd /bin/bzip2\n        compressext .bz2\n        rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Following compression options are specified above:")]),t._v(" "),a("ul",[a("li",[t._v("compress – Indicates that compression should be done.")]),t._v(" "),a("li",[t._v("compresscmd – Specify what type of compression command should be used. For example: /bin/bzip2")]),t._v(" "),a("li",[t._v("compressext – Specify the extension on the rotated log file. Without this option, the rotated file would have the default extension as .gz. So, if you use bzip2 compressioncmd, specify the extension as .bz2 as shown in the above example.入门10例")])])])}),[],!1,null,null,null);e.default=s.exports}}]);