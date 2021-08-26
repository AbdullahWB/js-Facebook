//element form -- html;
var fName = document.getElementById('fName');
var sName = document.getElementById('sName');
var eMail = document.getElementById('eMail');
var pass = document.getElementById('pass');
var DoB = document.getElementById('DoB');
var gEnder = document.getElementById('gEnder');


// submit button function;
function subm() {
    // //email;
    // if (email.value == '') {
    //     email.style.borderColor = "red"
    //     email.style.color = 'red'
    //     email.focus();
    //     return false;
    // }
    // //passw;
    // if (passw.value == '') {
    //     passw.style.borderColor = "red"
    //     passw.style.color = 'red'
    //     passw.focus();
    //     return false;
    // }
    //fName;
    if (fName.value == '') {
        fName.style.borderColor = "red"
        fName.style.color = 'red'
        fName.focus();
        return false;
    }
    //sName;
    if (sName.value == '') {
        sName.style.borderColor = "red"
        sName.style.color = 'red'
        sName.focus();
        return false;
    }
    //eMail;
    if (eMail.value == '') {
        eMail.style.borderColor = "red"
        eMail.style.color = 'red'
        eMail.focus();
        return false;
    }
    //pass;
    if (pass.value == '') {
        pass.style.borderColor = "red"
        pass.style.color = 'red'
        pass.focus();
        return false;
    }
    //DoB;
    if (DoB.value == '') {
        DoB.style.borderColor = "red"
        DoB.style.color = 'red'
        DoB.focus();
        return false;
    }
    //gEnder;
    if (gEnder.value == '') {
        gEnder.style.borderColor = "red"
        gEnder.style.color = 'red'
        gEnder.focus();
        return false;
    }
}
//error function;
function errValid() {
    // //email
    // if (email.value != '') {
    //     email.style.borderColor = "#dfdfdf"
    //     email.style.color = '#8f8f8f';
    // }
    // //passw
    // if (passw.value != '') {
    //     passw.style.borderColor = "#dfdfdf"
    //     passw.style.color = '#8f8f8f';
    // }
    //fNmame
    if (fName.value != '') {
        fName.style.borderColor = "#dfdfdf"
        fName.style.color = '#8f8f8f';
    }
    //sName
    if (sName.value != '') {
        sName.style.borderColor = "#dfdfdf"
        sName.style.color = '#8f8f8f';
    }
    //eMail
    if (eMail.value != '') {
        eMail.style.borderColor = "#dfdfdf"
        eMail.style.color = '#8f8f8f';
    }
    //pass
    if (pass.value != '') {
        pass.style.borderColor = "#dfdfdf"
        pass.style.color = '#8f8f8f';
    }
    //DoB
    if (DoB.value != '') {
        DoB.style.borderColor = "#dfdfdf"
        DoB.style.color = '#8f8f8f';
    }
    //gEnder
    if (gEnder.value != '') {
        gEnder.style.borderColor = "#dfdfdf"
        gEnder.style.color = '#8f8f8f';
    }
}

// email.addEventListener('blur', errValid)
// passw.addEventListener('blur', errValid)
fName.addEventListener('blur', errValid)
sName.addEventListener('blur', errValid)
eMail.addEventListener('blur', errValid)
pass.addEventListener('blur', errValid)
DoB.addEventListener('blur', errValid)
gEnder.addEventListener('blur', errValid)


// modeel popup;
var trigger = document.getElementById('trigger');

trigger.addEventListener('click', function() {
    model.style.display = 'flex'
})

var close = document.getElementById('close');

close.addEventListener('click', function() {
    model.style.display = 'none'
});