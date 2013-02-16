var classify = require("rle-classify");

//Converts a narrowband level set into a voxel.js volume

function convertToVoxelJS(volume, voxels, bounds) {
  var lo = bounds[0], hi = bounds[1];
  for(var k=lo[2]; k<hi[2]; ++k) {
    for(var j=lo[1]; j<hi[1]; ++j) {
      for(var i=lo[0]; i<hi[0]; ++i) {
        voxels.setBlock(i, j, k, classify.point(volume, [i,j,k]));
      }
    }
  }
}

module.exports = convertToVoxelJS;