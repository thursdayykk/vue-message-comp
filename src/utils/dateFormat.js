// yyyy-mm-dd hh:mm:ss
export function simpleDate(time){
  // 昨天 hh:mm 48小时内
  // 周x hh:mm 这周内
  // 2020/2/6 hh:mm
  let nowDate = new Date()
  let curDate = new Date(time)
  let nowTime = nowDate.getTime()
  let curTime = curDate.getTime()
  let curWeek = curDate.getDay()
  let weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
  let dateArr = [...time.split(" ")[0].split("-"),...time.split(" ")[1].split(":")]
  let frontDate = dateArr.splice(0,3)
  let resStr = ''
  if(nowTime - curTime < 2 * 24 * 60 * 60 * 1000 && nowDate.getDate() - curDate.getDate() <= 1){
    if(nowDate.getDate() === curDate.getDate()){
    }else{
      resStr += '昨天 '
    }
  }else if(nowTime - curTime > 2 * 24 * 60 * 60 * 1000 && nowDate.getDay() - curWeek > 0 && nowTime - curTime < 7 * 24 * 60 * 60 * 1000){
    resStr += `${weeks[curWeek]} `
  }else{
    resStr += `${frontDate[0]}年${Number(frontDate[1])}月${Number(frontDate[2])}日 `
  }
  resStr += `${dateArr[0]}:${dateArr[1]}`
  return resStr
}

export function dateFormatter(time){
    var y = time.getFullYear(); 
    var M = time.getMonth() + 1; 
    var d = time.getDate(); 
    var h = time.getHours(); 
    var m = time.getMinutes(); 
    var s = time.getSeconds(); 
    return `${y}-${M < 10 ? '0'+M:M}-${d< 10 ? '0'+d:d} ${h< 10 ? '0'+h:h}:${m< 10 ? '0'+m:m}:${s< 10 ? '0'+s:s}`;
}