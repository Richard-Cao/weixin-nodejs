var router = require('express').Router();
// 引用 wechat 库，详细请查看 https://github.com/node-webot/wechat
var wechat = require('wechat');
var config = {
  token: 'rweixin921104',
  appid: 'wxc351179593135936',
  encodingAESKey: 'morG3jDcUHQDuDePv8oC0Z5Zh8U4jBGMG71w5OOi6x7'
};

var WechatAPI = require('wechat-api');
var api = new WechatAPI('wxc351179593135936',
  '6c1980fb164b1048d2083d1d855cb3d5');

router.use('/', wechat(config).text(function(message, req, res, next) {
  // message为文本内容
  // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  // CreateTime: '1359125035',
  // MsgType: 'text',
  // Content: 'http',
  // MsgId: '5837397576500011341' }

  // var keyArray = ['你好', '约吗'];
  // var content = message.Content;
  // var keyIndex = keyArray.indexOf(content);
  // switch (keyIndex) {
  //   case 0:
  //     {
  //       res.reply({
  //         type: "text",
  //         content: '您好，大家好才是真的好！'
  //       });

  //     }
  //     break;
  //   case 1:
  //     {
  //       res.reply({
  //         type: "text",
  //         content: '不约，不约，叔叔我们不约！'
  //       });

  //     }
  //     break;
  //   default:
  //     res.reply({
  //       type: "text",
  //       content: '服务器挂掉了，你的要求暂时无法满足……'
  //     });
  //     break;
  // }
  requestMessage(message, res);
}).image(function(message, req, res, next) {
  // message为图片内容
  // { ToUserName: 'gh_d3e07d51b513',
  // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  // CreateTime: '1359124971',
  // MsgType: 'image',
  // PicUrl: 'http://mmsns.qpic.cn/mmsns/bfc815ygvIWcaaZlEXJV7NzhmA3Y2fc4eBOxLjpPI60Q1Q6ibYicwg/0',
  // MediaId: 'media_id',
  // MsgId: '5837397301622104395' }}).voice(function(message, req, res, next) {
  // TODO
}).voice(function(message, req, res, next) {
  // message为音频内容
  // { ToUserName: 'gh_d3e07d51b513',
  // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  // CreateTime: '1359125022',
  // MsgType: 'voice',
  // MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
  // Format: 'amr',
  // MsgId: '5837397520665436492' }
}).video(function(message, req, res, next) {
  // message为视频内容
  // { ToUserName: 'gh_d3e07d51b513',
  // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  // CreateTime: '1359125022',
  // MsgType: 'video',
  // MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
  // ThumbMediaId: 'media_id',
  // MsgId: '5837397520665436492' }
  // TODO
}).shortvideo(function(message, req, res, next) {
  // message为短视频内容
  // { ToUserName: 'gh_d3e07d51b513',
  // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  // CreateTime: '1359125022',
  // MsgType: 'shortvideo',
  // MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
  // ThumbMediaId: 'media_id',
  // MsgId: '5837397520665436492' }
  // TODO
}).location(function(message, req, res, next) {
  // message为链接内容
  // { ToUserName: 'gh_d3e07d51b513',
  // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  // CreateTime: '1359125022',
  // MsgType: 'link',
  // Title: '公众平台官网链接',
  // Description: '公众平台官网链接',
  // Url: 'http://1024.com/',
  // MsgId: '5837397520665436492' }
  // TODO
}).link(function(message, req, res, next) {
  // message为链接内容
  // { ToUserName: 'gh_d3e07d51b513',
  // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  // CreateTime: '1359125022',
  // MsgType: 'link',
  // Title: '公众平台官网链接',
  // Description: '公众平台官网链接',
  // Url: 'http://1024.com/',
  // MsgId: '5837397520665436492' }
  // TODO
}).event(function(message, req, res, next) {
  // message为事件内容
  // { ToUserName: 'gh_d3e07d51b513',
  // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  // CreateTime: '1359125022',
  // MsgType: 'event',
  // Event: 'LOCATION',
  // Latitude: '23.137466',
  // Longitude: '113.352425',
  // Precision: '119.385040',
  // MsgId: '5837397520665436492' }
  // TODO
}).device_text(function(message, req, res, next) {
  // message为设备文本消息内容
  // { ToUserName: 'gh_d3e07d51b513',
  // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  // CreateTime: '1359125022',
  // MsgType: 'device_text',
  // DeviceType: 'gh_d3e07d51b513'
  // DeviceID: 'dev1234abcd',
  // Content: 'd2hvc3lvdXJkYWRkeQ==',
  // SessionID: '9394',
  // MsgId: '5837397520665436492',
  // OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
  // TODO
}).device_event(function(message, req, res, next) {
  // message为设备事件内容
  // { ToUserName: 'gh_d3e07d51b513',
  // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
  // CreateTime: '1359125022',
  // MsgType: 'device_event',
  // Event: 'bind'
  // DeviceType: 'gh_d3e07d51b513'
  // DeviceID: 'dev1234abcd',
  // OpType : 0, //Event为subscribe_status/unsubscribe_status时存在
  // Content: 'd2hvc3lvdXJkYWRkeQ==', //Event不为subscribe_status/unsubscribe_status时存在
  // SessionID: '9394',
  // MsgId: '5837397520665436492',
  // OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
  // TODO
}).middlewarify());

