# SimpleHTTPServer绑定IP

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import SimpleHTTPServer
import SocketServer

PORT = 8000

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("10.1.152.119", PORT), Handler)

print "serving at port", PORT
httpd.serve_forever()
```

