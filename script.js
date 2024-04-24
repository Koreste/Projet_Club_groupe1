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