const config = require('config')
const controller = require('../controller/Hayang')
const routerName = config.get('proxy') + '/hayang'

module.exports = app => { //module.exports = app 은 app을 다른코드에서 사용할 수 있도록 해주는듯 
  app.post(routerName, async (req, res) => {
    const busData = await controller.get()
     res.json({
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: "[실시간 버스 도착 정보]\n" + busData
            }
          }
        ],
        quickReplies: [

          {
            label: '대구가톨릭대학교건너',  //바로가기 버튼글자
            action: 'message',
            messageText: '대구가톨릭대학교건너'//카카오 블록인듯
          },
          {
            label: '하양시외버스터미널',  //바로가기 버튼글자
            action: 'message',
            messageText: '하양시외버스터미널'//카카오 블록인듯
          },
          {
            label: '하양역',  //바로가기 버튼글자
            action: 'message',
            messageText: '하양역앞'//카카오 블록인듯
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
