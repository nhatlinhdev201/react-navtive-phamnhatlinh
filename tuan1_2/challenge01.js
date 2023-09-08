/*  */
console.log('Challenge 01');
var mass_mark = 78;
var height_mark = 1.69;

var mass_john = 92;
var height_john = 1.95;

var bmi_mark = mass_mark/height_mark**2;
var bmi_john = mass_john/height_john**2;

var result = {
    'bmi_mark': bmi_mark,
    'bmi_john': bmi_john
};
console.log('BMI challenge 01',result);

/*  */
console.log('Challenge 02');
var challenge21 = () => {
    if(bmi_mark>bmi_john) 
    console.log("Mark's BMI is higher than John's!");
else 
    console.log("John's BMI is higher than Mark's!");
}
challenge21();

/*  */
var markHigherBMI = bmi_mark>bmi_john;
var challenge22 = () => {
    if(markHigherBMI) 
    console.log(`Mark's BMI ${Math.round((bmi_mark+Number.EPSILON)*10)/10} is higher than John's ${Math.round((bmi_john+Number.EPSILON)*10)/10}!`);
else 
    console.log(`John's BMI ${Math.round((bmi_john+Number.EPSILON)*10)/10} is higher than Mark's ${Math.round((bmi_mark+Number.EPSILON)*10)/10}!`);
}
challenge22();
/*  */

