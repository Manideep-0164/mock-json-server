const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("/tmp/db.json");
const cors = require("../../../../AppData/Local/Temp/db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(2000, ()=>{
    console.log('JSON Server is running at port: 2000')
})