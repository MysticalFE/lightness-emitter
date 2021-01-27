const lightEmitter = require('..').default;
const emitter = new lightEmitter();
emitter.on('demo', data => {
  console.log(data);
});
emitter.emit('demo', 'aaaaa');
