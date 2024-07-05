window.onload = () => {
  /* 
    The getBattery method provides information about the system's battery.
    ... returns a battery promise
  */
  let batteryIsCharging = false;
  navigator.getBattery().then((battery) => {
    batteryIsCharging = battery.charging;
    if (batteryIsCharging) console.log("Battery is charging");
    battery.onlevelchange = (event) => {
      // is fired when the battery level property is updated.
      console.log(event);
    };
    battery.onchargingchange = (event) => {
      // is fired when the battery charging property is updated.
      console.log(event);
    };
  });
};
