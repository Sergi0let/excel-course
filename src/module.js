console.log('Module.js');
async function start() {
  return await Promise.resolve('async ddddd');
}
start().then(console.log);