// 请求接口
var requestMessage = function(msg, res) {
	request.get("http://gank.io/api/random/data/" + msg.xml.Content + "/20", function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var info = JSON.parse(body);
			if (info.results.length != 0) {
				var num = parseInt(Math.random() * info.results.length);
				// var result = {
				// 	xml: {
				// 		ToUserName: msg.xml.FromUserName[0],
				// 		FromUserName: '' + msg.xml.ToUserName + '',
				// 		CreateTime: new Date().getTime(),
				// 		MsgType: 'news',
				// 		ArticleCount: 1,
				// 		Articles: {
				// 			item: {
				// 				Title: info.results[num].desc,
				// 				Description: "作者：" + info.results[num].who,
				// 				Url: info.results[num].url
				// 			}
				// 		}
				// 	}
				// };
        // cb(null, result);
        res.reply([
          {
            title: info.results[num].desc,
            description: "作者：" + info.results[num].who,
            url: info.results[num].url
          }
        ]);
			} else {
				requestRobot(msg, res);
			}
		}
	});
};

var requestRobot = function(msg, res) {
	request.post("http://www.tuling123.com/openapi/api?key=374079dc2dffad6716b309fd2dd0e6ed&info=" + msg.Content + "&userid=" + msg.FromUserName, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var info = JSON.parse(body);
			switch (info.code) {
				case 100000:
					// var result = {
					// 	xml: {
					// 		ToUserName: msg.xml.FromUserName[0],
					// 		FromUserName: '' + msg.xml.ToUserName + '',
					// 		CreateTime: new Date().getTime(),
					// 		MsgType: 'text',
					// 		Content: info.text
					// 	}
					// };
          // cb(null, result);
          res.reply({
            type: "text",
            content: info.text
          });
					break;
				case 200000:
					// var result = {
					// 	xml: {
					// 		ToUserName: msg.xml.FromUserName[0],
					// 		FromUserName: '' + msg.xml.ToUserName + '',
					// 		CreateTime: new Date().getTime(),
					// 		MsgType: 'news',
					// 		ArticleCount: 1,
					// 		Articles: {
					// 			item: {
					// 				Title: info.text,
					// 				Description: "具体内容点击链接查看",
					// 				Url: info.url
					// 			}
					// 		}
					// 	}
					// };
          // cb(null, result);
          res.reply([
            {
              title: info.text,
              description: '具体内容点击链接查看',
              url: info.url
            }
          ]);
					break;
				case 302000:
					var num = parseInt(Math.random() * info.list.length);
					// var result = {
					// 	xml: {
					// 		ToUserName: msg.xml.FromUserName[0],
					// 		FromUserName: '' + msg.xml.ToUserName + '',
					// 		CreateTime: new Date().getTime(),
					// 		MsgType: 'news',
					// 		ArticleCount: 1,
					// 		Articles: {
					// 			item: {
					// 				Title: info.list[num].source,
					// 				Description: info.list[num].article,
					// 				PicUrl: info.list[num].icon,
					// 				Url: info.list[num].detailurl
					// 			}
					// 		}
					// 	}
					// };
          // cb(null, result);
          res.reply([
            {
              title: info.list[num].source,
              description: info.list[num].article,
              picurl: info.list[num].icon,
              url: info.list[num].detailurl
            }
          ]);
					break;
				case 308000:
					// var result = {
					// 	xml: {
					// 		ToUserName: msg.xml.FromUserName[0],
					// 		FromUserName: '' + msg.xml.ToUserName + '',
					// 		CreateTime: new Date().getTime(),
					// 		MsgType: 'news',
					// 		ArticleCount: 1,
					// 		Articles: {
					// 			item: {
					// 				Title: info.list[0].name,
					// 				Description: info.list[0].info,
					// 				PicUrl: info.list[0].icon,
					// 				Url: info.list[0].detailurl
					// 			}
					// 		}
					// 	}
					// };
          // cb(null, result);
          res.reply([
            {
              title: info.list[0].name,
              description: info.list[0].info,
              picurl: info.list[0].icon,
              url: info.list[0].detailurl
            }
          ]);
					break;
				default:
					// var result = {
					// 	xml: {
					// 		ToUserName: msg.xml.FromUserName[0],
					// 		FromUserName: '' + msg.xml.ToUserName + '',
					// 		CreateTime: new Date().getTime(),
					// 		MsgType: 'text',
					// 		Content: '也许后台功能太弱无法自动满足该需求。。。'
					// 	}
					// };
          // cb(null, result);
          res.reply({
            type: "text",
            content: '也许后台功能太弱无法自动满足该需求。。。'
          });
					break;
			}
		}
	});
};

var getNum = function(list) {
  var num;
  if (list.length < 10) {
    num = list.length;
  } else {
    num = 10;
  }
  return num;
};

var getArticles = function(list) {
  var num = getNum(list);
  var resList = new Array();
  for (var i = 0; i < num; i++) {
    var result = {
      item: {
        Title: list[i].source,
        Description: list[i].article,
        Url: list[i].detailurl
      }
    };
    resList.push(result);
  }
  return items;
};

module.exports = router;
