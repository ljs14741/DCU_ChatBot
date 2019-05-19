//skill폴더는 controller폴더에서 크롤링 한 것을 가져와서 카카오에 연동함 
//cafetria는 학식
const config = require('config')
const controller = require('../controller/Dormitory_Cafeteria') //Cafeteria 정보 담을 변수생성

const routerName = config.get('proxy') + '/dormitory_Cafeteria' //없으면 안됌

module.exports = app => {

  app.post(routerName, async (req, res) => {
    const Dormitory_CafeteriaData = await controller.get() // Cafeteria의 get함수 가져와서 melonData에 삽입


    res.json({
      version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "식단은 식자재 수급 상황과 식당내부운영에 따라 메뉴 변동가능성이 있으니, 이 점 양해부탁드려요"
          }
        },
        {
          
          simpleText: {
            text: Dormitory_CafeteriaData //크롤링 한거 출력
          }
        },
        {
          simpleImage: {
            imageUrl: "http://59.23.191.35:10000/time.jpg",
            altText: "기숙사식당 운영시간"
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
