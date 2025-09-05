const signal = AbortSignal.timeout(20);

console.log('1 signal.aborted: ', signal.aborted);

setTimeout(() => {
  console.log('2 signal.aborted: ', signal.aborted);
}, 40);
