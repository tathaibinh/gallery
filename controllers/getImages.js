var images = [
  {
    "id" : 2759196673,
    "title" : "I should buy a boat",
    "src" : "http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg",
  },
  {
    "id" : 2759196675,
    "title" : "Bridge",
    "src" : "http://www.planwallpaper.com/static/images/wallpaper-photos-61.jpg",
  },
  {
    "id" : 2759196672,
    "title" : "Butterfly",
    "src" : "http://www.planwallpaper.com/static/images/butterfly-wallpaper.jpeg",
  },
  {
    "id" : 2759196670,
    "title" : "Galaxy",
    "src" : "http://all4desktop.com/data_images/wallpapers/out/565483.jpg",
  },
]

exports.index = function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ images }, null, 4))
}
