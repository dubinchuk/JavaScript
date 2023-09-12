let age_2 = 18;
let age_3 = 60;

function checkAge(age_1) {
    if (+age_1) {
        if (age_1 < age_2) {
            alert('You don’t have access cause your age is ' + age_1 + ' It’s less than ' + age_2);
        }
        else if (age_1 >= age_2 && age_1 < age_3) {
            alert('Welcome!');
        } 
        else if (age_1 > age_3) {
            alert('Keep calm and look Culture channel');
        } else {
        alert('Technical work');
        }
    } else {
        alert('Error: not a number');
    }
}

let promptAge = prompt('What is your age?');
checkAge(promptAge);