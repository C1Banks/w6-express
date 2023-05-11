const checkPasswordStrength = (req, res, next) => {

try{
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = '!@#$%^&*()_+-=[]{};\\:"|,.<>/?';

    let hasUpperCase = false;
    let hasSymbol = false;

    const password = req.body.password;


for (let i = 0; i <= password.length; i++){
    const currChar = password[i];
    if (uppercaseLetters.includes(currchar)){

        hasUpperCase = true;
    } else if (symbols.includes(currChar)){
        hasSymbol = true;
    }
}
    if (hasUpperCase && hasSymbol){
        next();
    }
    else{
        throw new Error("Password must conatain a uppercase and one special character")
    }

    } catch(error){
        next(error)
    }
};

module.exports = checkPasswordStrength;