# epoll积累

* 阻塞的socket在`epoll_wait`后调用`accept`，在`epoll_wait`返回到accept调用这段时间，服务器收到rst报文，会导致调用accept阻塞，直到下一个连接的到来。

* stale event

