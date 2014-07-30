# asyncio笔记

0. `__alll__`是什么意思，.event是不是指当前目录?
```python
# This relies on each of the submodules having an __all__ variable.
from .events import *
```

0. task.coroutine把函数封装成generator function

0. task.Task继承futures.Future，Task有什么用?

0. task.wait和task.wait\_for调用\_wait，函数里waiter是futures.Future

0. yield from跟yield有什么区别
