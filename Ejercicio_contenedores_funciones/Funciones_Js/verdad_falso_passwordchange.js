var password;
var newPassword;

function Authentify(password) 
{
    if(validationPassword(password)) {}
    
    else
    {
        assignNewPassword(newPassword)
        // auntentification(password);
    } 
}

function assignNewPassword(newPassword) 
{
    password = newPassword;
    newPassword = prompt("inserte nueva contraseña");
    return password;
}

function validationPassword(password) 
{
    if (password == "" && password == null && password.length < 8 && password.length > 15)
        return false;
    else {
        return true;
    }
}
  