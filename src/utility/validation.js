const validate = (val, rules, connectedValue) => {
    let isValid = true;
    for(let rule in rules) {
        switch(rule) {
            case "isEmail":
                isValid = isValid && emailValidator(val);
                break;
            case "minLength":
                isValid = isValid && minLengthValidator(val, rules[rule]);
                break;
            case "equalTo":
                console.log("connectedValue", connectedValue);
                isValid = isValid && equalToValidator(val, connectedValue[rule]);
                break;
            default: 
                isValid = true;
                break;
        }
    }

    return isValid;
}

const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
}

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;
}

const equalToValidator = (val, checkVal) => {
    return val === checkVal;
}

export default validate;