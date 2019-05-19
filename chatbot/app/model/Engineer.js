const { Sequelize, sequelize } = require('../bootstrap/database')
const { timeStamp } = require('../common/util')
// Meal 모델 정의
var time = new Date();
var day = time.getDate();
const Engineer = sequelize.define('engineer', { //Meal이라는 TABLE 생성
  date: {					//date라는 애트리뷰트 생성
    type: Sequelize.STRING,
    allowNull: false
  },
  info: {					//info라는 애트리뷰트 생성
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {					//type라는 애트리뷰트 생성
    type: Sequelize.STRING,
    allowNull: false
  }
},  {
	timestamps: false, //creatAt오류를 없애줌
  freezeTableName: true //sequelize가 테이블이 복수형으로 저장되는데 그걸방지
})


exports.get = date => {	//이부분이 SELECT 하는 부분인듯
  return Engineer.findOne({	//findOne이 배열의 가장 첫번째에 위치한 데이터를 검색 (하나의 투플을 검색해주는듯)
    where: {			//controll 부분에서보면 'today'를 찾으라함
      date: day     //type이 today라는 투플을 찾아내라인듯?????
    }
  })
}