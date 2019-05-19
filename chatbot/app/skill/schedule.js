const config = require('config')
const controller = require('../controller/Schedule')

const routerName = config.get('proxy') + '/schedule'

module.exports = app => {
  app.post(routerName, async (req, res) => {
    const scheduleData = await controller.get()


    res.json({
      version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "학사일정"
          }
        },
        {
          simpleText: {
            text: scheduleData
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
