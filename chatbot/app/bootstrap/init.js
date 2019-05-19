const config = require('config') //파일이나 모듈을 불러오는듯 
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')

const weather = require('../controller/Weather')

const weatherSkill = require('../skill/weather') //weather 코드를 사용할 수 있도록 변수생성
const melonSkill = require('../skill/melon')	 
const scheduleSkill = require('../skill/schedule')
const mealSkill = require('../skill/meal')
const busSkill = require('../skill/bus')

const art_CafeteriaSkill = require('../skill/art_Cafeteria');
const center_CafeteriaSkill = require('../skill/center_Cafeteria');
const dormitory_CafeteriaSkill = require('../skill/dormitory_Cafeteria');
const education_CafeteriaSkill = require('../skill/education_Cafeteria');
const engineer_CafeteriaSkill = require('../skill/engineer_Cafeteria');
const gyojigwon_CafeteriaSkill = require('../skill/gyojigwon_Cafeteria');

const deagadeaSkill = require('../skill/deagadea');
const deagadea_gunnuSkill = require('../skill/deagadea_gunnu');
const hayangSkill = require('../skill/hayang');
const hayang_gunnuSkill = require('../skill/hayang_gunnu');
const terminalSkill = require('../skill/terminal');
const terminal_gunnuSkill = require('../skill/terminal_gunnu');

const {timeStamp } = require('../common/util')




module.exports = async (app, express) =>{ //(app, express를 다른파일에서 쓸수있도록하는듯)
	const startTime = new Date()
	console.log( timeStamp() + 'Server initializing..')

	app.set('port', config.has('port') ? config.get('port') : 8080) //port 설정

	app.use('/', express.static('public'))

	app.use(cookieParser())
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(bodyParser.json())

	weatherSkill(app) //위에서 변수 만든것으로 app 실행
	melonSkill(app)
	scheduleSkill(app)
	mealSkill(app)
	busSkill(app)

	art_CafeteriaSkill(app)
	center_CafeteriaSkill(app)
	dormitory_CafeteriaSkill(app)
	education_CafeteriaSkill(app)
	engineer_CafeteriaSkill(app)
	gyojigwon_CafeteriaSkill(app)

	deagadeaSkill(app)
	deagadea_gunnuSkill(app)
	hayangSkill(app)
	hayang_gunnuSkill(app)
	terminalSkill(app)
	terminal_gunnuSkill(app)


	console.log(timeStamp() + 'Initialization complete! ' + (new Date() - startTime + 'ms').yellow)
}
