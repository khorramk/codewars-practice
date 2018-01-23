function dontGiveMeFive(start, end)
{
  //write a array to put all the values your gonna filter
var marray = [];
//use a for loop to count the numbers and seearch
for(i=start; i <= end; i++){
  //use a variable to convert the values to string
  var fin = i.toString();
 //use a string method to search for the correct values
  var ser = fin.endsWith('5');
  
//check whether it is not five or ser
  if(!ser){
    //if correct put the values in array
    marray.push(fin);
  }  
 
  
}
//call the array with length
return marray.length;
}

dontGiveMeFive(4,17);
