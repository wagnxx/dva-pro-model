const MATCH = 'shouldNotMATCHTAg';
const isFunc = f => typeof f === 'function';
const isIterator = fn => fn && isFunc(fn.next);

function channel() {
  const subscribers = [];
  function take(sub, matcher) {
    sub[MATCH]=matcher;
    subscribers.push(sub)
  }
  function put(item) {
      const arr = subscribers.slice();
      for(let i=0,len=arr.length;i<len;i++){
        const cb = arr[i];
        if(!cb[MATCH] || cb[MATCH](item)){
          arr.splice(i,1);
          return cb(item)
        }
      }
  }
  return {take,put}
}

function proc(iterator, args) {
  next();
  function next() {
    
  }
}
