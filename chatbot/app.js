//node app.js 를 실행하며 프로그램이 돌아가게 해주는 코드
const express = require('express')
const app = express()

const colors = require('colors')

const { timeStamp } = require('./app/common/util.js')

require('./app/bootstrap/init')(app, express).then(() => { 
//init(전체코드돌아가게하는?) 파일을 실행하는듯
//(app, express)를 init에서 가져옴
  app.listen(app.get('port'), () => {
    console.log(timeStamp() + colors.rainbow('DCU ChatBot server started, port: ' + app.get('port')))
  })
}).catch(e => {
  console.log(timeStamp() + 'Server initialization error: ' + e.message.red)
})

process.on('uncaughtException', e => {
  console.log(timeStamp() + ('UncaughtException: ' + e.message).red)
})
