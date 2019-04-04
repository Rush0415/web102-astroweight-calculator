// Write your JavaScript code here!

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
  
var select = document.getElementById("planets");
  
planets.reverse().forEach(function(element) {
    var planet_options = document.createElement('option');
    planet_options.innerHTML = element[0];
    planet_options.value = element[0];
    select.appendChild(planet_options);
  });
  
function calculateWeight(weight, planetName) {
   for(var i=0; i < planets.length; i++) {
    if(planetName == planets[i][0]){
      var result = weight * planets[i][1];
      break;
    }
   } 
    return result;
  };

  function handleClickEvent(e) {
// 3. Create a variable called userWeight and assign the value of the user's weight.
    var user_weight = document.getElementById('user-weight').value;
// 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = select.options[select.selectedIndex].value;
// 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(user_weight, planetName);
// 6. Write code to display the message shown in the screenshot.
    document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
    
  }
