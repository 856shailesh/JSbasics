/**
 * async methods : doens't flow one by one , e.g loading of a website . Not guranted when it will load completely
 * negative : one operation can take too much time and can block the execution of next fast performing oeprations.
 * Flow of execution
 * JS runtime env > CallStack > GEC/EC > Event API > MicrTask Queue (promise) > Call back queue.
 * Different type of async methods : 1. those who doens't return promise . eg setTimeOut
 * Flow : GEC > EC > Event API > CallBakc Queue > EC.
 *  2. return promise  : url.fetch();
 * Promise contain : data , state
 * Handle a promise
 

console.log("Start");
setTimeout(() => { console.log("Executed") }, 2000);
console.log("End");
*/

//const req = fetch("https://google.com").then(res => console.log(res))

export default function getGoogle() {
    const req = fetch("https://google.com");
    console.log("Done", req)
}
getGoogle()
