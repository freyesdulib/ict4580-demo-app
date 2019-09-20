var battery_status = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        console.log('test!');
        window.addEventListener('batterystatus', onBatteryStatus, false); 
    },
    onBatteryStatus: function (info) { 
        console.log("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged);
        alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged); 
     }
};
