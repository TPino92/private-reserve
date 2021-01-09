const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-signup");
    const passwordEl = document.querySelector("#password-input-signup");

    const DOB = document.querySelector("#usernameDOB");
    console.log(DOB.value, typeof DOB.value)
    var currentDate = moment()
    var dateOfBirth = moment(DOB.value, "YYYY-MM-DD")
    var age = currentDate.diff(dateOfBirth, "years")
    console.log(age)

    if (age >= 21){
      fetch("/api/user", {
              method: "post",
              body: JSON.stringify({
                username: usernameEl.value,
                password: passwordEl.value
              }),
              headers: { "Content-Type": "application/json" }
            })
              .then(function() {
                document.location.replace("/dashboard");
              })
              .catch(err => console.log(err));
    } else {
      window.alert("You must be 21 to enter. Please come back when you're older.")
    }
};
  
document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);
  