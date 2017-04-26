# C/C++

* x2c("4c") --> '\x4c'，这里的0xdf靓了

```c
char TC_Common::x2c(const string &sWhat)
{
    register char digit;

    if(sWhat.length() < 2)
    {
        return '\0';
    }

    digit = (sWhat[0] >= 'A' ? ((sWhat[0] & 0xdf) - 'A')+10 : (sWhat[0] - '0'));
    digit *= 16;
    digit += (sWhat[1] >= 'A' ? ((sWhat[1] & 0xdf) - 'A')+10 : (sWhat[1] - '0'));

    return(digit);
}
```

* 吞分号的宏，http://stackoverflow.com/questions/154136/do-while-and-if-else-statements-in-c-c-macros

```c
#define FOO(X) do { f(X); g(X); } while (0)
#define FOO(X) if (1) { f(X); g(X); } else
```

* 呆顼的`do` `while`减少`if`法。`do` `while`包住逻辑，需要跳出时`break`，就不需要层层嵌套的`if`了。

* builtin_offsetof

* 宏定义实现获取数组大小

```cpp
template <typename T, size_t N>
char (&ArraySizeHelper(T (&array)[N]))[N];
#define arraysize(array) (sizeof(ArraySizeHelper(array)))
```

* g++打印类名的宏: `__PRETTY_FUNCTION__`

* `map::insert`如果key已经存在，会放弃插入，返回已经存在的元素(如果返回值是已经存在的话)；`map::operator[]`如果key存在，新value会覆盖旧value

* 文件读到string里

```cpp
ifstream ifs("filename");
string content(istreambuf_iterator<char>(ifs), istreambuf_iterator<char>());
ifs.close();
```

* 这样的一段代码是为了占用fd 0, 1, 2，免得打开的文件、管道或是socket用了0，1，2，受程序里的printf等影响

```cpp
int fd = open("/dev/null", O_RDWR );
if(fd != -1)
{
   dup2(fd, 0);
   dup2(fd, 1);
   dup2(fd, 2);
}
else
{
   close(0);
   close(1);
   close(2);
}
```

* stl的copy，用的时候要自己保证第三个参数空间够大。不然就用inserter或back_inserter

* stringstream的清空方式

```
stringstream ss;
ss.str("");
// 这样效率更高，少一次构造，但是可主读性不如上面
ss.str(std::string());
```
