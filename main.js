/*var victims = prompt("How many victims would you like to enter?");

var victimName = [];
var victimPhone = [];
var	victimAddress = [];

for(var i=0; i<victims; i++) {
	victimName.push(prompt("What is the victim's name?"));
	victimPhone.push(prompt("What is the victim's phone number?"));
	victimAddress.push(prompt("What is the victim's address?"))
}

var volunteers = prompt("How many volunteers would you like to enter?");

var volunteerName = [];
var volunteerPhone = [];
var	volunteerAddress = [];

for(var i=0; i<volunteers; i++) {
	volunteerName.push(prompt("What is the volunteer's name?"));
	volunteerPhone.push(prompt("What is the volunteer's phone number?"));
	volunteerAddress.push(prompt("What is the volunteer's address?"));
}

alert("Number of Victims: " + victims + "\n" + "List of names: " + victimName + "\n" + "Number of Volunteers: " + volunteers + "\n" + "List of Names: " + volunteerName);
*/

/* Objects 


var victims = prompt("How many victims would you like to enter?");

var victimInfo = [];


for(var i=0; i<victims; i++) {
	{
	name victimInfo.push(prompt("What is the victims name?"));
	phone victimInfo.push(prompt("What is the victims phone number?"));
	address victimInfo.push(prompt("What is the victims address?"));
}
	
} */


/* Bonus 1 */
var victimName = [];
var victimPhone = [];
var	victimAddress = [];

var addMore = true;

while(addMore) {
	victimName.push(prompt("What is the victim's name?"));
	victimPhone.push(prompt("What is the victim's phone number?"));
	victimAddress.push(prompt("What is the victim's address?"));
	addMore = confirm("Would you like to add another victim?");
}

var volunteerName = [];
var volunteerPhone = [];
var	volunteerAddress = [];

var addMore = true;

while(addMore) {
	volunteerName.push(prompt("What is the volunteer's name?"));
	volunteerPhone.push(prompt("What is the volunteer's phone number?"));
	volunteerAddress.push(prompt("What is the volunteers's address?"));
	addMore = confirm("Would you like to add another volunteer?");
}


