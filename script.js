

 
 let numberArray = [1,2,4,9,0,8,24,19]


//Use the filter method to iterate over each element and pass to the function
   let arrays = numberArray.filter(function(arr){
        //filter through to check through the array to see the number divisible by 2 without remainder and return
          return  arr % 2 == 0;
     
    });
  console.log(arrays);
    


