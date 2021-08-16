module.exports = (library, options) => {
  const items = JSON.parse(options.items)
  for (const id of items) {
    const playList = library.getObject(id)
    if (!playList) {
      throw new Error('invalid-id')
    }
    playList.name = options.name
    if (playList.type === 'smart') {
      playList.rules = options.rules
      playList.conjunction = options.conjunction
    } else {
      if (options.items) {
        const items = options.items.split(',')
        for (const id of items) {
          const items = library.getObject(id)
          if (!items) {
            throw new Error('invalid-id')
          }
          playList.items.push(items.filePath)
        }
      } else if (options.queue) {
        const queue = library.getObject(options.queue)
        if (!queue) {
          throw new Error('invalid-queue')
        }
        for (const items of queue) {
          playList.items.push(items.filePath)
        }
      }
    }
  }
}
