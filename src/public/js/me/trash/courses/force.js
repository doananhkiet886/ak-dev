const btnDeletes = document.querySelectorAll('.btn-delete')
const btnConfirmDelete = document.querySelector('.btn-confirm-delete')

btnDeletes.forEach(btnDelete => {
  btnDelete.onclick = function() {
    btnConfirmDelete.onclick = async () => {
      try {
        const response = await fetch(`/me/trash/courses/force/${this.dataset.id}`, {
          method: 'DELETE'
        })
        window.location.replace(response.url)
      } catch (error) {
        console.log('ERROR DELETE')
      }
    }
  }
})
