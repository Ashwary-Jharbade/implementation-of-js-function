const functionExpression = () => {
    // console.log(getReactArea(10,20)); // error
    // console.log(getReactArea); // error
    const getReactArea = function(length,breadth) { // getReactArea = undefined
        return length * breadth;
    }
 
    const getCircleArea = (radius) => { // getCircleArea = undefined
        return Math.PI * 2 * radius;
    }

    console.log(getReactArea(10,20)); 
    // 200
    console.log(getCircleArea(1/3.141592653589793));
    // 2
}

export default functionExpression;