import Koa from 'koa'
import Router from 'koa-router'
import Static from 'koa-static'
import path from 'path'
const app = new Koa()
const router = new Router()



router.get("/", async (ctx, next) => {
    ctx.response.body = "hello world"
})
app.use(router.routes())
app.use(Static(path.join(__dirname, '/static')))
app.listen(3000)
console.log('start')