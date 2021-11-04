function remainder(a, b){
  let larger = 0
  let smaller = 0
  if (a > b) {
    larger = a
    smaller = b
  }
   else {
     larger = b
     smaller = a
     
   }
  return larger%smaller
 }


 /////or/////


 function remainder(a, b){
  return a > b ? a % b : b % a;
}