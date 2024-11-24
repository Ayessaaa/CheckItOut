window.onload = function () {
  var rfidInput = document.getElementById("rfid_input");
  var noRFID = document.getElementById("no_rfid");
  var withRFID = document.getElementById("with_rfid");

  var scanButton = document.getElementById("scan_button");
  scanButton.addEventListener("click", function () {
    scanning();
  });

  function scanning() {
    rfidInput.focus();
    document.getElementById("scan_text").innerHTML = "SCANNING ...";
  }

  document.addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
      var rfidNumber = document.getElementById("rfid_input").value;
      noRFID.classList.add("hidden");
      withRFID.classList.remove("hidden");
      document.getElementById("scan_text").innerHTML = "SCAN LIBRARY CARD";
    }
  });
};
