
module.exports = {
  load: library => {
    library.playLists = library.playLists || []
    library.api.playLists = {
      create: require('./api/playlists.create.js'),
      get: require('./api/playlists.get.js'),
      list: require('./api/playlists.list.js'),
      remove: require('./api/playlists.remove.js'),
      reorder: require('./api/playlists.reorder.js'),
      update: require('./api/playlists.update.js')
    }
    return library
  }
}
