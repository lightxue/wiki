# logging使用

0. 日志使用
```python
import logging

logger = logging.getLogger('reader xpath prober')
console = logging.StreamHandler()
console.setLevel(logging.DEBUG)
filelog = logging.FileHandler('xpath_prober.log')
filelog.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s | %(levelname)8s | [%(name)s] %(message)s', '%Y-%m-%d %H:%M:%S')
console.setFormatter(formatter)
filelog.setFormatter(formatter)
logger.addHandler(console)
logger.addHandler(filelog)
logger.setLevel(logging.DEBUG)

logger.debug('debug log')
logger.info('info log')
logger.warning('warning log')
logger.error('error log')
logger.critical('critical log')
```

0. rotate log
```python
import logging
from logging.handlers import RotatingFileHandler

def init_log(logname, logpath, logsize, lognum):
    handler = RotatingFileHandler(filename=logpath, maxBytes=logsize,
                                  backupCount=lognum)
    formatter = logging.Formatter(('%(asctime)s | %(process)5d | %(thread)15d | [%(name)s] | %(levelname)5s '
                                   '| %(filename)10s | %(lineno)3d | %(funcName)12s | %(message)s'),
        '%Y-%m-%d %H:%M:%S')
    handler.setFormatter(formatter)
    logger = logging.getLogger(logname)
    logger.addHandler(handler)
    return logger
```

