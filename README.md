rle-voxeljs
===========
Convert rle volumes to voxel.js

Usage/Installation
==================
First, install using npm:

    npm install rle-voxel
    
Then, you can just convert a volume using module.exports:

```javascript
var bunny_rle = require("rle-rasterize")(require(bunny));
require("rle-voxeljs")(voxels, bunny_rle, [[-20, -20, -20], [20, 20, 20]]);
```

If you just want to initialize your game with a narrowband level set, then it may be more direct to just wrap the classifyPoint function as a generator:

    var testPoint = require("rle-classify").point.bind(null, bunny_rle);
    var generator = function(x,y,z) { return testPoint([x,y,z]); };


The main method is the following:

`require("rle-voxeljs")(voxels, rle, bounds, start_pos)`
---------------------------------------------
The arguments to the function are as follows:

* `voxels`:  The voxeljs game object
* `rle`: A narrowband level set
* `bounds`: The bounds of the object to convert
* `start_pos`: A translation offset

Credits
=======
(c) 2013 Mikola Lysenko. BSD
