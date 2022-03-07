import Koa from 'koa'
import Router from 'koa-router'
import Static from 'koa-static'
import path from 'path'
const app = new Koa()
const router = new Router()



router.get("/", async (ctx, next) => {
    console.log('删除资源1')
    ctx.body = '?'
})
router.post("/", async (ctx, next) => {
    console.log('删除资源2')
    ctx.body = '?'
})
router.put("/", async (ctx, next) => {
    console.log('删除资源3')
    ctx.body = '?'
})
router.delete("/", async (ctx, next) => {
    console.log('删除资源4')
    ctx.body = '?'
})
app.use(router.routes())
//app.use(Static(path.join(__dirname, '/build/static')))
//app.use(Static(path.join(__dirname, '/static')))
app.listen(3000)
console.log('start')