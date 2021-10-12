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
}