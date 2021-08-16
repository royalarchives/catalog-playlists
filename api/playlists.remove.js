module.exports = (library, options) => {
  const ids = options.id.split(',')
  for (const id of ids) {
    const playList = library.getObject(id)
    if (!playList) {
      throw new Error('invalid-id')
    }
    library.playLists.splice(library.playLists.indexOf(playList), 1)
  }
}
