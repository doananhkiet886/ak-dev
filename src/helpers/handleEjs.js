const makeSafeString = require('~/utils/makeSafeString')

module.exports = {
  sortable: (field, sort) => {
    const icons = {
      default: 'fa-solid fa-sort',
      asc: 'fa-solid fa-arrow-down-short-wide',
      desc: 'fa-solid fa-arrow-down-wide-short'
    }
    const nextTypes = {
      default: 'asc',
      asc: 'desc',
      desc: 'default'
    }
    const icon = icons[sort.type]
    const nextType = nextTypes[sort.type]

    if (nextType === 'default') {
      const href = makeSafeString('?')
      return `
      <a class="text-light ms-3" href="${href}">
      <i class="${icon}"></i>
      </a>
      `
    }

    const href = makeSafeString(`?_sort&column=${field}&type=${nextType}`)
    return `
      <a class="text-light ms-3" href="${href}">
        <i class="${icon}"></i>
      </a>
    `
  }
}