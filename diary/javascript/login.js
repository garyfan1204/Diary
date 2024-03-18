function validateLogin() {
  var emailInput = document.getElementById('email');

  if (!isValidEmail(emailInput.value)) {
    alert('請輸入符合格式的電子信箱');
    return false;
  }

  return true;
}

function validateRegister() {
  var emailInput = document.getElementById('email');
  var passwordInpur = document.getElementById('password');
  var confirmrwdInput = document.getElementById('confirmpwd');

  if (!isValidEmail(emailInput.value)) {
    alert('請輸入符合格式的電子信箱');
    return false;
  }

  if (passwordInpur !== confirmrwdInput) {
    alert('前後密碼不相符')
    return false;
  }
  
  return true;
}

function isValidEmail(email) {
  var emailRegex = /.+@(gmail.com|yahoo.com.tw|live.com|mail.com)$/;
  return emailRegex.test(email);
}