# Python

* [[python的epoll代码 | python-epoll]]
* [[python多线程例子 | python-multithread-example]]
* [[SimpleHTTPServer绑定IP | simple-http-server-bind-ip]]
* [[用python的Tkinter做的简单的MVC例子 | tkinter-mvc-example]]
* [[logging使用 | logging-usage]]
* [[python的陷阱与缺陷 | python-traps-and-pitfalls]]
* [[python语法糖 | python-syntactic-sugar]]
* [[How To Write Pythonic Code | http://chrisarndt.de/talks/rupy/2008/output/slides.html]]
* [[PEP 8 -- Style Guide for Python Code | http://www.python.org/dev/peps/pep-0008/]]
* [[asyncio笔记 | asyncio-note]]

----

0. 最近经常在linux执行python程序，比如./server.py，会提示“: No such file or directory”，令人不解。原来是换行符是dos的话就会这样，改成unix换行符就没有问题了

0. 字符串经常做连接操作，用''.join()来连接效率比较高

0. datetime类型对象和1970年以来的秒数互转，datetime.datetime.now()的返回值是datetime对象，time.time()返回的是1970年到现在的秒数。补充一下，UTC是世界协调时间(对于UTC这个名字的来源无力吐槽，详见维基百科)，虽然GMT时间不再用，但我YY可以把UTC和GMT等同。
```python
import datetime
import time

time.mktime(datetime.datetime.now().timetuple())
datetime.datetime.fromtimestamp(time.time())
```

0. time、datetime、str互转
```python
# 把datetime转成字符串
def datetime_toString(dt):
    return dt.strftime("%Y-%m-%d %H:%M:%S")

# 把字符串转成datetime
def string_toDatetime(string):
    return datetime.datetime.strptime(string, "%Y-%m-%d %H:%M:%S")

# 把字符串转成时间戳形式
def string_toTimestamp(strTime):
    return time.mktime(string_toDatetime(strTime).timetuple())

# 把时间戳转成字符串形式
def timestamp_toString(stamp):
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(stamp))

# 把datetime类型转外时间戳形式
def datetime_toTimestamp(dateTim):
    return time.mktime(dateTim.timetuple())
```

0. urllib2.unquote(url)

0. 程序环境变量
```python
os.environ
```

0. 子类初始化父类
```python
# new style class也能用这种方法
class B:
    def __init__(self, s):
        print 'base::init', s

class C(B):
    def __init__(self, s):
        print 'child::init', s
        B.__init__(self, s)

# new style class only
class B(object):
    def __init__(self, s):
        print 'base::init', s

class C(B):
    def __init__(self, s):
        print 'child::init', s
        super(C, self).__init__(s)
```

0. xml转成dict
```python
def xml2dict(node, dic = {}):
    dic[node.tag] = ndic = {}
    [xml2dict(child, ndic) for child in node.getchildren() if child != node]
    ndic['text'] = node.text.strip()
    return dic

from xml.etree import cElementTree as ET
tree = ET.parse('test.xml')
print xml2dict(tree.getroot())
```

0. ini to dict
```python
cf = ConfigParser.ConfigParser()
cf.read(filename)
return dict(cf.__dict__['_sections'].copy()) #里面有的value是orderdict
```

0. python式enum
```python
ALL_TYPES = (
    TOP_LEVEL,  # The type of the 'Google Chrome' folder.
    APPS,
    APP_NOTIFICATION,
    APP_SETTINGS,
    AUTOFILL,
    AUTOFILL_PROFILE,
    BOOKMARK,
    EXTENSIONS,
    HISTORY_DELETE_DIRECTIVE,
    NIGORI,
    PASSWORD,
    PREFERENCE,
    SEARCH_ENGINE,
    SESSION,
    THEME,
    TYPED_URL,
    EXTENSION_SETTINGS) = range(17)
```

0. `is` will return `True` if two variables point to the same object, `==` if the objects referred to by the variables are equal.

0. 计算md5和sha1
```python
import hashlib

md5 = hashlib.md5()
md5.update('string to digest')
print md5.hexdigest()

sha = hashlib.sha1()
sha.update('string to digest')
print sha.hexdigest()
```

0. base64编解码
```python
import base64
s = 'this is a text'
encstr = base64.encodestring(s)
decstr = base64.decodestring(encstr)
```

0. 随机字符
```python
import os
length = 10
print os.urandom(length)
```

0. getter and setter，不要在构造函数里用这个伪变量，可能会把这个函数覆盖
```python
class C:
    def __init__:
        self._channel
    @property
    def channel(self):
        return self._channel

    @channel.setter
    def channel(self, channel):
        self._channel = channel
```

0. 脚本所在位置
```python
__file__

# 这种方法能打出行号
from inspect import currentframe, getframeinfo

frameinfo = getframeinfo(currentframe())
print frameinfo.filename, frameinfo.lineno
```

0. 异常所在的行号
```python
import sys, os

try:
    raise NotImplementedError("No error")
except Exception as e:
    exc_type, exc_obj, exc_tb = sys.exc_info()
    fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    print(exc_type, fname, exc_tb.tb_lineno)

```

0. 列表拷贝
```python
    new_list = old_list[:] # 可语性不太好

    new_list = list(old_list) # 这个很直观

    import copy
    new_list = copy.copy(old_list) # 比list()慢一点，因为需要查出old_list的数据类型

    import copy
    new_list = copy.deepcopy(old_list) # 深度拷贝，更慢，但是有时有必要

    new_list = [x for x in old_list]
```

0. 列表清空
```python
    old_list = [1, 2, 3, 4]

    # 方法1
    old_list[:] = []

    # 方法2
    new_list = old_list
    del new_list[:]
```

0. 字典格式化字符串
```python
    d = {'name' : 'lightxue', 'gender' : 'male'}
    print 'your name is %(name)s, gender is %(gender)s' % d
```

0. id(object)唯一标识一个对象

0. 变量作用域：LEGB(Local->函数，def和lambda；Enclosing->闭包，def和lambda；Global->全局，在module里；Buid-in->内置)

0. binary <-> hex string
```python
>>> s = '\x01\xff'
>>> s.encode('hex_codec')
'01ff'
>>> s.encode('hex_codec').decode('hex_codec')
'\x01\xff'
```

0. 矩阵转置
```python
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
print map(list, zip(*arr))
```

0. unicode unescape
```python
s = r'\u751f\u547d'
print s.decode('unicode-escape')
```

0. string unescape
```python
s = r'\xe7\x94\x9f\xe5\x91\xbd'
print s.decode('string-escape')
```

0. list有函数叫count，比较实用

0. 显示某个文件的汇编代码
```python
python -m dis file.py
```

0. 看函数/类的汇编代码
```python
#!/usr/bin/env python
# encoding: utf-8

def f(*args):
    nargs = len(args)
    print nargs, args

class MyObject(object):
    """Example for dis."""

    CLASS_ATTRIBUTE = 'some value'

    def __init__(self, name):
        self.name = name

    def __str__(self):
        return 'MyObject(%s)' % self.name

if __name__ == '__main__':
    import dis
    dis.dis(f)
    dis.dis(MyObject)
```

0. 用dis调试
```python
#!/usr/bin/env python
# encoding: utf-8

i = 1
j = 0
k = 3

# ... many lines removed ...

try:
    result = k * (i / j) + (i / k)
except:
    import dis
    import sys
    exc_type, exc_value, exc_tb = sys.exc_info()
    dis.distb(exc_tb)
```

0. 把py编译成pyc
```python
python -m py_compile file.py
```

0. 最深代码块限制，在python27源代码里看到这段代码
```c
#define CO_MAXBLOCKS 20 /* Max static block nesting within a function */
```

0. 合并两个dict
```c
d = {'a' : 1, 'b' : 2}
d.update({'a' : 4, 'c' : 3})
print d
#{'a' : 4, 'b' : 2, 'c' : 3}
```

0. dict.setdefault非常实用

0. 在交互界面里，`_`保存了最后打印的变量

0. `class.__mro__`继承关系，方法调用顺序

0. proto buf的encoder.py里的一段注释
```
* We copy any needed global functions to local variables, so that we do not need
  to do costly global table lookups at runtime.
* Similarly, we try to do any attribute lookups at startup time if possible.
* Every field's tag is encoded to bytes at startup, since it can't change at
  runtime.
* Whatever component of the field size we can compute at startup, we do.
* We *avoid* sharing code if doing so would make the code slower and not sharing
  does not burden us too much.  For example, encoders for repeated fields do
  not just call the encoders for singular fields in a loop because this would
  add an extra function call overhead for every loop iteration; instead, we
  manually inline the single-value encoder into the loop.
* If a Python function lacks a return statement, Python actually generates
  instructions to pop the result of the last statement off the stack, push
  None onto the stack, and then return that.  If we really don't care what
  value is returned, then we can save two instructions by returning the
  result of the last statement.  It looks funny but it helps.
```

0. py文件编译成pyc
```
python -m py_compile file.py
```

0. any不很错
```python
# ugly
if needle.endswith('ly') or needle.endswith('ed') or 
    needle.endswith('ing') or needle.endswith('ers'):
    print('Is valid')
else:
    print('Invalid')

# pretty
if any([needle.endswith(e) for e in ('ly', 'ed', 'ing', 'ers')]):
    print('Is valid')
else:
    print('Invalid')

# better
if needle.endswith(('ly', 'ed', 'ing', 'ers')):
    print('Is valid')
else:
    print('Invalid')
```

0. 列表分成n个元素一组
```python
>>> l = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]
>>> zip(*([iter(l)] * 3))
[(3, 1, 4), (1, 5, 9), (2, 6, 5), (3, 5, 8)]
```

0. 找出文件最长行
```python
max(open('test.txt'), key=len)
```

0. 整数所有数字相加之和
```python
sum(map(int, str(n)))
```

0. 正无穷和负无穷
```python
float('Inf')
float('-Inf')
```

0. `__all__`，列表或元组，指出该模块import的时候可以使用哪些对象

0. 显示import指定目录的包
```python
# import当前目录的包
from . import tasks
from .log import logger
# 上一级目录的包
from .. import tasks
```

0. re.sub, \g<1>
0. python ini, json parse


