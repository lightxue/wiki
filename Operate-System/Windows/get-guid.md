# 查看guid

# 方法1

```
C:\Users\lightxue>wmic
wmic:root\cli>csproduct list full


Description=Computer System Product
IdentifyingNumber=CNG2242L21
Name=HP Pro 3380 MT
SKUNumber=
UUID=06F1F345-D310-1440-0CA2-27CE369E5279
Vendor=Hewlett-Packard
Version=
```

UUID就是GUID

# 方法2

查看注册表

    HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cryptography
    MachineGuid


