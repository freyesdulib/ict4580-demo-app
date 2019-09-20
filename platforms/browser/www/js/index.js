/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.onBatteryStatus();
        app.getDeviceLocation();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    onBatteryStatus: function () { 
       // MacOS and Android only
        navigator.getBattery().then(function(battery) {

            document.getElementById('battery-percentage').innerHTML = Math.floor(battery.level * 100) + '% remaining';
            battery.onlevelchange = function() {
              document.getElementById('battery-percentage').innerHTML = Math.floor(this.level * 100) + '% remaining';
            };
          });
     },
     getDeviceLocation: function () {
        console.log('device location');
        function onSuccess (position) {
            
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            
            document.getElementById('lat').innerHTML = lat;
            document.getElementById('long').innerHTML = long;
        }

        function onError (error) {
            console.log(error.message);
            document.getElementById('message').innerHTML = 'Geolocation error: ' + error.message;
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError, {maximumAge: 0, timeout: 60000, enableHighAccuracy: true});
        // navigator.geolocation.getCurrentPosition(success, error);
     }
};
