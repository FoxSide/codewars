var number = function(busStops){
  let get = 0
  let getOff = 0
  for (let i = 0; i < busStops.length; i++){
    for (let j = 1; j < busStops[i].length; j++) {
      get += busStops[i][0]
      getOff += busStops[i][j]
    }
  }
  return get - getOff
}