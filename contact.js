//Début : encadré en orange dans l'encadré des input"

const inputs = document.querySelectorAll('input')

const toggleFocus = (isFocus, element) => {
    element.style.backgroundColor = isFocus ? "#e67e22" : ""
}

inputs.forEach(element => {
    element.addEventListener('focus', () => toggleFocus(true, element))
    element.addEventListener('blur', () => toggleFocus(false, element))
});

//Fin : encadré en orange dans l'encadré des input"

//Début des validations des conditions des champs
const validObject = {
  nom: false,
  prenom: false,
  email: false,
  telephone: false,
  conditions: false
}

// Allow or disallow submit button
function checkFormValidity() {
    let isValid = true;

    for (const key in validObject) {
        if (Object.hasOwnProperty.call(validObject, key)) {
            isValid &&= validObject[key];
        }
    }

    contactSubmit.disabled = !isValid;
}

const form = document.getElementById('contactForm');
const nomInput = document.getElementById('nom');
const prenomInput = document.getElementById('prenom');
const emailInput = document.getElementById('email');
const telephoneInput = document.getElementById('telephone');
const conditionsCheckbox = document.getElementById('conditions');
const nomError = document.getElementById('nomError');
const prenomError = document.getElementById('prenomError');
const emailError = document.getElementById('emailError');
const telephoneError = document.getElementById('telephoneError');
const conditionsError = document.getElementById('conditionsError');
const contactSubmit = document.getElementById('contactSubmit');

function validateNom() {
    const nomValue = nomInput.value.trim();
    const nomRegex = /^[A-Z][a-z]+$/;
    if (!nomRegex.test(nomValue) || nomValue.length < 2) {
        nomError.textContent = 'Le nom doit commencer par une majuscule et contenir au moins 2 caractères.';
        nomError.style.display = 'block';
        validObject.nom = false;
    } else {
        nomError.textContent = '';
        nomError.style.display = 'none';
        validObject.nom = true;
    }
    checkFormValidity();
}
function validatePrenom() {
    const prenomValue = prenomInput.value.trim();
    const prenomRegex = /^[A-Z][a-z]+$/;
    if (!prenomRegex.test(prenomValue) || prenomValue.length < 2) {
        prenomError.textContent = 'Le prénom doit commencer par une majuscule et contenir au moins 2 caractères.';
        prenomError.style.display = 'block';
        validObject.prenom = false;
    } else {
        prenomError.textContent = '';
        prenomError.style.display = 'none';
        validObject.prenom = true;
    }
    checkFormValidity();
}
function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        emailError.style.display = 'block';
        validObject.email = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
        validObject.email = true;
    }
    checkFormValidity();
}
function validateTelephone() {
    const telephoneValue = telephoneInput.value.trim();
    const telephoneRegex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
    if (!telephoneRegex.test(telephoneValue)) {
        telephoneError.textContent = 'Veuillez entrer un numéro de téléphone français valide.';
        telephoneError.style.display = 'block';
        validObject.telephone = false;
    } else {
        telephoneError.textContent = '';
        telephoneError.style.display = 'none';
        validObject.telephone = true;
    }
    checkFormValidity();
}
function validateConditions() {
    if (!conditionsCheckbox.checked) {
        conditionsError.textContent = 'Vous devez accepter les conditions.';
        conditionsError.style.display = 'block';
        validObject.conditions = false;
    } else {
        conditionsError.textContent = '';
        conditionsError.style.display = 'none';
        validObject.conditions = true;
    }
    checkFormValidity();
}
function validateForm() {
    validateNom();
    validatePrenom();
    validateEmail();
    validateTelephone();
    validateConditions();
}

nomInput.addEventListener('blur', validateNom);
prenomInput.addEventListener('blur', validatePrenom);
emailInput.addEventListener('blur', validateEmail);
telephoneInput.addEventListener('blur', validateTelephone);
conditionsCheckbox.addEventListener('click', validateConditions);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.submit();
});