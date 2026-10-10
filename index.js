const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", function () {

    const age = Number(prompt("Enter your age:"));

    if (age < 18) {

        const remainingYears = 18 - age;

        if (remainingYears === 1) {
            alert("You are not old enough. Please wait for 1 year.");
        } else {
            alert(`You are not old enough. Please wait for ${remainingYears} years.`);
        }

    } else {
        alert("Age approved. You can log in.");
    }
});