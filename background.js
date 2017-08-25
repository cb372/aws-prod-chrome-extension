function findAccountName() {
  /*
   * If user is switching roles to view a different account, use the name of that account.
   * If they are just logged in normally, use the name of their normal account.
   */
  if (!!document.getElementById('awsc-role-display-name-account'))
    return document.getElementById('awsc-role-display-name-account').innerText;
  else if (!!document.getElementById('awsc-login-display-name-account'))
    return document.getElementById('awsc-login-display-name-account').innerText;
  else
    return '';
}

function setBackgroundColour(colour) {
  document.getElementById('b').style.backgroundColor = colour;
  document.getElementById('c').style.backgroundColor = colour;
}

function main() {
  const accountName = findAccountName();
  console.log('You are logged into ' + accountName);

  if (!!accountName) {
    chrome.storage.sync.get({
      accountNameRegex: '^.*-prod$',
      colour: 'pink'
    }, function(items) {
      if (accountName.match(items.accountNameRegex))
        setBackgroundColour(items.colour);
      else
        setBackgroundColour(null);
    });
  } else {
    setBackgroundColour(null);
  }

}

//document.addEventListener('DOMContentLoaded', main, false);
main();
