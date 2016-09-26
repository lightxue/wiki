---
title: C语言
---

0. x2c("4c") --> '\x4c'，这里的0xdf靓了
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

0. 吞分号的宏，http://stackoverflow.com/questions/154136/do-while-and-if-else-statements-in-c-c-macros
```c
#define FOO(X) do { f(X); g(X); } while (0)
#define FOO(X) if (1) { f(X); g(X); } else
```

0. 呆顼的do while减少if法

0. builtin_offsetof


