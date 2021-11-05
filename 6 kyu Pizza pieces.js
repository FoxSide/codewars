function maxPizza(cut) {
  return cut < 0 ? -1 : cut == 0 ? 1 : (cut*(cut+1)/2)+1
}