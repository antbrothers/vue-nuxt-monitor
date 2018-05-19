# vue-nuxt-monitor
前景：spa 虽然好用，但是也有他的痛点，seo,首屏加载...是一个缺陷,但是也不是没法解决，
借助nuxt或者vue-server-render实现一个服务端渲染。
技术栈：vue 全家桶，nuxt
后端： node express mysql sequlize

##### 目录介绍
```js
|--- assets                 // 静态资源
|--- components             // 组件
|--- layouts                // 模板
|--- middleware             // 中间件
|--- pages                  // 页面
|    |--- home.vue          // home页面
|    |--- index.vue         // index页面
|--- plugins                // 插件
|    |--- axios.js          // 和后台交互模块
|--- server                 // 服务
|    |--- config            // 和数据库连接的配置
|    |--- controllers       // 控制层
|    |--- middleware        // 服务中间件
|    |--- models            // 数据模型
|    |--- services          // 业务逻辑层
|    |--- util              // 工具类
|         |--- httpclient.js
|    |--- contorller.js     //自动扫描控制层文件
|    |--- index.js          // 入口文件
|--- static
|--- store                  // 转态管理
```

##### 部署
```js
    1. npm run build 会生成 .nuxt 和 build文件
    2. 把.nuxt build server package.json 通过ftp传到服务器上
    3. 在服务器上执行 npm install
    4. 通过pm2 启动 pm2 start npm --nam nuxt -- start
```
#### v8-profiler 进行内存溢出排除