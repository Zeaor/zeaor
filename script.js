function convertLength() {
      var inputLengthUnit = document.getElementById("inputLengthUnit").value;
      var inputLengthValue = parseFloat(document.getElementById("inputLengthValue").value);
      var resultLength = 0;

      if (inputLengthUnit === "m") {
        resultLength = inputLengthValue;
      } else if (inputLengthUnit === "cm") {
        resultLength = inputLengthValue / 100;
      } else if (inputLengthUnit === "ft") {
        resultLength = inputLengthValue * 0.3048;
      } else if (inputLengthUnit === "in") {
        resultLength = inputLengthValue * 0.0254;
      }

      document.getElementById("resultM").innerHTML = resultLength + " m";
      document.getElementById("resultCm").innerHTML = resultLength * 100 + " cm";
      document.getElementById("resultFt").innerHTML = resultLength / 0.3048 + " ft";
      document.getElementById("resultIn").innerHTML = resultLength / 0.0254 + " in";
    }

    function convertTime() {
      var inputTimeUnit = document.getElementById("inputTimeUnit").value;
      var inputTimeValue = parseFloat(document.getElementById("inputTimeValue").value);
      var resultTime = 0;

      if (inputTimeUnit === "hr") {
        resultTime = inputTimeValue;
      } else if (inputTimeUnit === "min") {
        resultTime = inputTimeValue / 60;
      } else if (inputTimeUnit === "sec") {
        resultTime = inputTimeValue / 3600;
      }

      document.getElementById("resultHr").innerHTML = resultTime + " hr";
      document.getElementById("resultMin").innerHTML = resultTime * 60 + " min";
      document.getElementById("resultSec").innerHTML = resultTime * 3600 + " sec";
    }

    document.getElementById("inputLengthValue").addEventListener("input", convertLength);
    document.getElementById("inputTimeValue").addEventListener("input", convertTime);
    document.getElementById("inputLengthUnit").addEventListener("change", convertLength);
    document.getElementById("inputTimeUnit").addEventListener("change", convertTime);
  </script>
