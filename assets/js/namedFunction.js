const namedFunction = () => {
    var foo = function printX() {
        let x = 20;
        console.log(x);
        // 20
    }
    console.log(foo.name); 
    foo();
} 

export const unNamedFunction = () => {
    var foo = function() {
        let x = 20;
        console.log(x);
        // 20
    }
    console.log(foo.name);
    foo();
}

export default namedFunction;