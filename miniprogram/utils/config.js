/**
 * 打赏二维码
 */
var moneyUrl ="https://6c75-lucky-mini-54cki-1301416904.tcb.qcloud.la/zan.jpg?sign=e08b2584a73abf713c6a9055ad1bc024&t=1583751456"

/**
 * 公众号二维码
 */
var wechatUrl ="https://6c75-lucky-mini-54cki-1301416904.tcb.qcloud.la/zan.jpg?sign=e08b2584a73abf713c6a9055ad1bc024&t=1583751456"

/**
 * 云开发环境
 */
var env ="lucky-mini-54cki"
//var env = "product-raeub"
//var env ="test-91f3af"
/**
 * 个人文章操作枚举
 */
var postRelatedType = {
    COLLECTION: 1,
    ZAN: 2,
    properties: {
        1: {
            desc: "收藏"
        },
        2: {
            desc: "点赞"
        }
    }
};

var subcributeTemplateId="BxVtrR681icGxgVJOfJ8xdze6TsZiXdSmmUUXnd_9Zg"

module.exports = {
    postRelatedType: postRelatedType,
    moneyUrl:moneyUrl,
    wechatUrl:wechatUrl,
    env:env,
    subcributeTemplateId:subcributeTemplateId
}