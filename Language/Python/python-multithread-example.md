# python多线程例子
------------------------------
摘自[[http://guanjh.iteye.com/blog/88904]]

Python中如果要使用线程的话，python的lib中提供了两种方式。一种是函数式，一种是用类来包装的线程对象。举两个简单的例子希望起到抛砖引玉的作用，关于多线程编程的其他知识例如互斥、信号量、临界区等请参考python的文档及相关资料。

1、调用thread模块中的start_new_thread()函数来产生新的线程，请看代码：
```python
###        thread_example.py
import time
import thread
def timer(no,interval):  #自己写的线程函数
        while True:
                print 'Thread :(%d) Time:%s'%(no,time.ctime())
                time.sleep(interval)
def test(): #使用thread.start_new_thread()来产生2个新的线程
        thread.start_new_thread(timer,(1,1))
        thread.start_new_thread(timer,(2,3))
if __name__=='__main__':
        test()

```

这个是thread.start_new_thread(function,args[,kwargs])函数原型，其中function参数是你将要调用的线程函数；args是讲传递给你的线程函数的参数，他必须是个tuple类型；而kwargs是可选的参数。
线程的结束一般依靠线程函数的自然结束；也可以在线程函数中调用thread.exit()，他抛出SystemExit exception，达到退出线程的目的。

2、通过调用threading模块继承threading.Thread类来包装一个线程对象。请看代码：
```python
import threading
import time
class timer(threading.Thread):     #我的timer类继承自threading.Thread类
    def __init__(self,no,interval):
        #在我重写__init__方法的时候要记得调用基类的__init__方法
        threading.Thread.__init__(self)
        self.no=no
        self.interval=interval

    def run(self):  #重写run()方法，把自己的线程函数的代码放到这里
        while True:
            print 'Thread Object (%d), Time:%s'%(self.no,time.ctime())
            time.sleep(self.interval)

def test():
    threadone=timer(1,1)    #产生2个线程对象
    threadtwo=timer(2,3)
    threadone.start()   #通过调用线程对象的.start()方法来激活线程
    threadtwo.start()

if __name__=='__main__':
    test()
```

其实thread和threading的模块中还包含了其他的很多关于多线程编程的东西，例如锁、定时器、获得激活线程列表等等，请大家仔细参考python的文档！

