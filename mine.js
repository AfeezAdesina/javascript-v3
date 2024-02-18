let str = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let afeez = str.reduce((acc, curr) => {
    return me(mey) => (acc + curr) )};
console.log((afeez)(me));


let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let okay = number.reduce((acc, curr) => { 
    return me() => {
        return acc + curr;
    }
});
console.log(okay());

let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};
user.sayHi(); 
  
let mine = {
    a: 20,
    b: 30,
    add() {
        return this.a + this.b;
    }
};
mine.add(); // 50

let ayo = {
    ...mine,
    a=undefined,
    b=undefined
};
console.log(ayo.add.call((),{a:2,b:3})); // NaN
