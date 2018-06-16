var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function homeTeamValidation(hometeamInput) {
    var hometeam = document.getElementById("hometeam");
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(hometeamInput)) {
        issueArr.push("No special characters!");
    }
    if (issueArr.length > 0) {
        hometeam.setCustomValidity(issueArr);
        hometeam.style.borderColor = alertRedInput;
    } else {
        hometeam.setCustomValidity("");
        hometeam.style.borderColor = defaultInput;
    }
}

function visitiTeamValidation(visitingteamInput) {
    var visititeam = document.getElementById("visititeam");
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(hometeamInput)) {
        issueArr.push("No special characters!");
    }
    if (issueArr.length > 0) {
        visititeam.setCustomValidity(issueArr);
        visititeam.style.borderColor = alertRedInput;
    } else {
        visititeam.setCustomValidity("");
        visititeam.style.borderColor = defaultInput;
    }
}
