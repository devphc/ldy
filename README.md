# LDY
----------------------
### METEOR BUILD

```
meteor build --server="http://$_HOSTSIP" ~/workspace/build
```

### 前端打包上传服务器地址
```
root@$_HOSTSIP:/root/home/meteor/build
```
### 后端打包上传服务器地址
```
root@$_HOSTSIP:/root/home/meteor/adminbuild
```

### 查询端口占用情况

```
netstat -apn | grep xxx
```

### 杀死进程

```
kill -9 xxx
```

### METEOR START

```
export MONGO_URL=mongodb://localhost:3001/meteor
```
```
meteor --port 4000
```

```
{
  "apps": [
    {
      "name": "xxx",
      "script": "/root/home/meteor/xxx/bundle/main.js",
      "env": {
        "PORT": xxx,
        "MONGO_URL": "mongodb://127.0.0.1/meteor",
        "ROOT_URL": "http://xxx.com"
      }
    }
  ]
}
```