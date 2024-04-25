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

const form = document.getElementById('myForm');
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
const submitBtn = document.getElementById('submitBtn');
function validateNom() {
    const nomValue = nomInput.value.trim();
    const nomRegex = /^[A-Z][a-z]+$/;
    if (!nomRegex.test(nomValue) || nomValue.length < 2) {
        nomError.textContent = 'Le nom doit commencer par une majuscule et contenir au moins 2 caractères.';
        nomError.style.display = 'block';
        return false;
    } else {
        nomError.textContent = '';
        nomError.style.display = 'none';
        return true;
    }
}
function validatePrenom() {
    const prenomValue = prenomInput.value.trim();
    const prenomRegex = /^[A-Z][a-z]+$/;
    if (!prenomRegex.test(prenomValue) || prenomValue.length < 2) {
        prenomError.textContent = 'Le prénom doit commencer par une majuscule et contenir au moins 2 caractères.';
        prenomError.style.display = 'block';
        return false;
    } else {
        prenomError.textContent = '';
        prenomError.style.display = 'none';
        return true;
    }
}
function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
        return true;
    }
}
function validateTelephone() {
    const telephoneValue = telephoneInput.value.trim();
    const telephoneRegex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
    if (!telephoneRegex.test(telephoneValue)) {
        telephoneError.textContent = 'Veuillez entrer un numéro de téléphone français valide.';
        telephoneError.style.display = 'block';
        return false;
    } else {
        telephoneError.textContent = '';
        telephoneError.style.display = 'none';
        return true;
    }
}
function validateConditions() {
    if (!conditionsCheckbox.checked) {
        conditionsError.textContent = 'Vous devez accepter les conditions.';
        conditionsError.style.display = 'block';
        return false;
    } else {
        conditionsError.textContent = '';
        conditionsError.style.display = 'none';
        return true;
    }
}
function validateForm() {
    validateNom();
    validatePrenom();
    validateEmail();
    validateTelephone();
    validateConditions();
    if (nomInput.value.trim() && prenomInput.value.trim() && emailInput.value.trim() && telephoneInput.value.trim() && conditionsCheckbox.checked) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}
nomInput.addEventListener('input', validateNom);
prenomInput.addEventListener('input', validatePrenom);
emailInput.addEventListener('input', validateEmail);
telephoneInput.addEventListener('input', validateTelephone);
conditionsCheckbox.addEventListener('change', validateConditions);
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Ici vous pouvez ajouter le code pour soumettre le formulaire, par exemple :
    // form.submit();
});