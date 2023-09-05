const makeSafeString = require('~/utils/makeSafeString')

module.exports = {
  sortable: (field, sort, length = 1) => {
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
    let icon, nextType, href
    const isHidden = !length

    if (isHidden) {
      return ''
    }

    // Fixed the bug that the total icon
    // changed simultaneously in sort
    if (field === sort.column) {
      icon = icons[sort.type]
      nextType = nextTypes[sort.type]
    } else {
      icon = icons['default']
      nextType = nextTypes['default']
    }

    if (nextType === 'default') {
      href = makeSafeString('?')
      return `
        <a class="text-light ms-3" href="${href}">
        <i class="${icon}"></i>
        </a>
      `
    }
    href = makeSafeString(`?_sort&column=${field}&type=${nextType}`)
    return `
      <a class="text-light ms-3" href="${href}">
        <i class="${icon}"></i>
      </a>
    `
  }
}