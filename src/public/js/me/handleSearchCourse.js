(() => {
  const inputSearchElement = document.querySelector('.dashboard .input-search')
  const btnSearchElement = document.querySelector('.dashboard .btn-search')
  const urlParams = new URLSearchParams(window.location.search)
  let searchedValue = urlParams.get('search')

  // when searched, update the value of inputSearchElement and enable btnSearch
  if (searchedValue) {
    inputSearchElement.value = searchedValue
    btnSearchElement.classList.remove('disabled')
  } else {
    btnSearchElement.classList.add('disabled')
  }

  // disable btnSearch when empty input and searched yet
  // otherwise enable btnSearch
  inputSearchElement.oninput = function() {
    let isEmptyInput = !this.value
    if (isEmptyInput && !searchedValue) {
      btnSearchElement.classList.add('disabled')
      return
    }
    btnSearchElement.classList.remove('disabled')
  }

  // get the search value put in the URL PARAMS of <a> tag
  btnSearchElement.onclick = function() {
    btnSearchElement.href = `${btnSearchElement.href}?search=${inputSearchElement.value}`
  }
})()