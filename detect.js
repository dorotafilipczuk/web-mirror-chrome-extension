var ghosteryExtId = 'mlomiejdfkolichcflejclcbmpeaniij';
var adBlockPlusExtId = 'cfhdojbkjhnklbpkdaibdccddilifddb';
var disconnectExtId = 'jeoacafpbcihiomhlakheieifhpjdfeo';
var uBlockOriginExtId = 'cjpalhdlnbpafiamejdnhcphjbkeiagm';

function detectExt(extensionId) {
	chrome.management.get(extensionId, function(extensionInfo) {
    	var isInstalled;
    	if (chrome.runtime.lastError) {
    	  	//When the extension does not exist, an error is generated
    	  	isInstalled = false;
			alert('not installed!');
    	} else {
     	 	//The extension is installed. Use "extensionInfo" to get more details
      		isInstalled = true;
      		alert('installed!');
    	}
	});
}

detectExt(ghosteryExtId);