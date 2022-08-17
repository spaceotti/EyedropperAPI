document.getElementById("btn").addEventListener("click", (ev) => {
  const output = document.getElementById("result");

  if (!"EyeDropper" in window) {
    output.textContent = "Ooops. No support for the Eyedropper API";
    return;
  }

  const dropper = new EyeDropper();
  const abortController = new AbortController();
  // abortController.abort(); //cancel the eyedropper

  dropper
    .open({ signal: abortController.signal })
    .then((result) => {
      console.log(result.sRGBHex);
      output.textContent = result.sRGBHex;
      output.style.borderLeftColor = result.sRGBHex;
    })
    .catch((err) => {
      output.textContent = err;
      output.style.borderLeftColor = `transparent`;
    });
});
