module.exports = (catalog, options) => {
  const response = catalog.getObjects(catalog.playLists, options)
  for (const playlist of response.data) {
    for (const i in playlist.items) {
      if (playlist.items[i].substring) {
        playlist.items[i] = catalog.getObject(song.filePath)
      }
    }
  }
  return response
}
