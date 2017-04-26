function Stack() {
  this.a = [];

  this.getMax = () => {
    const length = this.a.length;
    return length === 0 ? null : this.a[length - 1].m;
  };

  this.push = (v) => {
    const nowMax = this.getMax();
    const nextMax = nowMax === null || v > nowMax ? v : nowMax;
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
