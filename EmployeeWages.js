//USE CASE 1
// Ability to Check Employee is 
// present or Absent- Use Math.Random to check Absent or 
// Present
//Use const which signal that the identifier 
// won't be reassigned. And use let where the 
// variable may be reassigned. Both have Block 
// Scope. Traditional var has function scope

const ispresent=1;
let attendence=Math.floor(Math.random*2);
if(ispresent===attendence){
    console.log("employee is present");
}
else {
    console.log("employee is absent");
}


//                 USE CASE 2
//ability to calculate daily employee wage based on part time/full time
//Use Math.Random to check No Time, 
// Part Time or Full Time- Assume Part Time is 4 Hrs and Full time 
// is 8 Hrs and per hour wage is $20- Solve Using  Switch Statement
const parttime=4;
 const fulltime=8;
 const wage=20;
 let workType = Math.floor(Math.random() * 3);
 let dailywage=0;
switch(workType){
    case 0:
        dailywage=0;
        console.log("no work done or employee was absent"+dailywage);
    break;
    case 1:
    dailywage=parttime*wage;
    console.log(dailywage);
    break;
    case 2:
        dailywage=fulltime*wage;
        console.log(dailywage);
        break;
        default:
            console.log("not a vallid work");


        }
                   //USE CASE 3
 //refactor the code to write a function to get work hours
 console.log("UseCase3");
 function togetwoekhours(){
 let employeeCheck2 = Math.floor(Math.random() * 3);
     switch(employeeCheck2){
         case 0:
             return noWork;
         case 1:
             return partTime_hours;
         case 2:
             return fullTime_hours;
         default:
             return 0;
     }
 }
 
 let totalworkhours = togetwoekhours();
 console.log(`Employee Daily hours: ${totalworkhours}`);
 
 function tocacalculateDailyWages(totalworkhours){
     return totalworkhours * perHourWork_wages;
 }
 
 let DailyWages = tocacalculateDailyWages(totalworkhours);
 console.log(`Employee Daily Wages: ${DailyWages}`);

                //USE CASE 4     
  //Calculating Wages for a Month assuming 20 days in a month
  const parttime = 4;
  const fulltime = 8;
  const wagePerHour = 20;
  let workType = Math.floor(Math.random() * 3);
  let dailyWage = 0;
  
  switch (workType) {
      case 0:
          console.log("No work done or employee was absent. Daily wage: $0");
          break;
      case 1:
          dailyWage = parttime * wagePerHour;
          console.log(`Part-time work done. Daily wage: $${dailyWage}`);
          break;
      case 2:
          dailyWage = fulltime * wagePerHour;
          console.log(`Full-time work done. Daily wage: $${dailyWage}`);
          break;
      default:
          console.log("Invalid work type");
  }
  
  // Calculate monthly wage (assuming 20 workdays in a month)
  let monthlyWage = dailyWage * 20;
  console.log(`Monthly wage: $${monthlyWage}`);
//USE CASE 5
  