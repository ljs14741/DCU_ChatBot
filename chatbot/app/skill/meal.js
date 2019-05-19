const config = require('config')
const controller = require('../controller/Meal')

const routerName = config.get('proxy') + '/meal'

module.exports = app => {
  app.post(routerName, async (req, res) => {
    const params = req.body.action['params'] || {}
    const type = JSON.parse(params['sys_date'] || '{}')
    const mealData = await controller.get(type['dateTag'])

    let typeString = '🍚 오늘의 급식을 알려드릴게요!'
    if (type['dateTag'] === 'tomorrow') {
      typeString = '🍚 내일의 급식을 알려드릴게요!'
    } else if (type['dateTag'] === 'yesterday') {
      typeString = '지난 급식 정보는 제공하지 않아요..😭\n대신 오늘의 급식을 알려드릴게요!'
    }

    res.json({
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: typeString
            }
          },
          {
            simpleText: {
              text: mealData
            }
          }
        ],
        quickReplies: [

          {
            label: '뒤로',  //바로가기 버튼글자
            action: 'message',
            messageText: '식당'//카카오 블록인듯
          },
          {
            label: '메뉴',  //바로가기 버튼글자
            action: 'message',
            messageText: '메뉴'//카카오 블록인듯
          }
        ]
      }
    })
  })
}