var classify = require("rle-classify");

//Converts a narrowband level set into a voxel.js volume
function convertToVoxelJS(volume, voxels, bounds, startPos) {
  var lo = bounds[0], hi = bounds[1];
  for(var k=lo[2]; k<hi[2]; ++k) {
    for(var j=lo[1]; j<hi[1]; ++j) {
      for(var i=lo[0]; i<hi[0]; ++i) {
        var point = [i, j, k];
        var val = classify.point(volume, point);
        if (val === 0) {
          continue;
        }
        if (startPos) {
          point = [
            startPos[0] + point[0],
            startPos[1] + point[1],
            startPos[2] + point[2]
          ];
        }
        voxels.setBlock(point, val);
      }
    }
  }
}

module.exports = convertToVoxelJS;