/**
 * Set up countermeasure detection
 *
 */
var detectors = {};

// TODO: Log detections/undetections
detectors.detect = function(type, info){
    console.log("Detected " + type, info);
}

detectors.undetect = function(type){
    console.log("Undetected " + type, info);
}

/** Helper method to register new detectors
 *  detector: A detector object
 *  type: A string indicating what was detected (eg an extension name)
 *  runEvery: An integer indicating the number of ms between runs; leave at 0 to disable regular calls to run()
 */
detectors.add = function(detector, type, runEvery){

    if(typeof runEvery === 'number')
    {
        console.assert(runEvery > 5000, "Cannot run detector more often than once every five seconds (" + runEvery + ")");
        window.setInterval(detector.run, runEvery);
    }

    detector.onDetect = function(info){
        detectors.detect(type, info);
    };

    detector.onUndetect = function(){
        detectors.undetect(type, info);
    };

}

detectors.add(new ManualDeletionDetector(), 'manual_cookie_deletion'); // Manual cookie detection

detectors.add(new ExtensionDetector('cfhdojbkjhnklbpkdaibdccddilifddb'), 'adblockplus', 900000); // Run extension detectors every quarter of an hour
detectors.add(new ExtensionDetector('gighmmpiobklfepjocnamgkkbiglidom'), 'adblock', 900000);
detectors.add(new ExtensionDetector('mlomiejdfkolichcflejclcbmpeaniij'), 'ghostery', 900000);
detectors.add(new ExtensionDetector('miijbmhjndcihicbljlcieiajhemmdeb'), 'superblock', 900000);
detectors.add(new ExtensionDetector('mcefmojpghnaceadnghednjhbmphipkb'), 'adremover', 900000);
detectors.add(new ExtensionDetector('fdecnmmdccnkogcidionikojplkjfgie'), 'ublock', 900000);
detectors.add(new ExtensionDetector('jeoacafpbcihiomhlakheieifhpjdfeo'), 'disconnect', 900000);
detectors.add(new ExtensionDetector('bgnkhhnnamicmpeenaelnjfhikgbkllg'), 'adguard_adblocker', 900000);
detectors.add(new ExtensionDetector('bplgfejjkplajgmkcbbgaeceamceohkc'), 'baycloud_bouncer', 900000);
