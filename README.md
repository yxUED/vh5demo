# 基于vue和thinkjs技术栈 前后端分离 h5 APP系统

## 目的
> 带领有缘人系统学习vue技术栈，通过分析相关库的 源码 掌握各库的原理机制，提升基础技能；

> 明目张胆招人。。。便于从围观群众中寻找 合适的 伙伴，共同折腾技术；

> 帮助他人就是帮助自己，促进技术的向前发展贡献微薄之力；

## 技术方案
> 前后端分离，重前端，轻后端，后端以提供mock数据为主，以提高前端开发效率，H5项目开发完以后在服务器上用 Nginx部署。

### 前端
> 基于核心库vue, 及其生态库中的数据状态管理库vuex, 页面路由库vue-router和数据请求库axios构建;

> 采用官方脚手架vue-cli 初始化项目;

> 基于airbnb规范进行eslint 检验;

> 如果需要与后端联调，请看后面的后端配置；

### 后端
> 基于360奇舞团开源的node框架 thinkjs;

> 数据库根据需要使用MySQL或者是mong；

### 如何开发
> 一般只需启动前端工程即可，如需模拟后端请求，也可启动server目录下的后端服务;

#### 启动前端工程

``` bash
# 获取所有代码
git clone https://github.com/yxUED/vh5demo.git

# 进入目录
cd vh5demo

# 安装依赖
npm install

# 启动项目
npm run dev 或者 npm start

# 打包上线
npm run build

# 检验格式
npm run lint
```
#### 启动后端
``` bash

# 进入后端工程目录
cd server

# 安装依赖
npm install

# 启动项目
npm start
```
