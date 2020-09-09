// Challenge 1 your age in days. 

function ageInDays(){
var birthYear = prompt('What year were you born.. good friend');
var ageInDayss = (2020 - birthYear) * 365;
console.log(ageInDayss);
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('Your are ' + ageInDayss + ' days');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//challenge -2 get cat
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=jpg&size=small&"
    div.appendChild(image);

}

// Challenge 3: Rock, paper, scissors
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice); //(0, 1) human lost | bot won
    console.log(results);

    message = finalMessage(results); // {massage : 'You won!' , 'color: green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() *3);
}

function numberToChoice(number){
    return['rock', 'paper','Scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'Scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'Scissors': 0},
        'Scissors': {'paper': 1, 'Scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'Message': 'You Lost!', 'color': 'Red'};
    }
    else if(yourScore === 0.5){
        return {'Message': 'You tied', 'color': 'Yellow'};
    }
    else{
        return {'Message': 'You won!', 'color': 'Green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'Scissors': document.getElementById('Scissors').src 
    }

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('Scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src ='" + imagesDatabase[humanImageChoice] + "'height= 150 width= 150 style= 'box-shadow: 0px 10px 50px rgba(37, 50, 223,1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['Message'] + "</h1>"
    botDiv.innerHTML = "<img src ='" + imagesDatabase[botImageChoice] + "'height= 150 width= 150 style= 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}
