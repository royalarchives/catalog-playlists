module.exports = (library, options) => {
  const response = library.getObjects(library.playLists, options)
  for (const playlist of response.data) {
    for (const i in playlist.items) {
      if (playlist.items[i].substring) {
        playlist.items[i] = library.getObject(song.filePath)
      }
    }
  }
  return response
}
