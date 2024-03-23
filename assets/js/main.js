const textArea = document.querySelector('.content__textarea');
const resultText = document.querySelector('.aside__response');
const message = document.querySelector('.aside__message');
const buttons = document.querySelectorAll('.content__actions button');
const deleteIcon = document.querySelector('.content__input-close');
const copyButton = document.querySelector('.aside__copy-button');
const pasteButton = document.querySelector('.content__input-paste');

let previousHeight = 0; //Variable to store previous height of the text area

// Encrypt and decrypt keys mappings
const keysOfEncrypt = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};

const keysOfDecrypt = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u',
};

// Function to handle input changes in the textarea
function callback() {
    adjustTextareaHeight();
    toggleIcon();
    togglePasteButton('invisible');
    togglePlaceholder('enable')
}

// Adjusts the height of the text area dynamically based on content
function adjustTextareaHeight() {
    const currentHeight = textArea.scrollHeight;
    const heightDifference = currentHeight - previousHeight;

    if (heightDifference < 0) {
        textArea.style.height = (textArea.offsetHeight - Math.abs(heightDifference)) + 'px';
    } else {
        textArea.style.height = 'auto'; 
        textArea.style.height = textArea.scrollHeight + 'px'; 
    }

    previousHeight = currentHeight;
}

// Handles button clicks (encrypt or decrypt)
function buttonClickHandler(event) {
    const buttonClass = getButtonClass(event);
    const text = getTextFromTextarea();

    try {
        validateText(text);
    } catch (error) {
        alert(error.message);
        return;
    }

    const resultText = (buttonClass === 'content__action-button--encrypt') ? encryptText(text) : decryptText(text);
    displayText(resultText, {hideMessage: true, resultText: true, enableCopyButton: true});

    adjustTextareaHeight()
}

// Determines which button is clicked (encrypt or decrypt)
function getButtonClass(event){
    return event.target.classList.contains('content__action-button--encrypt')? 
    'content__action-button--encrypt' : 'content__action-button--decrypt';
}

// Retrieves text from the text area
function getTextFromTextarea(){
    return textArea.value;
}

// Validates the text entered in the textarea
function validateText(text){
    const regex = /^([a-z\s])+$/;
    if(!regex.test(text)){
        throw new Error('Digite apenas letras minúsculas e sem acento.');
    }
    return true;
}

// Encrypts the text
function encryptText(text) {
    return text.replace(/[aeiou]/g, match => keysOfEncrypt[match]);
}

// Decrypts the text
function decryptText(text) {
    return text.replace(/ai|enter|imes|ober|ufat/g, match => keysOfDecrypt[match]);
}

// Displays the result text and message
function displayText(text, options = {}) {
    // Default values assigned if the 'options' parameter is not provided
    const {
        hideMessage = true, // Whether to hide the message
        displayResultText = true, // Whether to display the resulting text
        enableCopyButton = true // Whether to enable the copy button
    } = options;

    // Display the resulting text
    resultText.textContent = text;
        resultText.style.display = displayResultText ? 'block' : 'none';

    // Hide the message
    message.style.display = hideMessage ? 'none' : 'block';

    /// Enable/disable the copy button
    copyButton.disabled = !enableCopyButton;
    copyButton.style.opacity = enableCopyButton ? '1' : '0.5';

    // Clear the text area
    deleteAllText();
}

// Toggles the visibility of the delete icon based on textarea content
function toggleIcon(){
    deleteIcon.style.display = (textArea.value.trim() !== '') ? 'inline-block' : 'none';
}

// Deletes all text in the textarea
function deleteAllText(){
    textArea.value = '';
    deleteIcon.style.display = 'none';
}

// Copies the result text to the clipboard
function copyText(){
    navigator.clipboard.writeText(resultText.textContent).then(() => {
        alert("Texto copiado para área de transferência.");
        togglePasteButton('visible');
        togglePlaceholder('disable');
        displayText('', {hideMessage: false, displayResultText: false, enableCopyButton: false});
    }).catch(err => {
        console.log('Erro ao copiar texto: ', err);
    });
}

// Pastes text from the clipboard to the textarea
function pasteText(){
    navigator.clipboard.readText().then(textCopied => {
        if(textCopied.trim() !== ''){
            textArea.value = textCopied;
            togglePasteButton('invisible');
            togglePlaceholder('enable');
            adjustTextareaHeight();
            toggleIcon();
        } else{ 
            alert('Não há nenhum texto na Área de Tranferência')
        }
    }).catch(err => {
        console.log('Erro ao colar texto: ', err);
    })
}

// Toggles the visibility of the paste button
function togglePasteButton(state){
    return pasteButton.style.display = state === 'visible' ? 'block' : 'none';
}

// Toggles the placeholder text in the text area
function togglePlaceholder(state){
    return textArea.placeholder = state === 'enable' ? 'Digite seu texto' : '';
}

// Updates the brand name based on viewport width
function updateBrandName() {
    const brandName = document.querySelector('.header__brand-name');
    if (window.matchMedia('(max-width: 380px)').matches) {
        brandName.textContent = 'ONE';
    } else {
        brandName.textContent = 'Oracle Next Education';
    }
}

// Updates the image based on viewport width
function updateImage() {
    const messageImage = document.querySelector('.aside__message-image img');
    if (window.matchMedia('(max-width: 900px)').matches) {
        messageImage.src = './assets/images/looking-up.png'
    } else {
        messageImage.src = './assets/images/looking-sideways.png'
    }
}

buttons.forEach(button => {
    button.addEventListener('click', buttonClickHandler);
});
textArea.addEventListener('input', callback);
deleteIcon.addEventListener('click', deleteAllText);
copyButton.addEventListener('click', copyText);
pasteButton.addEventListener('click', pasteText);
window.addEventListener('resize', () => {
    updateBrandName();
    updateImage();
});