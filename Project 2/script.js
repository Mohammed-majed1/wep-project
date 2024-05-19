
/* contact  */ 
  function contactForm() {
    var email1 = document.getElementById('email1').value;
    var email2 = document.getElementById('email2').value;
    var name = document.getElementById("name contact").value;

    if (/[0-9]/.test(name)) {
      alert("من فضلك أدخل اسم بدون أرقام.");
      return false;
    }
    if (email1 === "" || email2 === "") {
        alert("يرجى ملء كلا حقلي البريد الإلكتروني.");
        return false;
      }
      if (email1 !== email2) {
        alert("يجب أن يكون عنوانا البريد الإلكتروني متطابقين!");
        return false;
      }
      else {
        document.getElementById('message').innerHTML = "";
      return true;

      }
     

  }
/*---------------------------------------------------------*/ 

/*  reviews  */

function validateForm() {
  var name = document.getElementById("name13").value;
  var email = document.getElementById("email3").value;
  var phone = document.getElementById("phone").value;


  

  if (name === "" || email === "") {
    alert("من فضلك أدخل اسمك وعنوان بريدك الإلكتروني.");
    return false;
  }
  if (/[0-9]/.test(name)) {
    alert("من فضلك أدخل اسم بدون أرقام.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("من فضلك أدخل عنوان بريد إلكتروني صحيح.");
    return false;
  }

  if (!validatePhone(phone)) {
    alert("من فضلك أدخل رقم هاتف صحيح.");
    return false;
  }

 
  return true;
}

function validateEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  var phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone) && !isNaN(phone);
}

function updateDateTime() {
  let currentDateTime = new Date();
  let dateTimeString = currentDateTime.toLocaleString();
  document.getElementById('date-time-display').textContent = dateTimeString;
}

setInterval(updateDateTime, 1000); // تحديث الوقت كل ثانية


/*-----------------------------------*/ 
// Bim

function calculateBMI() {
  var form = document.getElementById("bmi-form");
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var gender = document.querySelector('input[name="gender"]:checked')?.value;
  var lifestyle = document.querySelector('input[name="lifestyle"]:checked')?.value;

  if (weight <= 0 || height <= 0) {
    // Display an alert message
    alert("Please enter a valid weight and height.");
    return;
  }
  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0 || gender == "" || lifestyle == "") {
    // Display an alert message
    alert("Please fill in all the required fields.");
    return;
  }

  height = height / 100; // convert height from centimeters to meters
  var bmi = weight / (height * height);

  var status = "";
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    status = "Overweight";
  } else if (bmi >= 30) {
    status = "Obese";
  }

  if (isNaN(weight) || isNaN(height) || gender === "" || lifestyle === "") {
    alert("Please fill in all the required fields.");
    return;
  }
  document.getElementById("bmi-result").textContent = "BMI: " + bmi.toFixed(2);
  var result = "Weight: " + weight + " kg -\n Height: " + height + " m";
  if (gender) {
    result += " - \nGender: " + gender;
  }
  if (lifestyle) {
    result += " - \nLifestyle: " + lifestyle;
  }
  result += " - \nBMI: " + bmi.toFixed(2) + " (" + status + ")";
  document.getElementById("result").value = result;

}