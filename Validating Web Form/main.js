const validateForm = () => {

    // ******   first name input    **********

    let firstNameCondition = 0;
    const firstNameInput = document.querySelector('#first-name');
    const firstNameRuleText = document.querySelector('#first-name-rule');

    firstNameInput.addEventListener('blur', () => {
    
        if ((firstNameInput.value.length >= 3 && firstNameInput.value.length <= 16 ) && ! firstNameInput.value.match(/\d+/gi)) {

            firstNameInput.style.outline = 'var(--valid-outline)';
            firstNameRuleText.innerHTML = '';
            firstNameCondition = 1;
        }
        else if (firstNameInput.value.length === 0) {
            firstNameInput.style.outline = 'var(--default-outline)';
            firstNameRuleText.innerHTML = '';
            firstNameCondition = 0;
        } else {

            firstNameInput.style.outline = 'var(--invalid-outline)';
            firstNameRuleText.textContent = `First name must contain only letters and contain 3 and 16 characters !`;
            firstNameCondition = 0;
        };

    });

    firstNameInput.addEventListener('input', () => {
        firstNameInput.style.outline = 'var(--default-outline)';
        firstNameRuleText.innerHTML = '';
    })


    //  ********    last name input    *********

    let lastNameCondition = 0;
    const lastNameInput = document.querySelector('#last-name');
    const lastNameRuleText = document.querySelector('#last-name-rule');
    
    lastNameInput.addEventListener('blur', () => {
        
        if ((lastNameInput.value.length >= 3 && lastNameInput.value.length <= 16 ) && ! lastNameInput.value.match(/\d+/gi)) {
    
            lastNameInput.style.outline = 'var(--valid-outline)';
            lastNameRuleText.innerHTML = '';
            lastNameCondition = 1;
        }
        else if (lastNameInput.value.length === 0) {
            lastNameInput.style.outline = 'var(--default-outline)';
            lastNameRuleText.innerHTML = '';
            lastNameCondition = 0;
        } else {
    
            lastNameInput.style.outline = 'var(--invalid-outline)';
            lastNameRuleText.textContent = `Last name must contain only letters and contain 3 and 16 characters !`;
            lastNameCondition = 0;
        };
    
    });
    
    lastNameInput.addEventListener('input', () => {
        lastNameInput.style.outline = 'var(--default-outline)';
        lastNameRuleText.innerHTML = '';
    });

    //  ********    age input    *********

    let ageCondition = 0;
    const ageInput = document.querySelector('#age');
    const ageRuleText = document.querySelector('#age-rule');
    
    ageInput.addEventListener('blur', () => {
        
        if ((ageInput.value.length <= 3 && ageInput.value != 0 ) && ! ageInput.value.match(/[^0-9]/gi)) {
    
            ageInput.style.outline = 'var(--valid-outline)';
            ageRuleText.innerHTML = '';
            ageCondition = 1;
        }
        else if (ageInput.value.length === 0) {
            ageInput.style.outline = 'var(--default-outline)';
            ageRuleText.innerHTML = '';
            ageCondition = 0;
        } else {
    
            ageInput.style.outline = 'var(--invalid-outline)';
            ageRuleText.textContent = `Age must contain only numbers, must be less than 4 characters and should not be zero!`;
            ageCondition = 0;
        };
    
    });
    
    ageInput.addEventListener('input', () => {
        ageInput.style.outline = 'var(--default-outline)';
        ageRuleText.innerHTML = '';
    });

    //  ********    email input    *********

    let emailCondition = 0;
    const emailInput = document.querySelector('#email');
    const emailRuleText = document.querySelector('#email-rule');
    
    emailInput.addEventListener('blur', () => {
        
        if (emailInput.value.length >= 5 && emailInput.value.match(/\S+@\S+\.\S+/)) {
    
            emailInput.style.outline = 'var(--valid-outline)';
            emailRuleText.innerHTML = '';
            emailCondition = 1;
        }
        else if (emailInput.value.length === 0) {
            emailInput.style.outline = 'var(--default-outline)';
            emailRuleText.innerHTML = '';
            emailCondition = 0;
        } else {
    
            emailInput.style.outline = 'var(--invalid-outline)';
            emailRuleText.textContent = `E-mail must be valid adress, e.g. example@example.com`;
            emailCondition = 0;
        };
    
    });
    
    emailInput.addEventListener('input', () => {
        emailInput.style.outline = 'var(--default-outline)';
        emailRuleText.innerHTML = '';
    });

    //  ********    password input    *********

    let passwordCondition = 0;
    const passwordInput = document.querySelector('#password');
    const passwordRuleText = document.querySelector('#password-rule');
    const passwordValidationRegex =  /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    
    passwordInput.addEventListener('blur', () => {
        
        if (passwordInput.value.match(passwordValidationRegex)) {
    
            passwordInput.style.outline = 'var(--valid-outline)';
            passwordRuleText.innerHTML = '';
            passwordCondition = 1;
        }
        else if (passwordInput.value.length === 0) {
            passwordInput.style.outline = 'var(--default-outline)';
            passwordRuleText.innerHTML = '';
            passwordCondition = 0;
        } else {
    
            passwordInput.style.outline = 'var(--invalid-outline)';
            passwordRuleText.textContent = `Password must be alphanumeric, contain a number and between 6 - 20 characters`;
            passwordCondition = 0;
        };
    
    });
    
    passwordInput.addEventListener('input', () => {
        passwordInput.style.outline = 'var(--default-outline)';
        passwordRuleText.innerHTML = '';
    });

    //  ********    phone number input    *********

    let phoneCondition = 0;
    const phoneInput = document.querySelector('#phone-number');
    const phoneRuleText = document.querySelector('#phone-number-rule');
    const phoneValidationRegexTurk = 
    /^(((\+|00)?(90)|0)[-| ]?)?((5\d{2})[-| ]?(\d{3})[-| ]?(\d{2})[-| ]?(\d{2}))$/gm;
    const phoneValidationRegexRus = 
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;
    
    phoneInput.addEventListener('blur', () => {
        
        if (phoneInput.value.match(phoneValidationRegexTurk) || phoneInput.value.match(phoneValidationRegexRus)) {
    
            phoneInput.style.outline = 'var(--valid-outline)';
            phoneRuleText.innerHTML = '';
            phoneCondition = 1;
        }
        else if (phoneInput.value.length === 0) {
            phoneInput.style.outline = 'var(--default-outline)';
            phoneRuleText.innerHTML = '';
            phoneCondition = 0;
        } else {
    
            phoneInput.style.outline = 'var(--invalid-outline)';
            phoneRuleText.textContent = `Invalid phone number format`;
            phoneCondition = 0;
        };
    
    });
    
    phoneInput.addEventListener('input', () => {
        phoneInput.style.outline = 'var(--default-outline)';
        phoneRuleText.innerHTML = '';
    });

    //  ********    message input    *********

    let messageCondition = 0;
    const messageInput = document.querySelector('#message');
    const messageRuleText = document.querySelector('#message-rule');
    
    messageInput.addEventListener('blur', () => {
        
        if (messageInput.value.length >= 8 && messageInput.value.length <= 50 ) {
    
            messageInput.style.outline = 'var(--valid-outline)';
            messageRuleText.innerHTML = '';
            messageCondition = 1;

        }
        else if (messageInput.value.length === 0) {
            messageInput.style.outline = 'var(--default-outline)';
            messageRuleText.innerHTML = '';
            messageCondition = 0;

        } else {
    
            messageInput.style.outline = 'var(--invalid-outline)';
            messageRuleText.textContent = `Message is required and must be between 8 and 50 characters !`;
            messageCondition = 0;
        };
    
    });
    
    messageInput.addEventListener('input', () => {
        messageInput.style.outline = 'var(--default-outline)';
        messageRuleText.innerHTML = '';
    });

    //  ********    submit button    *********

    const submitResultText = document.querySelector('#submit-result');
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        let conditions = firstNameCondition + lastNameCondition + ageCondition + emailCondition + passwordCondition + phoneCondition + messageCondition;
        
       if (conditions === 7) {
            submitResultText.textContent = 'Successful'
            submitResultText.style.color = 'green';
           
       } else {
            e.preventDefault()
            submitResultText.textContent = 'Mistake'
            submitResultText.style.color = 'red';
       };
    });

}; 

validateForm();