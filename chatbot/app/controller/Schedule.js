const cheerio = require('cheerio');
const request = require('request');

const {timeStamp} =require('../common/util') // 없으면안되네

var Schedule= {}
Schedule._url = 'http://www.cu.ac.kr/index.php';
Schedule.get = async function () {
  let resultString = ''
  const result = await new Promise((resolve, reject) => {
    request(this._url, (err, res, body) => {
      if (err) { //error가 났을 경우
        reject(err)
      }
      const $ = cheerio.load(body);
      const melon = []
      
      for (var i = 0; i < 1; i++) {
        let obj = {}
        // 
       
        let data = $(`.event_list:nth-child(1)`)
       
       
      
        obj.schedule ="★" + ((((data.text().replace(/(\s*)/g,"")).replace(/교무인사팀/gi,"\n\n★")).replace(/2019/gi,'\n2019')).replace(/수업일수/gi,'수업일수  ')).slice(0,-1);
       

        resultString = ` ${obj.schedule}  `

                        


      } 

     /* console.log(timeStamp() + resultString)*/
      resolve(resultString)

    })
  })
  return(result);
}

module.exports = Schedule
