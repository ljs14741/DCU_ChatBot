const cheerio = require('cheerio');
const request = require('request');

const {timeStamp} =require('../common/util')

var Melon= {}
Melon._url = 'https://www.melon.com/chart/';

Melon.get = async function () {
  let resultString = ''
  const result = await new Promise((resolve, reject) => {
    request(this._url, (err, res, body) => {
      if (err) {
        reject(err)
      }
      const $ = cheerio.load(body);
      const melon = []
      
            //#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a
            //#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a
      for (var i = 2; i < 3; i++) {
        let obj = {}
        //#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a
        let data = $(`#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a`)
        // data:nth-child(${i})
                obj.title = data.text()

        resultString += ` [타이틀 :${obj.title} ]\n` 


      } 

     /* console.log(timeStamp() + resultString)*/
      resolve(resultString)

    })
  })
  return(result);
}

module.exports = Melon
