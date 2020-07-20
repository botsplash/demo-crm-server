
const dbJsonFile  = 'db.json'

const jsonServer  = require('json-server')
const server      = jsonServer.create()
const router      = jsonServer.router(dbJsonFile)
const middlewares = jsonServer.defaults()

router.render = (req, res) => {
  const visitor = res.locals.data;
  const result  = Array.isArray(visitor) ? visitor : { visitor };
  res.json(result)
}

server.use(router)
server.listen(9050, () => {
  console.log('demo-crm-server is running')
})
