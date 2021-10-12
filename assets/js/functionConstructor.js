export default function functionConstructor(a, b) {
  const sum = new Function("a", "b", "return a+b");
  console.log(this);
  return sum(a, b);
}
 
export const funcConstructor = (a, b) => {
  const sum = new Function("a", "b", "return a+b");
  console.log(this);
  return sum(a, b);
};
