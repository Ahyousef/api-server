'use strict'
let file = require("../data/db.json")
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(file)
const middlewares = jsonServer.defaults()


server.use(middlewares)
server.use(router)
router.render = (res, req) => {
    if (req.req.originalMethod == 'GET') {
        let data = res.res.locals.data
        res.res.jsonp({
            count: data.length,
            results: data
        })
    }
}

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})