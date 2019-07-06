grid = [
  [5, 3, 4, 6, 7, 8, 9, 0, 0],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
] 
// 1 and 2

let nine_digits = [1,2,3,4,5,6,7,8,9];
let first_row = grid[0];


function check_row_with(number)
  {
    for (let i=0; first_row.length; i++)
    {
    if (first_row.includes(number)===false)
       {
         console.log(`Found free value: ${number}`);
         return true; 
       }
    else 
       {
       console.log(`Value: ${number} is already on this row`);
       return false;
       }
    }
  }


  function check_cols(number)
    {    
      
  // took first row length as the length of rows and cols are equal in sudoku
  
      
        let j = first_row.indexOf(0);
        let column = grid[j];
       
       
       if (column.includes(number)===false)
           {console.log(`Yes/ it is free`);
           return true;}
        else  
           {console.log(`Value: ${number} is already on ${column} column`);  
            return false;}
           
      
   }

     
  module.exports = function solveSudoku()
   {
       for (let i=0; i < first_row.length; i++)
      {
          if(first_row[i]=='0')
          {
               
         for (let j=0; j < nine_digits.length - 1; j++)
             
             {
               
             if(check_row_with(nine_digits[j])===true)
                
                {
               first_row[i]=nine_digits[j];
               console.log(`I get ${first_row[i]}`);
               console.log(first_row);
               i++;
                }
               
                }
            
             
            
          }
      
     
      }
       
   }
 

   /*

module.exports = function solveSudoku(matrix) {
 
}

*/