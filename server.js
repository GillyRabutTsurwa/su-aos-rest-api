const path = require("path");
const jsonServer = require("json-server");
const jsonFile = path.join(__dirname, "data/db.json");

const server = jsonServer.create();
const router = jsonServer.router(jsonFile);

const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
