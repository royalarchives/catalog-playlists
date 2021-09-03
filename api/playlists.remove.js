module.exports = (catalog, options) => {
  const ids = options.id.split(',')
  for (const id of ids) {
    const playList = catalog.getObject(id)
    if (!playList) {
      throw new Error('invalid-id')
    }
    catalog.playLists.splice(catalog.playLists.indexOf(playList), 1)
  }
}
