export default {
  namespace: 'test',
  state: [1,2],
  reducers: {
    increse(state) {

      return ++state
    }
  },
  effects: {
    *add(action, { call, put }) {
      console.log(call)
      yield  reqPromise()
      yield put({ type: 'increse' });
    },
  },

};

function  reqPromise() {
  return new Promise((resolve ,reject)=>{
    setTimeout(resolve("async request success"),1000)
  })
}
