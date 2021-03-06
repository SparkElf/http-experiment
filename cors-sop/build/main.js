"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const app = new koa_1.default();
const router = new koa_router_1.default();
router.get("/", async (ctx, next) => {
    console.log('删除资源1');
    ctx.body = '?';
});
router.post("/", async (ctx, next) => {
    console.log('删除资源2');
    ctx.body = '?';
});
router.put("/", async (ctx, next) => {
    console.log('删除资源3');
    ctx.body = '?';
});
router.delete("/", async (ctx, next) => {
    console.log('删除资源4');
    ctx.body = '?';
});
app.use(router.routes());
//app.use(Static(path.join(__dirname, '/build/static')))
//app.use(Static(path.join(__dirname, '/static')))
app.listen(3000);
console.log('start');
