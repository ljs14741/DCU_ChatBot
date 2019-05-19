/*
const schedule= require('node-schedule')

const Weather = require ('../controller/Weather')

const {timeStamp} = require('../common/util')


exports.init =()=>{

	schedule.scheduleJob('0 0 * * * * *',async()=>{
		await Weather.update()
	})

	console.log(timeStamp()+'Scheduler initialized'.cyan)
}
*/