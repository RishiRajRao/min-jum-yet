function minJump(arr) {
  let i = 0,
    n = arr.length,
    jump = 0;
  if (n == 1) return 0;
  while (arr[i] < n - 1 - i) {
    if (arr[i] == 0) return -1;
    let tempI = arr[i],
      j = 1,
      next = -1,
      tempV = -1;
    while (j <= tempI) {
      if (arr[i + j] >= tempV) {
        tempV = arr[i + j];
        next = j;
      }
      j++;
    }
    (i = i + next), jump++;
  }
  // return ++jump;
  console.log("res==", ++jump);
}

minJump([9, 10, 1, 2, 3, 4, 8, 0, 0, 0, 0, 0, 0, 0, 1]);

// minJumps(arr,n){
//   var last = arr.length-1,i=0,jump = 0,reduce = 0;
// while(i<=last){
//   if(arr[i]===0 && i !== last){
//     return -1
//   }
//   if(arr[i]>=last-reduce){
//     return ++jump
//   }
//   else{
//     i+=arr[i]
//     reduce += arr[i]
//     jump++
//   }
// }
//   }
