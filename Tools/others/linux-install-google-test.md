# Linux下安装GoogleTest

在这里下载[[http://code.google.com/p/googletest/]]

解压
```sh
    tar -xzvf gtest-version.tar.gz
```

编译库
```sh
    cd gtest-version
    mkdir mybuild
    cd mybuild
    cmake -G"Unix Makefiles" ..
    make
```

拷到系统对应目录
```sh
    cp -r ../include/gtest /usr/local/include
    cp lib*.a /usr/local/lib
```



