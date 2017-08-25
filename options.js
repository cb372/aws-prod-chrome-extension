function saveOptions() {
  var accountNameRegex = document.getElementById('accountNameRegex').value;
  var colour = document.getElementById('colour').value;
  chrome.storage.sync.set({
		accountNameRegex: accountNameRegex,
    colour: colour
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions() {
  console.log('restoring');
  // Use default value accountNameRegex = '.*-prod' and colour = 'pink'
  chrome.storage.sync.get({
    accountNameRegex: '^.*-prod$',
    colour: 'pink'
  }, function(items) {
    document.getElementById('accountNameRegex').value = items.accountNameRegex;
    document.getElementById('colour').value = items.colour;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);

