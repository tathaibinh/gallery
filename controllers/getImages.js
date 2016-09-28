var images = [
  {
    "id" : 2759196673,
    "title" : "Sea the light",
    "src" : "http://i58.photobucket.com/albums/g259/doctoryou/light%20and%20sound/sea-the-light.jpg",
  },
  {
    "id" : 2759196675,
    "title" : "Sunflower",
    "src" : "http://i329.photobucket.com/albums/l370/stumbledupon/sunflower1.jpg",
  },
  {
    "id" : 2759196672,
    "title" : "Nature 2 by sigug",
    "src" : "http://i97.photobucket.com/albums/l235/cyberxn/Wallpaper___Nature_2_by_sigug.jpg",
  },
  {
    "id" : 2759196670,
    "title" : "Daisy Wallpaper by vinyyli",
    "src" : "http://i783.photobucket.com/albums/yy114/the_girl_me/Daisy_Wallpaper_by_vinyyli.jpg",
  },
]

exports.index = function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ images }, null, 4))
}