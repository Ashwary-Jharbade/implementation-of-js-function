export default function () {
    // this value
    function myFunction () {
        console.log(this);
    }
    myFunction();

    const myObject = {
        name: "picasso",
        method() {
            console.log(this); 
        }
    }
    myObject.method();

    function MyFunction () {
        console.log(this);
    }
    const context = {
        a :10, b:20
    }
    MyFunction.call(context);
    MyFunction.apply(context);

    // constructor

    function func () {
        this.variable = "10";
    }

    const x = new func();
    console.log(x.variable);

    const arrowFunc = () => {
        this.variable = 20;
    }

    // const y = new arrowFunc(); // error: arrowFunc is not a constructor
    // console.log(y.variable); // 

    // Arguments
    function normal () {
        console.log(arguments);
    }
    normal('a','b')

    const arrow = () => {
        console.log(arguments); // checking parent context
    }
    arrow();
}