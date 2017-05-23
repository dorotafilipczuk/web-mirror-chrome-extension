/**
 * Interface for detectors
 * This is just documentation...
 */

function CMDetector(){

  /**
   * For discrete countermeasures (eg behaviours) this should be triggered each time the
   * cm is detected - for instance each time cookies are manually deleted.
   * For ongoing countermeasures, eg addon use, this should be triggered per-session, eg
   * at browser startup
   */
    this.onDetect;

    /**
     * For continuous countermeasures, eg addons, this should be triggered if a cm goes away
     * eg the addon is uninstalled.  Brwoser sessions may be long-lived, and so addon uninstallation
     * may not be detected just by relying on startup reporting.
     */
    this.onUndetect;

    /**
     * Trigger detection
     */
    this.run;

}
