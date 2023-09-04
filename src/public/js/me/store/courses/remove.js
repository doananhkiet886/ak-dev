const btnRemoves = document.querySelectorAll('.btn-remove')
const btnConfirmRemove = document.querySelector('.btn-confirm-remove')

btnRemoves.forEach(btnRemove => {
  btnRemove.onclick = function() {
    btnConfirmRemove.onclick = async () => {
      const response = await fetch(`/me/store/courses/delete/${this.dataset.id}`, {
        method: 'DELETE'
      })
      window.location.replace(response.url)
    }
  }
})