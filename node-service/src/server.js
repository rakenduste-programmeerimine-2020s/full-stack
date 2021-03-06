const Koa = require('koa')
const cors = require('@koa/cors')
const mongoose = require('mongoose')

const router = require('./routes')

const app = new Koa()

app.use(cors())
app.use(require('koa-bodyparser')({ multipart: true }))
app.use(router.routes())

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const listener = app.listen(process.env.APP_PORT || 3000, () =>
      console.log('App started on port ' + listener.address().port)
    )
  })
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })

mongoose.set('debug', true)

module.exports = app
