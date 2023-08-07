//  Дано число. Перевірте, чи негативне воно чи ні. Виведіть інформацію про число в консоль. 


function checkNumber(number) {

    if (number > 0) {
        console.log("The number is positive number!");
    } else {
        if (number < 0) {
            console.log("The number is negative number!");
        } else {
            switch (number) {
                case 0:
                    console.log("The number is zero!");
                    break;

                default:
                    console.log("The value you entered is not a number.");
            }
        }
    }
}

checkNumber(10);
checkNumber(-2);
checkNumber(0);
checkNumber(name);
checkNumber(1.25);
checkNumber(-0.2);