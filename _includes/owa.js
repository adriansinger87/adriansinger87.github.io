// Set base URL
OWA.setSetting('baseUrl', 'http://owa.adrian-singer.de/');
// Create a tracker
OWATracker = new OWA.tracker();
OWATracker.setSiteId('24be8aff0d5864ddd8bc4ca880f7e972');
OWATracker.trackPageView();
OWATracker.trackClicks();
OWATracker.trackDomStream();