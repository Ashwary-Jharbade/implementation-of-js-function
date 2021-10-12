const hoisting = () => {
  console.log(x); // undefined
  // console.log(y); // error
  // console.log(z); // error

  var x = 20; // x = undefined
  let y = 40; // y = undefined, x = 20
  const z = 60; // z = undefined, y = 40

  console.log(x); // 20, z = 60
  console.log(y); // 40
  console.log(z); // 60 

  {
    var x = 10; // x = 20
    let y = 20; // y = undefined, x = 10
    const z = 30; // z = undefined, y = 20
    console.log(x, y, z); // 10 20 30
    {
      const z = 10; // z = undefined
      {
        const z = 20; // z = undefined, parent: z = 10
        {
          const z = 30; // z = undefined, parent: z = 20
          // z = 30
        }
      }
    }
  }
  console.log(x); // 10, z = 30;
};

export default hoisting;
