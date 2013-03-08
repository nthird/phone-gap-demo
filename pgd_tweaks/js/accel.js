(function($) {
 Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
  
    // Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);
  
    // Cordova is ready
    function onDeviceReady() {
      navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    }
  
    // onSuccess: Get a snapshot of the current acceleration
    function onSuccess(acceleration) {
      document.getElementById("accelx").innerHTML = "X: " + acceleration.x;
      document.getElementById("accely").innerHTML = "Y: " + acceleration.y;
      document.getElementById("accelz").innerHTML = "Z: " + acceleration.z;
      setTimeout(navigator.accelerometer.getCurrentAcceleration(onSuccess, onError), 2000);
    }
  
    // onError: Failed to get the acceleration
    function onError() {
      alert('onError!');
    }
  
  }
 };
})(jQuery);