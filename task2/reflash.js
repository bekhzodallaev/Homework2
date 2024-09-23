const ORIGINAL_ALERT = alert;
const ORIGINAL_CONFIRM = confirm;
const ORIGINAL_PROMPT = prompt;

alert = function () {
  ORIGINAL_CONFIRM('Alert calls confirm');
};

confirm = function () {
  ORIGINAL_PROMPT('Confirm calls prompt');
};

prompt = function () {
  ORIGINAL_ALERT('Prompt calls alert');
};

alert();
confirm();
prompt();
