const { timeStamp } = require('../common/util')
const EngineerModel = require('../model/Engineer') //model/Meal에 있는 get함수를 사용하겠다

var Engineer = {}

Engineer._week = ['일', '월', '화', '수', '목', '금', '토']

/*Meal.init = async function (school) {
  this.school = school
  await MealModel.init()
  console.log(timeStamp() + 'Meal model defined'.cyan)
}*/
var time = new Date();
var month1 = time.getMonth() +1;
var weekDay1 = time.getDay();
Engineer.update = async function () {  //지금은 없어도될듯
  try {
    const engineerInfo = await this.school.getEngineer()

    // 월, 일, 요일
    const date = new Date()
    const month = date.getMonth() + 1
    let day = date.getDate() 
    let weekDay = date.getDay()
    let tomorrow = day + 1

    // 이번달의 마지막 날 (일)
    const lastDay = new Date(date.getYear(), month, 0).getDate()
    const data = []


    await EngineerModel.update(data) //없어도될듯
    console.log(timeStamp() + 'Meal data updated'.green)
  } catch (e) {
    console.log(timeStamp() + e.message.red)
  }
}

Engineer.get = async function (date) { //지금 controll에서 핵심부분
    const row = await EngineerModel.get(date == 'day') //type이 'today'라는 투플을검색해서 row에 삽입
    if (row && row.date && row.info) {
      return month1 + '월' + row.date + '일 공대식당' + '\n\n' + row.info 
      //today 투플의 date 필드와 info 필드를 출력
	  //row.date는 오늘의 날짜출력 row.info는 오늘의 급식정보 출력
    }
    return '급식 정보가 없습니다.'
}

module.exports = Engineer;