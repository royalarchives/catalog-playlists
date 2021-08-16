module.exports = (library, options) => {
  const playList = library.getObject(options.id)
  if (!playList) {
    throw new Error('invalid-id')
  } else if (playList.type !== 'normal') {
    throw new Error('invalid-id')
  }
  playList.items = []
  const items = options.items.split(',')
  for (const id of items) {
    const items = library.getObject(id)
    if (!items) {
      throw new Error('invalid-id')
    }
    playList.items.push(items.filePath)
  }
  return playList
}
