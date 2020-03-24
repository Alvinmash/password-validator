const validatePassword = (password) =>{
  const lowerCaseTest = hasLowerCase(password)
  const upperCaseTest = hasUpperCase(password)
  const numericValueTest = hasANumber(password)
  const specialCharacterTest = hasSpecialCharcter(password)

  if (password.length > 8 && lowerCaseTest && upperCaseTest && numericValueTest && specialCharacterTest){
    return true 
  }
  else {
    return false 
  }

}
function hasLowerCase(password){ 
  return (/[a-z]/.test(password))
}
function hasUpperCase(password) {
  return (/[A-Z]/.test(password))
}
function hasANumber(password){
  return (/[0-9]/.test(password))
}
function hasSpecialCharcter(password){
  return (/[!@#$%^&*]/).test(password)
}
module.exports = validatePassword 