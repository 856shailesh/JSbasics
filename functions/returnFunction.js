function outputNames(){
    const fn1 = function (a,b) {
        let c = a+b;
    }
    return fn1;
}

const result = outputNames();
result(2,3)
//console.log(`Output is : ${result}`)

