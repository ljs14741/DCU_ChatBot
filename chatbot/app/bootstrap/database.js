const config= require('config')				//config 디비 정보 가져오기
const Sequelize = require('sequelize')		//Sequelize 모듈 사용
//sequelize는 node.js에서 디비를 사용하기 위함인듯 (삽입,삭제 이런 모든것들을)
const sequelize = new Sequelize(	//sequelize로 디비 접속하기 위한 정보삽입
	config.get('database.db'),
	config.get('database.user'),
	config.get('database.password'),
	{
		define:{
			charset: 'utf8'
		},
		host: config.get('database.host'),
		port: config.get('database.port'),
		dialect:'mysql',
		operatorsAliases: false,
		logging:false
	}

)

/*exports.init=()=>{					//디비 인증 시도라는데 없어도 될거같음
	return sequelize.authenticate()
}*/

exports.Sequelize = Sequelize
exports.sequelize = sequelize
