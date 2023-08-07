// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

function checkNumber(number) {

    if (number > 0) {
        consale.log("The number is positive number!");
    } else {
        if (number < 0) {
            consale.log("The number is negative number!");
        } else {
            consale.log("The number is zero!");
        }
    }

    return result;

}

checkNumber(10);
checkNumber(-2);
checkNumber(0);