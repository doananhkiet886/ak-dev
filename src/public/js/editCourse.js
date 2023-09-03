const btnEdit = document.querySelector('.btn-edit')
const editCourseForm = document.forms['editCourse']

btnEdit.onclick = async function(event) {
  const nameInput = editCourseForm.querySelector('input[name="name"]')
  const descriptionTextArea = editCourseForm.querySelector('textarea[name="description"]')
  const videoIdInput = editCourseForm.querySelector('input[name="videoId"]')
  const imageIdInput = editCourseForm.querySelector('input[name="imageId"]')
  const urlGetCourseByID = `/me/store/courses/${this.dataset.id}`

  try {
    const response = await fetch(urlGetCourseByID)
    const course = await response.json()

    nameInput.value = course.name
    descriptionTextArea.innerText = course.description
    videoIdInput.value = course.videoId
    imageIdInput.value = course.imageId
    editCourseForm.action = `/me/store/courses/edit/${this.dataset.id}?_method=PUT`
  } catch (error) {
    console.log('ERROR')
  }
}
