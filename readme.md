# Wechaty-Socket-React

## TODO
- [ ] 对`package`做说明，按照`为了xxx，所以xxx`的格式

## 项目背景
微信聊天已在我们生活中扮演越来越重要的作用，无论是工作、学习、生活、交友等，在很久以前我就对微信的第三方自动化管理工具十分感兴趣，例如基于`python`的`itchat`、`wxpy`，基于`typescript`的`wechaty`和基于`PC`的`wetool`等。

以前基于技术栈的原因，我只针对基于`python`的第三方库做深入研究使用，众所周知，虽然这些库简单流行，但主要是因为背后基于微信的`web API`，有着众多缺陷，例如容易封号、登录成功率低、功能受限等等。

最近，由于正好重心在`typescript`上，给了我重新学习与认识微信第三方库的契机，于是，结合`react`我搭建了这样的一个项目。

## 项目说明
### 一句话说明
这是一个网站，提供**微信账号自动化管理**的功能。

### 正确的打开方式
使用该网站的方式很简单：
1. 打开网站: [小成时光屋](https://cxy.nanchuan.site)
2. 点击登录
3. 微信扫码
4. 确认登录

### 后台都做了哪些动作
当您按照如此流程操作之后，本网站后台会自动为您启动一个微信机器人，以`iPad`身份运行，与您的手机保持同步，因此您的实体`iPad`或者`Mac | Windows | Web`平台上的账号将下线。

如您在这些实体平台上登录，将使网站机器人下线，二者互斥关系，并且可重复循环，as you wish.

### 我能得到的服务
理论上，我们拥有您登录的微信账号在`iPad`的完整功能，例如：
- 发送消息，包括正常消息、群消息、定时消息、群发消息等
- 联系人管理，包括加好友、接受好友、加群、邀请入群等
- 其他

目前，我已开辟的服务是**撤回消息监控**，为满足某人的小愿望~

### 使用限制
由于`wechaty`是一款半开源半商业框架，每个机器人的启动都需要`token`，所谓`token`就是一个身份标识，每个`token`虽然可以给任意账号使用，但在任一时刻只能运行一个。

我作为开发者，向官方申请了一个`iPad`的`token`，仅可供一位人使用，其他人需要在该`token`闲置的情况下免费使用，或者向官方申请试用`token`。

为此，考虑到一些编程小白可能也有体验或使用的需求，我后续可能会开辟一些对接官方的商业购买方案，以优化您使用本服务的体验。


## 项目技术
### 两句话说明
1. Wechaty + Socket + React + AntD + TailwindCSS
2. Wechaty + Koa + React + AnD + TailwindCSS

### 技术选型说明
之所以本项目技术要使用两句话说明，是因为中途发生技术选型调整。

首先`Wechaty`作为微信管理工具是必选的。

其次`React`作为当下最流行、可能最快的前端框架，在有能力的情况下肯定是首选的，我自己有`Django | Vue | React`等前端框架的使用经验，最近主攻`React`，因此成了本项目的标配。

然而`Wechaty`要独立运行在`Node.js`环境内，需要一个中间的桥梁与`React`前端进行对接，在一开始的时候，我首选的是`Koa`，搭建了后台的内部`api`，并完成了第一版demo。

然而，基于`API`的方式始终有一些问题，因为微信是实时聊天工具，对消息流是强依赖的，而`API`只能提供某一个点的瞬时状态，所以前端如果想做到实时响应就要不断轮询，没错，问题与方案一并产生了，那就是使用`WebSocket`。

这里就不展开了，懂的人都懂，不懂的可以多多了解下，`WebSocket`是一项本质上不是很难，入手门槛较高，企业应用及其广泛的技术，但凡是需要实时通信的场景，例如聊天、直播等都或多或少需要它的支持，以获得更加高的性能、友好的开发体验与使用体验。

`WebSocket`是一项底层技术，而对这些技术的应用实现也有多个不同的框架，在这里，我使用的是`socket.io`，还是很顺手的。基于此，本项目目前实际所选用的框架组合为：
```text
wechaty + socket.io + create-react-app + AndD + tailwindCSS
```

其中，`AntD`用于界面的组件设计，`tailwindCSS`用于的界面的布局调整。

### 关于`tailwindCSS`的选用说明
大多数国人比较喜欢轮子，也更加偏向于拥抱传统技术，我作为半路闯入的程序猿，只好keep learning, keep accepting，于是乎就看到了`tailwindCSS`，感受到了它的光辉。

选用`tailwindCSS`是在我有使用过`bootstrap`与`Lass | Sass | Scss | Stylus`等`CSS`等体系之后的第一选择，因为它的轻量与高度定制化，它能让我写出更加美丽的代码，与`React`的`JSX`组合简直绝配。

### 项目攻关难点
很多，待更。

### 项目难点一：前后端之间的通信
在技术选项一节中已述，一开始采用的`Koa`搭建`API`，后续更换为使用`socket.io`。

### 项目难点二：单例机器人的设计
由于我（以及绝大多数使用`Wechaty`框架的个人开发者）只有一个免费的`token`，因此后台在同一时刻理论上只能有一个机器人在运行，但考虑到使用机器人的目标用户可能不只一位，因此设计了可抢占式单例机器人。

简单来说，当网站上已有微信账号在运行的时候，新的用户可以以某种方式申请登录，通过后它将抢占后台机器人的使用权限。与之相对应的就是非抢占式，这种模式下，除非已登录用户自行注销登录，否则别人无法使用后台的机器人。

目前采用的是可抢占式单例机器人的设计方式，抢占原则还未完全确定。

## 其他
### 关于git初始化仓库失败
我主要参考的是我之前的经验：https://nanchuan.site/coding/dev_manual/%E5%BC%80%E5%8F%91%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E8%A1%8C，与这篇帖子：https://www.jianshu.com/p/7d57ce4147d3。

还不错，一次性成功了。
