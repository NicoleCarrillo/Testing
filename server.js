const http = require('http')
const server = http.createServer(routes)
const routes = require("./routes")
server.listen(8080);