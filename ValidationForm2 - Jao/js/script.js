function strengthCheck(password) {
    if(password.length === 0) {
        document.getElementById("passCheck").innerHTML = "";
        return;
    }

    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]");
    matchedCase.push("[A-Z]");
    matchedCase.push("[0-9]");
    matchedCase.push("[a-z]");

    var ctr = 0;
    for(var i = 0; i < matchedCase.length; i++) {
        if(new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Weak";
            break;
        case 3:
            strength = "Medium";
            break;
        case 4:
            strength = "Strong";
            break;
    }
    document.getElementById("passCheck").innerHTML = strength;
}

function validateDropbox() {
        var dropbox = document.getElementbyId("Gender");
        var selected = dropbox.options[dropbox.selectedIndex].value;

        var selected = dropbox.options[dropbox.selectedIndex].text;
        if(selected==0) {
            alert("Choose one.");
        }
}

function validateTextbox() {
    if(document.getElementById("1").value = "") {
        var inputVal = document.getElementById("1");
        inputVal.style.backgroundColor = '#ffb7b8';
    } 
    else if(document.getElementById("2").value == "") {
        var inputVal = document.getElementById("2");
        inputVal.style.backgroundColor = '#ffb7b8';
    }
    else if(document.getElementById("3").value == "") {
        var inputVal = document.getElementById("3");
        inputVal.style.backgroundColor = '#ffb7b8';
    }
    else if(document.getElementById("4").value == "") {
        var inputVal = document.getElementById("4");
        inputVal.style.backgroundColor = '#ffb7b8';
    }

    else if((document.getElementById("2").value) != (document.getElementById("3").value == "")) {
        alert("Passwords are not the same.");
        inputVal.style.backgroundColor = '#ffb7b8';
    }

    else{
        inputVal.style.backgroundColor = '#ddfba5';
    }
}

function clear() {
    y2=document.getElementById("Events").value = "";
    x1=document.getElementById("1").value = "";
    x2=document.getElementById("2").value = "";
    x3=document.getElementById("3").value = "";
    x4=document.getElementById("4").value = "";
}   
function validate() {
    var y2=document.getElementById("Gender").value;
    var x1=document.getElementById("1").value;
    var x2=document.getElementById("2").value;
    var x3=document.getElementById("3").value;
    var x4=document.getElementById("4").value; 
    

    validateTextbox();
    validateCheckbox();
    validateDropbox();
    clear();
}