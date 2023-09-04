(() => {
  const btnRestoreBySelectElement = document.querySelector('.btn-restore-by-select')
  
  if (btnRestoreBySelectElement) {
    btnRestoreBySelectElement.onclick = async function() {
      const checkedElements = document.querySelectorAll('input[name="check"]:checked')
      let ids = Array.from(checkedElements).map(checkedElement => {
        return checkedElement.dataset.id
      })
      
      try {
        const response = await fetch('/me/trash/courses/restore-by-select', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ids)
        })
        window.location.replace(response.url)
      } catch (error) {
        console.log('ERROR RESTORE')
      }
    }
  }
})()