const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("Temp/db.json");
const cors = require("cors");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(2000, ()=>{
    console.log('JSON Server is running at port: 2000')
})