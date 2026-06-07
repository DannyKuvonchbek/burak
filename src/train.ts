 
// O-TASK
function calculateSumOfNumbers(arr: any[]): number {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      total += arr[i];
    }
  }

  return total;
}

console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

// P-TASK
function objectToArray(obj: any): any[] {
  let result: any[] = [];

  for (let key in obj) {
    result.push([key, obj[key]]);
  }

  return result;
}

console.log(objectToArray({ a: 10, b: 20 }));


/* Project Standards:
  - Logging standards
  - Naming standards:
      function , method, variable => CAMEL   goHome
      class =>  PASCAL                       MemberService
      folder => KEBAB
      css => SNAKE                           button_style
  - Error handling
*/

/* Traditional Api 
   Rest Api
   GraphQl Api
   .....
*/ 


/* Traditional FD  =>  BSSR  =>  EJS 
   Modern FD       =>   SPA  =>  REACT
*/ 

/*
  request join
  self destroy
 */