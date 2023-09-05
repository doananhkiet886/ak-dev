const sortMiddleware = (req, res, next) => {
  res.locals.sort = {
    enabled: false,
    type: 'default'
  }

  let isExistSortKey = Object.prototype.hasOwnProperty.call(req.query, '_sort')
  if (isExistSortKey) {
    Object.assign(res.locals.sort, {
      enabled: true,
      type: req.query.type,
      column: req.query.column
    })
  }

  next()
}

module.exports = sortMiddleware