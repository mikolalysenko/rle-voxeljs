var classify = require("rle-classify");

//Converts a narrowband level set into a voxel.js volume
function convertToVoxelJS(volume, voxels, bounds, startPos) {
  var lo = bounds[0]
    , hi = bounds[1]
    , point = [0,0,0]
    , shift = startPos || [0,0,0]
  for(var k=lo[2]; k<hi[2]; ++k) {
    point[2] = k + shift[2]
    for(var j=lo[1]; j<hi[1]; ++j) {
      point[1] = j + shift[1]
      for(var i=lo[0]; i<hi[0]; ++i) {
        point[0] = i + shift[0]
        var val = classify.point(volume, point);
        if (val === 0) {
          continue;
        }
        voxels.setBlock(point, val);
      }
    }
  }
}

module.exports = convertToVoxelJS;