module.exports = function getZerosCount(n, k) {
  let obj = {}, result=n, cloneK=k;
  for(let i=2; i<=cloneK; i++){
    while(cloneK%i==0){
      obj[i] ? obj[i]++ : obj[i]=1;
      cloneK/=i;
    }
  }
  for(let key in obj){
    let cloneN = n, res=0;
    while(cloneN){
      res += Math.floor(cloneN/+key);
      cloneN = Math.floor(cloneN/+key) 
    }
    result=Math.min(result, Math.floor(res/obj[key]))
  }
  return result;
}
