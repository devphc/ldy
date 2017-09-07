# LDY
----------------------
### METEOR BUILD

```
meteor build --server="http://118.190.159.131" ~/workspace/build
```

### 前端打包上传服务器地址
```
root@118.190.159.131:/root/home/meteor/build
```
### 后端打包上传服务器地址
```
root@118.190.159.131:/root/home/meteor/adminbuild
```

### 前端启动配置

```
export MONGO_URL=mongodb://localhost:27017/meteor && export ROOT_URL='http://999.988rmb.com' && export PORT=1001 && node main.js
```
### 后端启动配置
```
export MONGO_URL=mongodb://localhost:27017/meteor && export ROOT_URL='http://999.988rmb.com' && export PORT=4000 && node main.js
```
### 查询端口占用情况

```
netstat -apn | grep
```

### 杀死进程

```
kill -9 
```

### METEOR START

```
export MONGO_URL=mongodb://localhost:3001/meteor
```
```
meteor --port 4000
```