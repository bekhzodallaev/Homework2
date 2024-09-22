const originalAlert = alert;
const originalConfirm = confirm;
const originalPrompt = prompt;

alert = function () {
  originalConfirm('Alert calls confirm');
};

confirm = function () {
  originalPrompt('Confirm calls prompt');
};

prompt = function () {
  originalAlert('Prompt calls alert');
};

alert();
confirm();
prompt();
