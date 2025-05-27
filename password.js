const commonPasswords = ['123', '123456', '123456789', 'password', '12345678', '12345', '1234', 'qwerty', 'abc123', 'football', 'monkey', 'letmein', '111111', 'welcome', 'admin','hello', 'hellothere', 'iloveyou', 'trustno1', '123123', 'sunshine', 'qwertyuiop', '123321', 'password1', 'qwerty123', '1q2w3e4r', '1qaz2wsx', 'qazwsx', '1q2w3e', '1qazxsw2', '123qwe', 'qwertyuiop123', '1234567890', 'password123', 'iloveyou123', 'letmein123', 'welcome123'];
function checkPassword(){
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');
    result.innerHTML = ' ';
    if(!password)
    {
        result.innerHTML = 'Please enter a password.';
        return;
    }
    if(commonPasswords.includes(password)){
        result.innerHTML = 'This password is too common. Please choose a different one.';
    } else {
        result.innerHTML = 'This password is acceptable.';
    }

    let passwordStrength = 0;
    if (password.length >= 8) passwordStrength++;
    if (/[A-Z]/.test(password)) passwordStrength++; 
    if (/[a-z]/.test(password)) passwordStrength++;
    if (/\d/.test(password)) passwordStrength++;
    if (/\W/.test(password)) passwordStrength++;
    switch (passwordStrength) {
        case 0:
        case 1:
            result.innerHTML += '<br>Password strength: Very Weak';
            break;
        case 2:
            result.innerHTML += '<br>Password strength: Weak';
            break;
        case 3:
            result.innerHTML += '<br>Password strength: Medium';
            break;
        case 4:
            result.innerHTML += '<br>Password strength: Strong';
            break;
        case 5:
            result.innerHTML += '<br>Password strength: Very Strong';
            break;
    }

    let timetoCrack;
    if (passwordStrength < 3) {
        timetoCrack = 'less than a second';
    } else if (passwordStrength === 3) {
        timetoCrack = 'a few seconds';
    } else if (passwordStrength === 4) {
        timetoCrack = 'a few minutes';
    } else {
        timetoCrack = 'a few hours or more';
    }
    result.innerHTML += `<br>Estimated time to crack: ${timetoCrack}`;
}