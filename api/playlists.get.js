module.exports = (catalog, options) => {
  const playList = catalog.getObject(options.id)
  if (!playList) {
    throw new Error('invalid-id')
  }
  return playList
}
