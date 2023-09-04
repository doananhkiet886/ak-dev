(() => {
  const btnConfirmForceBySelectElement = document.querySelector('.btn-confirm-force-by-select')

  btnConfirmForceBySelectElement.onclick = async () => {
    const checkedElements = document.querySelectorAll('input[name="check"]:checked')
    let ids = Array.from(checkedElements).map(checkedElement => {
      return checkedElement.dataset.id
    })

    try {
      const response = await fetch('/me/store/courses/force-by-select', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ids)
      })
      window.location.replace(response.url)
    } catch (error) {
      console.log('ERROR REMOVE')
    }
  }
})()