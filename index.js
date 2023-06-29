const jsonServer = require("json-server");
const server = jsonServer.create();
// const router = jsonServer.router("./tmp/db.json");
// const fs = require('fs')
// const path = require("path")
// const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))
const router = jsonServer.router("./db.json")
const cors = require("cors");
const middlewares = jsonServer.defaults();

router.db.readOnly = false;
server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(4000, ()=>{
    console.log('JSON Server is running at port: 2000')
})
//  console.log(path.join(__dirname, 'db.json'))