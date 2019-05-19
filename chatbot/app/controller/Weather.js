const request = require('request')
const cheerio = require('cheerio')


const {timeStamp} =require('../common/util')
const weatherModel =require('../model/Weather')


var Weather= {}

Weather._url = 'http://www.weather.go.kr/wid/queryDFSRSS.jsp?zone=4729025000'
Weather._pty = ['❌ 없음', '🌧️ 비', '🌨️ 비와 눈', '❄️ 눈']
Weather._clock = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛']



Weather.get = async function () {
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
/*var Weather= {}

Weather._url = 'http://www.weather.go.kr/wid/queryDFSRSS.jsp?zone=4729025000'
Monzi.get = async function () {
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
      console.log(timeStamp() + resultString)
      resolve(resultString)
      })


  })
  return(result);
}*/
module.exports = Weather
/*module.exports = Monzi*/
