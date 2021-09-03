module.exports = (catalog, options) => {
  const playList = {
    id: `playlist_${catalog.playLists.length + 1}`,
    name: options.name,
    type: options.type === 'smart' ? 'smart' : 'normal'
  }
  if (playList.type === 'normal') {
    playList.items = []
    if (options.items) {
      const items = options.items.split(',')
      for (const id of items) {
        const items = catalog.getObject(id)
        if (!items) {
          throw new Error('invalid-id')
        }
        playList.items.push(items.filePath)
      }
    } else if (options.queue) {
      const queue = catalog.getObject(options.queue)
      if (!queue) {
        throw new Error('invalid-queue')
      }
      for (const items of queue) {
        playList.items.push(items.filePath)
      }
    }
  } else {
    playList.rules = options.rules
    playList.conjunction = options.conjunction
  }
  catalog.playLists.push(playList)
  catalog.indexArray([playList])
  return playList
}
