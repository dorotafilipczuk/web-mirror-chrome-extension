/**
 * Detect manual cookie deletion
 */
function ManualDeletionDetector()
{
    var self = this;

    self.onDetect = function(){};
    self.onUndetect = function(){};

    self.run = function(){ }; // This doesn't really make sense...

    var pending = false;
    var pendingInfo = [];
    function report()
    {
        self.onDetect(pendingInfo.length);
        pending = false;
        pendingInfo = [];
    }


    function detectEvent(info)
    {
        console.log(info);

        if(info.cause == "explicit" && info.removed === true)
        {
            // Deletions are reported in chunks, in case multiple cookies are removed
            // all at once.  If no other deletions occur within 500ms then onDetect is
            // called
            if(pending !== false)
                window.clearTimeout(pending);

            pendingInfo.push(info);

            pending = window.setTimeout(report, 500);
        }
    }

    console.log("Set up cookie listener");
    chrome.cookies.onChanged.addListener(detectEvent);

}
