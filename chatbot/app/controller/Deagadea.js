const cheerio = require('cheerio');
const request = require('request');
const {timeStamp} =require('../common/util') // 없으면안되네
const iconv = require('iconv-lite');
var urloption  = { 
                uri: "http://m.businfo.go.kr/bp/m/realTime.do?act=arrInfo&bsId=7121001700&bsNm=%B4%EB%B1%B8%B0%A1%C5%E7%B8%AF%B4%EB%C7%D0%B1%B3"
               ,encoding: null
            };
var Deagadea= {}
Deagadea.get = async function () {
  let resultString = ''
  const result = await new Promise((resolve, reject) => {
    request(urloption, (err, res, body) => { 
      if (err) { //error가 났을 경우
        reject(err)
      }
      body = new Buffer(body);
      body = iconv.decode(body, 'EUC-KR').toString();
       var $ = cheerio.load(body);
     
     
for (var i = 0; i < 1; i++) {
    
      let obj = {}
        let data = $(`#ct > div.dp > ul > li > span`)
                obj.bus = data.text()
                obj.bus = (((((((((obj.bus.replace(/출발/gi, " 출발")).replace(/분/gi, "분 ")).replace(/급행5/gi, "\n👉 급행5 ")).replace(/518-1/gi, "\n👉 518-1 ")).replace(/708/gi, "\n👉 708 ")).replace(/808/gi, "\n👉 808 ")).replace(/814/gi, "\n👉 814 ")).replace(/840/gi, "\n👉 840 ")).replace(/818/gi, "\n👉 818 ")).replace(/809/gi, "\n👉 809 ")
         resultString += ` ${obj.bus}` 
    
}
      
//console.log(body)
       //console.log(timeStamp() + resultString)
      resolve(resultString)
    })
  })
  return(result);
}
module.exports = Deagadea
