let str = "hi"

function uniqueStr(str){
  let count = {}
  for (let i = 0; i < str.length; i++){
    key = str[i];
    if (key !== " ") {
      count[key] = (count[key] || 0 ) + 1;
    }
  }
  for (key in count){
    if (count[key] > 1) {
      return 'not unique';
    }
  }
    return 'unique';
}
  


uniqueStr(str)