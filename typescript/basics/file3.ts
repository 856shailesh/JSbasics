let a2: any = 4;
console.log(a2)

let a3: string | number | boolean = 67;
a3 = "Shailesh"
a3 = true;
console.log(a3)

//Type alias
//create your own data type
type snb = string | number | boolean;

let a5 : snb = true
function f1(): snb {
    return "Shailesh";
}