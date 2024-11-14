function getFibonacci() {
    let a = 0, b = 1;
    return function() {
      let next = a;
      a = b;
      b = next + b;
      return next;
    };
  }
  let fibonacci = getFibonacci();
  console.log(fibonacci());
  console.log(fibonacci()); 
  console.log(fibonacci());
  console.log(fibonacci());
  console.log(fibonacci());
  console.log(fibonacci());
  console.log(fibonacci());
  console.log(fibonacci());
  console.log(fibonacci());