'use strict';

function _one() {
    const your_name = "Otavio Anacleto Pereira Barbosa";
    const number_of_courses = "6";
    const program = "T177";
    let job = " ";
    let part_time_job = false;
    if (part_time_job === false){
        job = "I do not have a part-time job."
    }
    else {
        job = "I have a part-time job"
    }
   console.log(`My name is ${your_name}. I'm in the ${program} program. I'm currently taking ${number_of_courses} courses. ${job}`);
}

function _two(cents) {
    let numQuarters = 0;
    let numDimes = 0;
    let numNickels = 0;
    let numPennies = 0;
    let leftQuant1 = 0;
    let leftQuant2 = 0;
    let leftQuant3 = 0;
    
    numQuarters = Math.floor(cents / 25);
    leftQuant1 = ((cents - (numQuarters * 25)));
    
    if (leftQuant1 != 0){
        numDimes = Math.floor(leftQuant1 / 10);
    }
    
    leftQuant2 = (leftQuant1 - (numDimes * 10));
    
    if (leftQuant2 !=0 ){
        numNickels = Math.floor(leftQuant2 / 5);
    }
    
    leftQuant3 = (leftQuant2 - (numNickels * 5));
    
    if (leftQuant3 != 0){
        numPennies = Math.floor(leftQuant3 / 1);
    }
    console.log(`The value of ${cents} in change will be: ${numQuarters} quarters, ${numDimes} dimes, ${numNickels} nickels and ${numPennies} pennies`);

}

function _three(miles, kilometers) {
    let convertToKm = (miles * 1.609).toFixed(2);
    let convertToMi = (kilometers / 1.609).toFixed(2);
    console.log(`${miles} miles = ${convertToKm} Kilometers, ${kilometers} kilometers = ${convertToMi} miles`);
}

function _four(array) {
    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);
    console.log(`The minimum value in the array is: ${minValue}. The maximum value is: ${maxValue}`);
}

function _five(string, a_char) {
    let counter = 0;
    for (let i = 0; i <= string.length; i++){
        if (string.toLowerCase()[i] === a_char.toLowerCase()){
            counter++;
        }
    }
    console.log(`The word ${string} has ${counter} occurrences of the character ${a_char}`);
}

function _six(grade) {
    let gradeLetters = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']
    let finalGrade = "";
    let firstMessage = ""
    if (grade <= 100 && grade >= 90) {
        finalGrade = gradeLetters[0]; 
    }
    if (grade <= 89 && grade >= 85) {
        finalGrade = gradeLetters[1];
    }
    if (grade <= 84 && grade >= 80) {
        finalGrade = gradeLetters[2];
    }
    if (grade <= 79 && grade >= 76) {
        finalGrade = gradeLetters[3];
    }
    if (grade <= 75 && grade >= 73) {
        finalGrade = gradeLetters[4];
    }
    if (grade <= 72 && grade >= 70) {
        finalGrade = gradeLetters[5];
    }
    if (grade <= 69 && grade >= 66) {
        finalGrade = gradeLetters[6];
    }
    if (grade <= 65 && grade >= 63) {
        finalGrade = gradeLetters[7];
    }
    if (grade <= 62 && grade >= 60) {
        finalGrade = gradeLetters[8];
    }
    if (grade <= 59 && grade >= 56) {
        finalGrade = gradeLetters[9];
    }
    if (grade <= 55 && grade >= 53) {
        finalGrade = gradeLetters[10];
    }
    if (grade <= 52 && grade >= 50) {
        finalGrade = gradeLetters[11];
    }
    if (grade < 50) {
        finalGrade = gradeLetters[12];
    }
    else {
        firstMessage = "Invalid number."
    }
    if (finalGrade === gradeLetters[12]) {
        firstMessage = "Unfortunately, you did not meet the minimum requeriments to passs this course.";
    }
    else {
        firstMessage = "Congratulations, you passed the course.";
    }
    console.log(`${firstMessage} Your final grade is: ${grade} = ${finalGrade}`);
}

function _seven(array) {
    let originalArray = array.toString();
    let reversedArray = array.reverse();
    console.log(`Original Order Array = [ ${originalArray} ] \nReversed Order Array = [ ${reversedArray} ]`);
}

function _eight() {
    let currentDate = new Date();
    let termEnd = new Date("04/23/2021");
    let timeDifference = (termEnd.getTime() - currentDate.getTime());
    let differenceDays = Math.round((timeDifference / (1000 * 3600 *24)), 4);
    let currentDateFormatted = (`${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`);
    let termEndFormatted = (`${termEnd.getMonth()+1}/${termEnd.getDate()}/${termEnd.getFullYear()}`);

    console.log(`Current date = ${currentDateFormatted}, last day of school = ${termEndFormatted}. The days left until the end of school = ${differenceDays} days`);
}

function _nine(word) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let aCounter = 0; 
    let eCounter = 0; 
    let iCounter = 0; 
    let oCounter = 0; 
    let uCounter = 0;
    for (let i = 0; i <= word.length; i++){
        if (word[i] === vowel[0]){
            aCounter++;
        }
        if (word[i] === vowel[1]){
            eCounter++;
        }
        if (word[i] === vowel[2]){
            iCounter++;
        }
        if (word[i] === vowel[3]){
            oCounter++;
        }
        if (word[i] === vowel[4]){
            uCounter++;
        }
    }
    console.log(`Vowel count: A = ${aCounter}, E = ${eCounter}, I = ${iCounter}, O = ${oCounter}, U = ${uCounter} `);
}

function _ten(my_string) {
    let letters = my_string.toLowerCase().split('').sort();
    let sorted = letters.join('');
    console.log(`The string converted to alphabetical order is: ${sorted}`);
}
