var fs = require('fs');
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

var path = "./tiles";

// Loop through all the files in the temp directory
fs.readdir(path, function (err, files) {

  files.forEach(function (file, index) {
    // Make one pass and make the file complete

    let tiles = file.slice(0, -4).split("x")
    const splat = tiles[0].split("_")
    tiles[0] = parseInt(splat[splat.length - 1]) - 1
    tiles[1] = parseInt(tiles[1]) - 1

    const fromPath = path + "/" + file, toPath = path + "/" + tiles[0] + "x" + tiles[1] + ".jpg"

    fs.rename(fromPath, toPath, function (error) {
      if (error) {
        console.error("File moving error.", error);
      } else {
        console.log("Moved file '%s' to '%s'.", fromPath, toPath);
      }
    });

  });
});
