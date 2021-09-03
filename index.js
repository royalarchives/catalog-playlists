
module.exports = {
  load: catalog => {
    catalog.playLists = catalog.playLists || []
    catalog.api.playLists = {
      create: require('./api/playlists.create.js'),
      get: require('./api/playlists.get.js'),
      list: require('./api/playlists.list.js'),
      remove: require('./api/playlists.remove.js'),
      reorder: require('./api/playlists.reorder.js'),
      update: require('./api/playlists.update.js')
    }
    return catalog
  }
}
