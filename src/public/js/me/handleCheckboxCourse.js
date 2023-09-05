(() => {
  const checkAllElement = document.querySelector('.checkAll')
  const checkElements = document.querySelectorAll('input[name="check"]')
  const btnBySelects = document.querySelectorAll('.btn-by-select')

  btnBySelects.removeClass = function(className = '') {
    this.forEach(btnBySelect => {
      btnBySelect.classList.remove(className)
    })
  }

  btnBySelects.addClass = function(className = '') {
    this.forEach(btnBySelect => {
      btnBySelect.classList.add(className)
    })
  }

  // check all
  checkAllElement.onclick = () => {
    let isChecked = checkAllElement.checked

    if (isChecked) {
      btnBySelects.removeClass('disabled')
    } else {
      btnBySelects.addClass('disabled')
    }

    checkElements.forEach(checkElement => {
      checkElement.checked = isChecked
    })
  }

  // checkAll is checked when number of checked elements = total number of check elements
  checkElements.forEach(checkElement => {
    checkElement.onclick = () => {
      const checkedElements = document.querySelectorAll('input[name="check"]:checked')
      const hasChecked = checkedElements.length !== 0

      if (hasChecked) {
        btnBySelects.removeClass('disabled')
      } else {
        btnBySelects.addClass('disabled')
      }

      let isCheckFull = checkedElements.length === checkElements.length
      checkAllElement.checked = isCheckFull
    }
  })
})()

