function updateTextAfterDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

updateTextAfterDelay()
  .then((message) => {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = message;
  })
  .catch((error) => {
    console.error(error);
  });
