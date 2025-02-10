
/*
const newDirPath = path.resolve(__dirname, "day11");
console.log("new dir path is : ", newDirPath)

//fs.mkdirSync(newDirPath); // for sync operation
//for Async
fs.mkdir(newDirPath, (err) => {
    if (err) console.log(`Error occurered ${err}`)
    else console.log("dir created succuessfully")
})

//for read directory
const readDirPath = path.resolve(__dirname, "../day8");
const res = fs.readdir(readDirPath, (err, files) => {
    if (err) console.log(`Got error ${err}`)
    files.forEach(val => {console.log(`File name is : ${val}`)})
})
*/
const fs = require('fs');
const path = require('path')
const filetobeCreated = path.resolve(__dirname, "dummy.txt");
const filetobeCreated2 = path.resolve(__dirname, "dummy.json");
const data = `My name is shailesh`
//fs.writeFileSync(filetobeCreated, data);

const jsonObject = {
    name: "Shailesh",
    company: "IHS",
    student: ["Varsha", "Ritviz"]
}
const jsondata = JSON.stringify(jsonObject);
fs.writeFile(filetobeCreated2, jsondata, (err) => {
    if (err) console.log(`Got error ${err}`)
    else console.log('created file')
})