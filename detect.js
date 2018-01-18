var ghosteryExtId = 'mlomiejdfkolichcflejclcbmpeaniij';
var adBlockPlusExtId = 'cfhdojbkjhnklbpkdaibdccddilifddb';
var disconnectExtId = 'jeoacafpbcihiomhlakheieifhpjdfeo';
var uBlockOriginExtId = 'cjpalhdlnbpafiamejdnhcphjbkeiagm';

function detectExt(extensionId) {
	chrome.management.get(extensionId, function(extensionInfo) {
    	var isInstalled;
    	if (chrome.runtime.lastError) {
    	  	// When the extension does not exist, an error is generated
    	  	isInstalled = false;
			    alert('not installed!');
    	} else {
     	 	// The extension is installed. Use "extensionInfo" to get more details
      		isInstalled = true;
      		alert('installed!');
    	}
      // TODO(dorotafilipczuk): Log the value of isInstalled and the timestamp
      // in the database.
	});
}

function detect() {
    detectExt(ghosteryExtId);
    detectExt(adBlockPlusExtId);
    detectExt(disconnectExtId);
    detectExt(uBlockOriginExtId);

    // TODO(dorotafilipczuk): If the first timestamp in the db + 30 days is
    // smaller than the current time stamp, then stop; redirect the user to
    // the exit survey and notify the admin.

    // TODO(dorotafilipczuk): interventions / notifications.
}
detect();

// GET THE BROWSING HISTORY (the last 500 URLs).
var pages = '';
chrome.history.search({text: '', maxResults: 500}, function(data) {
    data.forEach(function(page) {
        pages += page.url + '\n';
    });
		alert(pages);
});

setInterval(detect, 60 * 60 * 1000);
