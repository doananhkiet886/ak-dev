const checkAllElement = document.querySelector('.checkAll')
const checkElements = document.querySelectorAll('input[name="check"]')
const btnRemoveBySelect = document.querySelector('.btn-remove-by-selection')

// check all
checkAllElement.onclick = () => {
  let isChecked = checkAllElement.checked

  if (isChecked) {
    btnRemoveBySelect.classList.remove('disabled')
  } else {
    btnRemoveBySelect.classList.add('disabled')
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
      btnRemoveBySelect.classList.remove('disabled')
    } else {
      btnRemoveBySelect.classList.add('disabled')
    }

    let isCheckFull = checkedElements.length === checkElements.length
    checkAllElement.checked = isCheckFull
  }
})

