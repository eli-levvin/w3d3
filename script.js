const form1 = document.querySelector(".form");
form1.addEventListener("keypress", handleForm);
function handleForm(event) {
  if (event.key === "Enter") {
    let S = "";  //empty string to store the value
    for (let i = 0; i < event.target.value.length; i++) { //go over input 
        const C = event.target.value.charCodeAt(i) //turn the key to the numeric value
      if ((C >= 65 && C <= 90) || (C >= 97 && C <= 122)) { //A-Z according to ascii
        S += event.target.value.charAt(i); // add value to the empty string
      }
    }
    console.log(S);
  }
}

