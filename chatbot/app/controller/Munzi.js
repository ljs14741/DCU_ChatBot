const request = require('request')
const cheerio = require('cheerio')


const {timeStamp} =require('../common/util')
const weatherModel =require('../model/Munzi')


var Munzi= {}

Munzi._url = 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B2%BD%EC%82%B0+%EB%AF%B8%EC%85%88%E3%84%B4%EC%A7%80&oquery=%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C+%EC%84%9C%ED%98%B8%EB%8F%99&tqi=UL%2BrOwpVuFZssb%2F5n7wssssssUR-364857'

Munzi.get = async function () {
  let resultString = ''
  const result = await new Promise((resolve, reject) => {
    request(this._url, (err, res, body) => {
      if (err) {
        reject(err)
      }
      const $ = cheerio.load(body)
      const pub = $('pubDate').text().replace(/^[0-9]{4}[년] /, '')
      const weather = []


      for (let i = 2; i <= 4; i++) {
        let obj = {}

        let data = $(`data:nth-child(${i})`)
        obj.index = i - 2
        obj.hour = data.find('hour').text() // 시간
        obj.temp = data.find('temp').text() // 기온
        obj.pty = data.find('pty').text() // 강수형태(0: 없음, 1: 비, 2: 비/눈, 3: 눈)
        obj.pop = data.find('pop').text() // 강수확률
        obj.wfKor = data.find('wfKor').text() // 하늘 상태(맑음..등)
        obj.reh = data.find('reh').text() // 습도

        resultString += ` [${obj.hour}시 ]\n` +
                        `🌡️ 기온: ${obj.temp}℃\n` +
                        `🌦️ 강수형태: ${obj.pty}\n` +
                        `❔ 강수확률: ${obj.pop}%, ${obj.wfKor}\n` +
                        `💧 습도: ${obj.reh}%\n\n`
      }
      /* console.log(timeStamp() + resultString)*/
      resolve(resultString)
      })


  })
  return(result);
}

module.exports = Munzi
