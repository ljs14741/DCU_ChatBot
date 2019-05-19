const config = require('config')
const controller = require('../controller/Melon')

const routerName = config.get('proxy') + '/melon'

module.exports = app => { //module.exports = app 은 app을 다른코드에서 사용할 수 있도록 해주는듯 
  app.post(routerName, async (req, res) => {
    const melonData = await controller.get()


    res.json({
      version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl: "http://59.23.191.35:9999/C4.JPG",
            altText: "hello I'm Ryan"
          }
        }
      ]
     /* outputs: [
        {
          simpleText: {
            text: "멜론 차트 1~10위"
          }
        },
        {
          simpleText: {
            text: melonData
          }
        }
      ],
        quickReplies: [
          {
            label: '메뉴',
            action: 'message',
            messageText: '메뉴'
          }
        ]*/
    }
    })
  })
}
