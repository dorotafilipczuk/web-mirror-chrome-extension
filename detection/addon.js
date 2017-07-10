/**
 * A detector for addons
 */

/**
 * extID: The ID of the extension to detect
 */
function ExtensionDetector(extID)
{
    var self = this;

    function isInstalled()
    {
        chrome.management.get(extID, function(einfo)
        {
            if (chrome.runtime.lastError) {
                return false;
            } else {
                return true;
            }
        });
    }

    self.onDetect = function(){};
    self.onUndetect = function(){};

    var detected = false; // Flag so we know if it's appropriate to run onUndetect

    self.run = function(){

        if(isInstalled()){
            detected = true;
            self.onDetect();
        }
        else if(detected)
        {
            self.onUndetect();
        }

    };
}
