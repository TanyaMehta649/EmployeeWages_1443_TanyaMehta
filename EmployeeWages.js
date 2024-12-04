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