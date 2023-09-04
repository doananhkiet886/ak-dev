(() => {
  const inputSearchElement = document.querySelector('.dashboard .input-search')
  const btnSearchElement = document.querySelector('.dashboard .btn-search')
  const urlParams = new URLSearchParams(window.location.search)
  let searchValue = urlParams.get('search')

  // when searched, update the value of inputSearchElement and enable btnSearch
  if (searchValue) {
    inputSearchElement.value = searchValue
    btnSearchElement.classList.remove('disabled')
  }

  // disable btnSearch when empty input
  inputSearchElement.oninput = function() {
    let isEmptyInput = !this.value
    if (isEmptyInput) {
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