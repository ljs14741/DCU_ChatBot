//controller폴더는 크롤링하는 코드입니다
//Cafeteria는 학식
const cheerio = require('cheerio');
const request = require('request');


const {timeStamp} =require('../common/util')

var today;
var tomorrow;
var test = 12;

var Dormitory_Cafeteria= {} //Cafeteria 객체 생성
Dormitory_Cafeteria._url = 'http://dormitory.cu.ac.kr/index.php?mid=board_WrWZ02&page=8'; //홈페이지 연결

Dormitory_Cafeteria.get = async function () { //크롤링하는 get함수 생성
  let resultString = ' '
  const result = await new Promise((resolve, reject) => {
    //promise는 resolve로 리턴을 받는듯
    request(this._url, (err, res, body) => {
      if (err) { //에러인경우
        reject(err)

      } 
      const date = new Date()
      const $ = cheerio.load(body);
      var day = date.getDate(); //날짜 데이터 얻기 ok 
      const sec = date.getSeconds(); 
     /*for (var i = 0; i < 1; i++) {
        let obj = {}
        
        let data1 = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr > td`) //웹페이지에서 데이터를 긁어옴 (크롤링 = 파싱 거의같은뜻으로 봐도 무방한듯)
        obj.title1 = data1.text() //긁어온 데이터를 text형식으로 저장
        obj.title1 =(((data1.text().replace(/<조식>/gi, "\n<조식>")).replace(/<한식>/gi, "\n\n<한식>")).replace(/<정식>/gi, "\n<정식>")).replace(/2019/gi, "\n\n★2019")
        resultString += ` ${obj.title1} \n\n ` 
        //카카오에 연동할 text 데이터를 resultString에 삽입
      } */
      switch (day) {
        case 12 : 
          today = $('')
          tomorrow = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(2)`)
          break;
        case 13 : 
          today = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(2)`)
          tomorrow = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(3)`)
          break;
        case 14 : 
          today = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(3)`)
          tomorrow = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(4)`)
          break;
        case 15 : 
          today = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(4)`)
          tomorrow = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(5)`)
          break;
        case 16 : 
          today = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(5)`)
          tomorrow = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(6)`)
          break;
        case 17 : 
          today = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(6)`)
          tomorrow = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(7)`)
          break;
       case 19 : 
          today = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(7)`)
          tomorrow = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(8)`)
          break;
      }
     
     
         for (var i = 0; i < 1; i++) {
        let obj = {}
         /*data = $(`#bd_268_0 > div.bd_lst_wrp > table > tbody > tr:nth-child(2)`) 웹페이지에서 데이터를 긁어옴 (크롤링 = 파싱 거의같은뜻으로 봐도 무방한듯)*/
        obj.today = today.text() //긁어온 데이터를 text형식으로 저장
        obj.today =((((((today.text().replace(/\t/g,'')).replace(/<한식>/gi, "\n\n<한식>")).replace(/<정식>/gi, "\n<정식>")).replace(/2019/gi, "\n\n★2019")).replace(/<일품식>/gi, "\n<일품식>")).replace(/<간편식>/gi, "\n<간편식>")).replace(/치즈순두부찌개/gi,"\n\n[점심 & 저녁]\n치즈순두부찌개")
        obj.tomorrow = tomorrow.text() //긁어온 데이터를 text형식으로 저장
        obj.tomorrow =(((((tomorrow.text().replace(/\t/g,'')).replace(/<한식>/gi, "\n\n<한식>")).replace(/<정식>/gi, "\n<정식>")).replace(/2019/gi, "\n\n★2019")).replace(/<일품식>/gi, "\n<일품식>")).replace(/<간편식>/gi, "\n<간편식>")
        obj.menu = obj.today + "\n" + obj.tomorrow;

        resultString += ` ${obj.menu} ` 
        //카카오에 연동할 text 데이터를 resultString에 삽입
      } 
      




      /*console.log(timeStamp() + resultString) */
      resolve(resultString) //resultString을 promise의 반환값으로 설정

    })
  })
  return(result); //Cafeteria.get 함수의 반환값(resultString)을 result에 삽입
}

module.exports = Dormitory_Cafeteria  //Cafeteria 객체를 다른 파일에서도 사용할수 있게함?
