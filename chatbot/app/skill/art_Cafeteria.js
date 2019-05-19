const config = require('config')
//const controller = require('../controller/Engineer_Cafeteria')

const routerName = config.get('proxy') + '/art_Cafeteria'

module.exports = app => { //module.exports = app 은 app을 다른코드에서 사용할 수 있도록 해주는듯 
  app.post(routerName, async (req, res) => {

    res.json({
      version: "2.0",
      template: {
        outputs: [
        {
            simpleText: {
              text: "식단은 식자재 수급 상황과 식당내부운영에 따라 메뉴 변동가능성이 있으니, 이 점 양해부탁드려요"
            }
        },{
          simpleImage: {
            imageUrl: "http://59.23.191.35:10000/art.jpg",
            altText: "공대식당"
          }
        },{
            simpleText: {
              text: "영업시간 : 10시 ~ 6시30분 (월~목) \n                10시 ~ 3시 (금) \n브레이크타임 : 3시 ~ 4시\n영업종료 30분전 주문마감" 
            }
        }
        ],
        quickReplies: [

          {
            label: '중도',  //바로가기 버튼글자
            action: 'message',
            messageText: '중도'//카카오 (발화) 인듯 
          },{
            label: '공대',  //바로가기 버튼글자
            action: 'message',
            messageText: '공대'//카카오 (발화) 인듯 
          },{
            label: '기숙사',  //바로가기 버튼글자
            action: 'message',
            messageText: '다솜'//카카오 (발화) 인듯 
          },{
            label: '교직원',  //바로가기 버튼글자
            action: 'message',
            messageText: '교직원'//카카오 (발화) 인듯 
          },{
            label: '사대',  //바로가기 버튼글자
            action: 'message',
            messageText: '사대'//카카오 (발화) 인듯 
          },{
            label: '미대',  //바로가기 버튼글자
            action: 'message',
            messageText: '미대'//카카오 (발화) 인듯 
          },
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
