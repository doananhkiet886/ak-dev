const btnRestore = document.querySelector('.btn-restore')

if (btnRestore) {
  btnRestore.onclick = async function() {
    try {
      const response = await fetch(`/me/trash/courses/restore/${this.dataset.id}`, {
        method: 'POST'
      })
      window.location.replace(response.url)
    } catch (error) {
      console.log('ERROR FORCE')
    }
  }
}