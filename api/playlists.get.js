module.exports = (library, options) => {
  const playList = library.getObject(options.id)
  if (!playList) {
    throw new Error('invalid-id')
  }
  return playList
}
