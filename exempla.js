let myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log(...myIterable)

let {ddd, ddde, eee} = [...myIterable];

let objNovo = {ddd, ddde, eee}

console.log(objNovo)
