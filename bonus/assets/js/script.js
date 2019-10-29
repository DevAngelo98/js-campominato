//Difficulty 0
var randomzero = 100;

//Difficulty 1
var randomone = 80;



// Generate a random number between min and max
function randomNumber(min,max){
  var number = Math.floor(Math.random()*max)+min;
  return number;
}

// Generate x number random
function xRandomNumber(size,max){
 
  var prohibitedNumbers = [];

  while(prohibitedNumbers.length < size){
    var random = randomNumber(1,max);
    var flag = true;
    for(i=0; i<=prohibitedNumbers.length; i++){
      if(prohibitedNumbers[i]==random){
        flag = false;
      } 
    }
    if(flag === true){
      prohibitedNumbers.push(random);
    }
  }
  return prohibitedNumbers;
}

// console.log(xRandomNumber(16));

//Check that the value entered is a number
function checkNumber (value) {
  if(isNaN(value) || value === "" || value === null){
    return false;
  } else {
    return true;
  }
}


// Check if the number has already been chosen by the user
function checkIfEntered (numberUser){
  var check = false;
  for(var i=0; i<= numbers.length; i++){
    if (numberUser == numbers[i]) {
      check = true;
    }
  }
  return check;
}

//Check if the number is in the list

function mine(number,list){
  var mine = false;
  for(var i=0; i<list.length; i++){
    if(list[i]==number){
      mine = true;
    }
  }
  return mine;
}

//Display none
function display(){
  document.getElementById("displaynone").style.display = "none";
  document.getElementById("display").style.display = "flex";

}


// Global variables:

//Global array of number chosen by the user
var numbers = [];

//Game
function game(max) {
  document.getElementById("value").innerHTML = "Enter a number from 1 to " + max;

  // 16 random numbers
  var pcRandomList = xRandomNumber(16,max);
  console.log(pcRandomList + " " + max);

  document.getElementById("check").onclick = function() {
    var numberEntered = document.getElementById("number").value;
    var result = document.getElementById("result");
    if(checkNumber(numberEntered)){
      if(checkIfEntered(numberEntered)!=true){
        numbers.push(numberEntered);
        result.innerHTML = "Numbers entered: " + numbers;
        console.log(numbers);
        if (mine(numberEntered,pcRandomList)!=true) {
          if (numbers.length == (max-pcRandomList.length)) {
            result.innerHTML = "You win! " + "Score = " + numbers.length;
            pcRandomList = xRandomNumber(16,max);
            numbers = [];
          }
        } else {
          result.innerHTML = "You crushed a mine, try again!" + "<br>" + "Score = " + numbers.length;
          pcRandomList = xRandomNumber(16,max);
          console.log(pcRandomList);
          numbers = [];
          console.log(numbers);
        }
  
      } else {
        result.innerHTML = "Number already chosen";
        document.getElementById("number").value = null;
      }
    } else {
      result.innerHTML = "Enter the number correctly";
      document.getElementById("number").value = null;
    }
  }
}



document.getElementById("difficultyzero").onclick = function() {
  //Difficulty 0
  var randomzero = 100;
  
  display();
  game(randomzero)
}

document.getElementById("difficultyone").onclick = function() {
  //Difficulty 1
  var randomone = 80;
  
  display();
  game(randomone);


}

document.getElementById("difficultytwo").onclick = function() {
  //Difficulty 2
  var randomtwo = 50;

  display();
  game(randomtwo);
}