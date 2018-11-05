//****************************************************************/
// Preview the image upon load (got the code from here : websnippet.io/post/html5-file-upload-without-jquery/)
//****************************************************************/

document.querySelector('#user-photo').addEventListener('change', function(){
    // gets first selected file
    const file = this.files[0];

    // Using FileReader to display the image content
    const reader = new FileReader();
    reader.onload = function(e) {
        document.querySelector('#preview').src = e.target.result;
    };
   reader.readAsDataURL(file);

}, false);


//****************************************************************/
// Display user input upon Submit button press
//****************************************************************/
const userInput = () => {
// Selection of all values
  const name = document.querySelector("input[name='Name']").value;
  const gender = document.querySelector('input[name="Gender"]:checked').value;

  const age = document.querySelector("input[name='Age']").value;
  const birthdate = document.querySelector("input[name='Date']").value;
  const color = document.querySelector("input[name='Color']").value;
  const country = document.querySelector("select[name='Country']").value;

  const height = document.querySelector("input[name='Height']").value;
  const salary = document.querySelector("input[name='Salary']").value;

  const email = document.querySelector("input[name='Email']").value;
  const mobile = document.querySelector("input[name='Mobile']").value;
  const adress = document.querySelector("textarea[name='Adress']").value;

  let methodEmail = ' - ';
  if (document.getElementById('email').checked == true) {
    methodEmail = document.querySelector('input[name="Email"]:checked').value;
  };

  let methodWhatsapp = ' - ';
  if (document.getElementById('whatsapp').checked == true) {
    methodWhatsapp = document.querySelector('input[name="Whatsapp"]:checked').value;
  };

  let methodInApp = ' - ';
  if (document.getElementById('in-app').checked == true) {
    methodInApp = document.querySelector('input[name="In-app"]:checked').value;
  };

  if (name == "" || age == "" || email == ""){
      alert('Please fill in the required fields marked with  *');

  } else{
  const html = `<label for="photp"><b>Image:</b></label>
                <img id="preview2" src="http://placehold.it/100" alt="your-face" >
                <label for="name"><b>Name:</b> ${name}</label>
                <label for="gender"><b>Gender:</b> ${gender}</label>
                <label for="age"><b>Age:</b> ${age}</label>
                <label for="birthdate"><b>Date of Birth:</b> ${birthdate}</label>
                <label for="color"><b>Favourite color:</b> <span id="color-display"></span>${color}</label>

                <label for="Country"><b>Country:</b> ${country}</label>

                <label for="height"><b>Height: </b>${height}</label>
                <label for="salary"><b>Salary: </b>${salary}</label>

                <label for="email"><b>Email: </b>${email}</label>
                <label for="mobile"><b>Mobile: </b>${mobile}</label>
                <label for="adress"><b>Adress: </b>${adress}</label>
                <label for="method" class="method"><b>Method to contact you:</b> ${methodEmail}, ${methodWhatsapp}, ${methodInApp}</label>
                <button type="button" name="close" onclick="closeResults()" id="closeBtn">SEND</button>`;
  document.getElementById('display-results').innerHTML = html;

  document.getElementById("color-display").style.backgroundColor = color;
  document.getElementById("result").style.display = "block";

}
};

//****************************************************************/
// Close button for the pop-up window
//****************************************************************/
const closeResults = () => {
  document.getElementById("result").style.display = "none";
}
