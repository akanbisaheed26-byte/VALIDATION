
const ageForm = document.querySelector("#ageForm");
const ageInput = document.querySelector("#ageInput");

const result = document.querySelector("#result");
const resultIcon = document.querySelector("#resultIcon");
const resultTitle = document.querySelector("#resultTitle");
const resultMessage = document.querySelector("#resultMessage");

function showResult(type, icon, title, message) {
    result.className = `result ${type}`;
    resultIcon.textContent = icon;
    resultTitle.textContent = title;
    resultMessage.textContent = message;
    result.hidden = false;
}

ageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const ageText = ageInput.value.trim();

    if (ageText === "") {
        showResult(
            "error",
            "!",
            "Age required",
            "Please enter your age before continuing."
        );
        ageInput.focus();
        return;
    }

    const age = Number(ageText);

    if (!Number.isInteger(age) || age < 0 || age > 120) {
        showResult(
            "error",
            "!",
            "Invalid age",
            "Please enter a whole number between 0 and 120."
        );
        ageInput.focus();
        return;
    }

    if (age < 18) {
        const yearsRemaining = 18 - age;

        showResult(
            "warning",
            "⌛",
            "Access not yet approved",
            `You need to wait ${yearsRemaining} more ${
                yearsRemaining === 1 ? "year" : "years"
            } to meet the minimum age requirement of 18.`
        );
    } else {
        showResult(
            "success",
            "✓",
            "Age requirement met!",
            "You meet the minimum age requirement. Access approved for this demo."
        );
    }
});

ageInput.addEventListener("input", function () {
    result.hidden = true;
});
