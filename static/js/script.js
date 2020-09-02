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