# ABTCodeTest

code test

see [egg docs][egg] for more detail.
egg:https://eggjs.org/zh-cn/intro/index.html


### QuickStart 使用egg框架，下面是运行步骤

```bash
git clone https://github.com/xiaomin1990/abt-code-test-egg.git
cd abt-code-test-egg.git
npm i
npm run dev
open http://127.0.0.1:7001/

后台接口地址：http://127.0.0.1:7001/home/show/:blockhash

eg: http://127.0.0.1:7001/home/show/00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa


/schedule/updateBlockData.js 为定时任务，每隔1分钟更新 缓存中存在的blockhash 对应的区块链数据



```

### 单元测试

```bash

$ npm  test

```