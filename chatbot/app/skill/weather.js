const config = require('config')
const controller = require('../controller/Weather')
const controller2 = require('../controller/Munzi')

const routerName = config.get('proxy') + '/weather'

module.exports = app => {
  app.post(routerName, async (req, res) => {
    const weatherData = await controller.get()
    const munziData = await controller2.get()
    
    res.json({
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: '🌈 기상청 날씨 & 미세먼지 정보!'
            }
          },
          {
            simpleText: {
              text: weatherData
            }
          },
          {
            simpleText: {
              text: munziData
            }
          }
        ],
        quickReplies: [
          {
            label: '메뉴',
            action: 'message',
            messageText: '메뉴'
          }
        ]
      }
    })
  })
}
