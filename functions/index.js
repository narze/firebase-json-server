const functions = require('firebase-functions');
const pluralize = require('pluralize')
const jsonServer = require('json-server')

const main = jsonServer.create()
const api = jsonServer.create()
const router = jsonServer.router('db.json', { foreignKeySuffix: 'Id' })
const middlewares = jsonServer.defaults()

router.render = function (req, res) {
  var path = req.url.replace(/\/$/, '')
  var resourceName = path.split('/')[1] // To get the resource, /people, /posts/
  var last = path.split('/').pop() // To check if the path is resourceName or ID
  var statusCode = res.statusCode
  var json = {}

  if (statusCode < 400) {
    var key = resourceName == last ? resourceName : pluralize.singular(resourceName)
    json[key] = res.locals.data
  }
  json.status = { code: statusCode }

  res.jsonp(json)
}

api.use(middlewares)
api.use(jsonServer.rewriter({
  "/:resource/:id/show": "/:resource/:id",
  "/posts/:category": "/posts?category=:category",
  "/articles\\?id=:id": "/posts/:id"
}))
api.use(router)

main.use('/api', api)

exports.main = functions.https.onRequest(main)
