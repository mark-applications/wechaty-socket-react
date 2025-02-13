# 版本历史

## V0.2.0
> 2020-09-20 13:09:23

完成了第二版基于`socket.io`的框架。

本版机器人会在网页加载与退出时这两种情况下新建。

由此带来的体验就是，首次加载会很流畅，当用户点击登录时机器人已经登陆并且进入了扫码状态（网页呈现需要2秒左右），当用户点击登录时二维码能够立即加载。

但是若用户点击退出后立即再点登录，则会等待3-5秒才能出现一张新的二维码，这里由于`wechaty`框架或是微信设计的原因很难优化，因为当`wechaty`的机器人`logout`之后该`bot`的扫码会停留在`Confirmed`状态，而那张二维码由于已经被确认登录，无法再使用。

如果用户退出后再点击登录，我们应当认定用户想在该浏览器该窗口该页面上登录另外一个账号，基于此我们不得不重新新建一个机器人，刷新它的`puppet`，这需要时间。

除非当用户登录之后退出之前立即异步再开一个机器人，但这样的开销过大，并且难以厘定该机器人与该浏览器之间的绑定关系，毕竟还要考虑`socket`。

### TODO
- [ ] 初始化全局单例机器人，每当有网页访问时则获取该机器人与浏览器`cookie`的状态，以判断是否拥有权限操作该机器人。 


## V0.1.0
> 2020-09-18

完成了第一版基于`koa`的框架
