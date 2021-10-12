export default function generatorFunction() {
    function* range(start,end) {
        for (let i = start; i < end; i++) {
            yield i;
            yield i * i;
        }
    }

    const x = range(1,30);
    console.log(x.next().value);
    // 1 
    console.log(x.next().value);
    // 1
    console.log(x.next().value);
    // 2
    console.log(x.next().value);
    // 4
} 