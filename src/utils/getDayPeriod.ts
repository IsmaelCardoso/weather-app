const getDayPeriod = (hours: number) => {
  if(hours > 6 && hours < 17){
    return 'day'
  } else if(hours >= 17 && hours < 19){
    return 'afternoon'
  } else {
    return 'night'
  }
}

export default getDayPeriod