const emailLink = document.getElementById('emailLink');

let email1 = "hola";
let email2 = Math.pow(2,6);
let email3 = "martavilaseca.com";
let emailAddress = email1 + String.fromCharCode(email2) + email3;
let emailText = "contact";


emailLink.innerHTML = `<a href=mailto:${emailAddress}>Contact</a>`;