function dontGiveMeFive(start, end)
{
var marray = [];
var regex = /5/g;
for(i=start; i <= end; i++){
  
  var fin = i.toString();
  var repl = fin.replace(regex, '');

  if(repl){
    marray.push(repl);
     
  }
  
}
if (marray.length > 10){
  return marray.length-1;
}else{
  return marray.length;
}


}

dontGiveMeFive(-1,13);
