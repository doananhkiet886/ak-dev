// [GET] /me/store
const store = (req, res) => {
  // res.json({
  //   status: true
  // })
  res.render('./courses/store')
}

module.exports = {
  store
}
