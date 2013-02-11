rle-voxeljs
===========
Convert rle volumes to voxel.js

Usage/Installation
==================
First, install using npm:

    npm install rle-voxel
    
Then, you can just convert a volume using module.exports:

    var bunny_rle = require("rle-rasterize")(require(bunny));
    require("rle-voxeljs")(voxels, bunny_rle, [[-20, -20, -20], [20, 20, 20]]);

The main method is the following:

`require("rle-voxeljs")(voxels, rle, bounds)`
---------------------------------------------
The arguments to the function are as follows:

* `voxels`:  The voxeljs volume object
* `rle`: A narrowband level set
* `bounds`: The bounds of the object to convert

Credits
=======
(c) 2013 Mikola Lysenko. BSD
