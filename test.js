module.exports = function(game, pos) {
  var bunny_rle = require("rle-rasterize")(require('bunny'));
  var voxels = require("rle-voxeljs")(bunny_rle, game, [[-20, -20, -20], [20, 20, 20]], pos);
}

