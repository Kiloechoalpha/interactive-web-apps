// IWA 14.1
const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

const message = `Hello, ${firstName} (${age}). I love ${hobby}!`;

const hobbyFunction = () => {
  logTwice(message);
};

hobbyFunction();

//IWA 14.2
function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function internal() {
    const added = this.add(this.internal.a, this.internal.b);
    const multiplied = this.multiply(this.internal.a, this.internal.b);
    return added + multiplied;
  }
  
  // Not allowed to change below this
  
  const example1 = {
    internal: {
      a: 2,
      b: 4,
      c: 8,
    },
    add,
    multiply,
    calculate: internal
  };
  
  const example2 = {
    internal: {
      a: 2,
      b: 2,
      c: 3,
    },
    add,
    multiply,
    calculate: internal
  };
  
  console.log(example1.calculate()); // logs 48
  console.log(example2.calculate()); // logs 12