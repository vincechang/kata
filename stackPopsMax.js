function Stack() {
  this.a = [];

  this.push = (v) => {
    const length = this.a.length;
    let nowMax;
    let nextMax;
    if (!length) {
      nextMax = v;
    } else {
      nowMax = this.a[length - 1].m;
      nextMax = v > nowMax ? v : nowMax;
    }
    console.log(`v:${v}, nowMax:${nowMax}, nextMax:${nextMax}`);
    this.a.push({
      v,
      m: nextMax,
    });
  };

  this.pop = () => {
    const r = this.a.pop();
    console.log(r);
    return r;
  };
  return this;
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(3);
stack.push(2);
stack.push(1);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
