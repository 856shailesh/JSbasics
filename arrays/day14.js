const cust = ["ab sd", "sk aa", "cab s", "aa zaza"]
//Return where first name is sk
const Fullname = cust.find((val, index, arr) => {
    if (val.split(" ")[0] === "aa") {
        return true;
    } 
    }) // split the string & first element
console.log(Fullname)

