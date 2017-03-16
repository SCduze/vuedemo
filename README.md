# vue-cli 结合webpack本地环境搭建

> 一个简单的vue开发环境，基本上就是把推荐的模板fork下来了，主要是配了一套不想一直变动了

## Build Setup（构建步骤）

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

#### 构建说明
* 在config 中index.js中配置了build,配置了proxyTable,以豆瓣其中接口为例，大家可以自行配置，当然也可以写filter
* 本配置中没有配置sass、less等，大家有需要的可以自行配置
* 更多的大家可以参考vue-webpack


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
