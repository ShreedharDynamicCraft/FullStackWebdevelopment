const os = require("os");

console.log(os.arch());

const freeMemory = os.freemem();

console.log(freeMemory);

const totalmemory = os.totalmem();

console.log(totalmemory);


const host = os.hostname();

console.log(host);

