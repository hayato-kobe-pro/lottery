function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  function setInputValue(inputId, value) {
    const inputElement = document.getElementById(inputId);
    inputElement.value = value;
  }
  
  function setRandomAlphanumericToInput() {
    const paramName = 'randomAlphanumeric';
    const inputId = 'input-58';
    const paramValue = getQueryParam(paramName);
    setInputValue(inputId, paramValue);
  }
  window.addEventListener("load", () => {
    setRandomAlphanumericToInput();
    console.log("初回起動")
  });