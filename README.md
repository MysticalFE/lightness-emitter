# lightness-emitter  [![npm](https://img.shields.io/npm/v/lightness-emitter.svg)](https://www.npmjs.com/package/lightness-emitter)

非常轻量的事件处理（event-pubsub）库

## 安装

```node
npm install lightness-emitter
```

## 使用

```typescript
// 使用es6导入
import lightnessEmitter from 'lightness-emitter'

// 使用commonjs导入
const lightnessEmitter = require('lightness-emitter')

const emitter = new lightnessEmitter()

// 监听事件
emitter.on('demo', data => console.log(data) )

// 执行事件
emitter.emit('foo', { a: 'b' })

//只执行一次事件并清除该事件
emitter.once('foo', { a: 'b' })

// 清除全部事件
emitter.all.clear()

//清除指定事件
function onFoo() {}
emitter.on('foo', onFoo)
emitter.off('foo', onFoo)
```

## License

MIT
