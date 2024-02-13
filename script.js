function validEmail(str) {
  //your JS code here.
	// var regex = /^[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}$/;
    // Test the email address against the regular expression pattern

	let regex = /^[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-z]{2,3}$/;
    return regex.test(str); 
} 
 
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
