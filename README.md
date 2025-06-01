# Is-My-Password-Safe-JavaScript

## Day 1 :
Created a basic webpage for the intro section of the project

## Day 2 : 
Woopsie, I just got an idea of adding bootstrap to my dev, just so I could refresh my bootstrap knowledge hehe.

## Code:
<<<<<<< HEAD
=======
### HTML
>>>>>>> 16915aeb957c80df7a71760f912314e23021be88
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

    <script src="password.js" defer></script>
    <title>Password Checker</title>
</head>
<body>

        
        <div class="card w-50 m-5 ">
<div class="card-body p-5">
    <h3 class="card-title text-center mb-4 fw-bold display-4">🔐 Is My Password Safe?</h3>
    <p class="card-text fs-6 text-secondary">
        It’s 3:00 AM. You're peacefully asleep. 😴  
        Somewhere, in a dimly-lit basement, lit only by RGB lights and bad intentions... a hacker known as <span class="fw-semibold text-primary">"The_KeyboardWarrior420"</span> stretches his fingers. 💻🖐️  
        <br><br>
        He takes a wild guess: <span class="fw-bold text-danger">‘password123’</span>.  
        <span class="text-success">Boom. He's in. 💥</span>  
        Your emails, your memes, even your old cringy blog from 2011 — all exposed.
        <br><br>
        But wait... it gets worse.
        <br><br>
        The next day, your friends receive messages saying:  
        <em class="text-warning">"I've become a crypto prince. Send ETH. Urgent."</em> 👑🚩  
        <br><br>
        <span class="fw-bold text-danger">Don’t be a victim of the Midnight Meme Massacre™.</span>  
        <span class="fw-semibold text-success">Check your password. Make it strong. Confuse the hackers. Add a llama or something. 🦙</span>  
    </p>
    <div class="d-flex justify-content-center mt-4">
        <a href="form.html" class="btn btn-primary shadow px-5 py-2 fw-bold">
            Check My Password Now
        </a>
    </div>
</div>
  </div>
</div>
</body>
</html>
<<<<<<< HEAD
```
=======
```

### JavaScript Logic for checking passwords:
```
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
```
>>>>>>> 16915aeb957c80df7a71760f912314e23021be88
