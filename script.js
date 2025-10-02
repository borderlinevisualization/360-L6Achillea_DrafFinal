(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_4124ED63_51DD_2EB8_41B6_821698441290",
 "buttonMoveRight": "this.IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1",
 "buttonRestart": "this.IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB",
 "buttonZoomOut": "this.IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740",
 "buttonPause": "this.IconButton_5C58E8AA_4BC8_BCEA_41C3_08FC210FFB53",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPlayRight": "this.IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "buttonPlayLeft": "this.IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09",
 "buttonZoomIn": "this.IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4",
 "buttonMoveUp": "this.IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B",
 "buttonMoveDown": "this.IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18",
 "class": "PanoramaPlayer",
 "buttonMoveLeft": "this.IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132",
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_AF5B532F_A2F4_A7E7_41CA_943C6947BD31",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": -87.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_AF5BA32F_A2F4_A7E7_41E2_2B57CE60BB60",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_AF5B532F_A2F4_A7E7_41CA_943C6947BD31"
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_A9247391_A2F4_A6BB_41AF_2F6D09A71DFC",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 67.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_A9244391_A2F4_A6BB_41E2_89E1DF7518EC",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_A9247391_A2F4_A6BB_41AF_2F6D09A71DFC"
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_A9696374_A2F4_A679_41E0_574A134092B3",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": -122.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_A9697374_A2F4_A679_4169_72D33D50F624",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_A9696374_A2F4_A679_41E0_574A134092B3"
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_47C8DF3F_56EF_D8BC_41CF_2C228B376918",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 20,
 "id": "panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_camera",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_47C8DF3F_56EF_D8BC_41CF_2C228B376918"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 4.25,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -73.98,
   "yaw": -8.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "BEDROOM 2",
 "id": "panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14",
 "thumbnailUrl": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_t.jpg",
 "cardboardMenu": "this.Menu_AF73A31B_A2F4_A7AF_41C8_8AD4F090FB31",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 145,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944",
   "x": 927.34,
   "angle": 180,
   "y": 1034.09,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_AC52DE83_A2D5_8E19_41E3_02F7AABD28A6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 4.25,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 4.25,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "EXTERIOR",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "LIVING ROOM",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "BEDROOM 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "KITCHEN",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "FOYER",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "MASTER BEDROOM",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "BEDROOM 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "MASTER BATHROOM",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "label": "Media",
 "id": "Menu_AF73A31B_A2F4_A7AF_41C8_8AD4F090FB31",
 "backgroundColor": "#404040",
 "opacity": 0.4,
 "rollOverBackgroundColor": "#000000",
 "class": "Menu",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "fontColor": "#FFFFFF"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -112.67,
   "yaw": 57.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "BEDROOM 1",
 "id": "panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30",
 "thumbnailUrl": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_t.jpg",
 "cardboardMenu": "this.Menu_AF73A31B_A2F4_A7AF_41C8_8AD4F090FB31",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 145,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_93B98D68_9F2F_387A_41CE_EF23613F2304",
   "x": 977.9,
   "angle": 89.12,
   "y": 1188.59,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_AC6992C5_A2D4_9619_41CA_DD4EFD980712"
 ]
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "1st Floor",
 "id": "map_93B98D68_9F2F_387A_41CE_EF23613F2304",
 "minimumZoomFactor": 1,
 "thumbnailUrl": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304_t.jpg",
 "width": 2813,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304.jpeg",
    "width": 1800,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304_lq.jpeg",
    "width": 192,
    "class": "ImageResourceLevel",
    "height": 342,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.08,
 "maximumZoomFactor": 4,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.64,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "height": 5000,
 "overlays": [
  "this.overlay_90E92370_9F25_4869_41DA_63C54CD2E54D",
  "this.overlay_90BFAA81_9F24_D8AA_41CD_782A6D584C3E",
  "this.overlay_90C56EDF_9F27_3856_41D4_F5587F63CC5D",
  "this.overlay_8F7C85D3_9F27_48AE_41D7_960DDF89A7DF"
 ]
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  "this.PanoramaPlayListItem_AF888318_A2F4_A7A9_41D8_0E7ACF7EFA04",
  "this.PanoramaPlayListItem_AF743319_A2F4_A7AB_41DB_C14432544E47",
  "this.PanoramaPlayListItem_AF754319_A2F4_A7AB_41E0_7537E553872F",
  "this.PanoramaPlayListItem_AF76831A_A2F4_A7A9_41D4_4012D51827A8",
  "this.PanoramaPlayListItem_AF77D31A_A2F4_A7A9_41C5_09ED85D81CC8",
  "this.PanoramaPlayListItem_AF77431A_A2F4_A7A9_41B5_BD2A5BBA925B",
  "this.PanoramaPlayListItem_AF76131A_A2F4_A7A9_41C6_41D4FB2F16FC",
  "this.PanoramaPlayListItem_AF77B31A_A2F4_A7A9_41D2_724D958F274D"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_A933C38B_A2F4_A6AF_41E2_E65B0FD4D86A",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 171.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_A933D38B_A2F4_A6AF_41DA_22B635DB0C20",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_A933C38B_A2F4_A6AF_41E2_E65B0FD4D86A"
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_A9708363_A2F4_A79F_41C9_105F47287736",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 106.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_A9709363_A2F4_A79F_41DB_08DDF37D1F77",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_A9708363_A2F4_A79F_41C9_105F47287736"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 4.25,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 0,
 "to": "left",
 "id": "effect_B3293793_A2EC_9E39_41DE_887C39B8DD62",
 "class": "SlideOutEffect",
 "easing": "linear"
},
{
 "duration": 0,
 "id": "effect_B32AD793_A2EC_9E39_41DD_8B16FC3843AD",
 "class": "SlideInEffect",
 "easing": "linear",
 "from": "left"
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "2nd Floor",
 "id": "map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944",
 "minimumZoomFactor": 1,
 "thumbnailUrl": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944_t.jpg",
 "width": 2813,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944.jpeg",
    "width": 1800,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944_lq.jpeg",
    "width": 192,
    "class": "ImageResourceLevel",
    "height": 342,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.08,
 "maximumZoomFactor": 4,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.64,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "height": 5000,
 "overlays": [
  "this.overlay_908567DD_9F25_C85A_41CA_93A82F6C36DB",
  "this.overlay_8F20A5EE_9F25_4876_41E1_A3963006B752",
  "this.overlay_8F920713_9F24_C9AF_418A_213EC83FB182",
  "this.overlay_8FDE0C72_9F23_F86E_41DA_03EB349D4802"
 ]
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_A97E9369_A2F4_A66B_41D2_7DC2D5AF59E8",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": -172.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_A97EE369_A2F4_A66B_41E2_01903347A946",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_A97E9369_A2F4_A66B_41D2_7DC2D5AF59E8"
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_A94F0385_A2F4_A69B_41AB_9E6BD6D2098F",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": -51.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_A94F6385_A2F4_A69B_41DA_11255FA7937F",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_A94F0385_A2F4_A69B_41AB_9E6BD6D2098F"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 7.87,
   "yaw": 88.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7484739C_7AB2_30F1_41D1_3A18102618D9"
  },
  {
   "backwardYaw": -158.44,
   "yaw": 161.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5"
  },
  {
   "backwardYaw": 57.53,
   "yaw": -112.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "LIVING ROOM",
 "id": "panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071",
 "thumbnailUrl": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_t.jpg",
 "cardboardMenu": "this.Menu_AF73A31B_A2F4_A7AF_41C8_8AD4F090FB31",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 145,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_93B98D68_9F2F_387A_41CE_EF23613F2304",
   "x": 1435.76,
   "angle": 0,
   "y": 2564.99,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_ADCD70FD_A2D4_93E9_41C8_A0DBE502997B",
  "this.overlay_ADCD10FD_A2D4_93E9_41D3_B0F90DB36DC7",
  "this.overlay_ADCDD0FD_A2D4_93E9_41E2_8751D8AF50FE",
  "this.overlay_ADCDF0FD_A2D4_93E9_41E3_F13AB90CE0DC"
 ]
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_AF6B6329_A2F4_A7EB_41CE_339D6D5F3225",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": -117.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_AF6B7329_A2F4_A7EB_41BC_65F5F54A611B",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_AF6B6329_A2F4_A7EB_41CE_339D6D5F3225"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 62.43,
   "yaw": 164.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5"
  },
  {
   "backwardYaw": 92.2,
   "yaw": -110.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "MASTER BATHROOM",
 "id": "panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A",
 "thumbnailUrl": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_t.jpg",
 "cardboardMenu": "this.Menu_AF73A31B_A2F4_A7AF_41C8_8AD4F090FB31",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 145,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944",
   "x": 1123.97,
   "angle": 178.97,
   "y": 2567.8,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_ACAB3E8E_A2D4_8E2B_41DC_63A25B9939BC",
  "this.overlay_ACAB4E8E_A2D4_8E2B_41E4_580A34B2761D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_A966736F_A2F4_A667_41D4_12FE0014E3AB",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 21.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_A966436F_A2F4_A667_41B9_8CE997A3F3ED",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_A966736F_A2F4_A667_41D4_12FE0014E3AB"
},
{
 "viewerArea": "this.MapViewer",
 "buttonZoomIn": "this.IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4",
 "movementMode": "constrained",
 "buttonZoomOut": "this.IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer"
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_AF39533B_A2F4_A7EF_41CA_B626B7CF436A",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 69.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 20,
 "id": "camera_AF39A33B_A2F4_A7EF_41E0_706751E97C04",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_AF39533B_A2F4_A7EF_41CA_B626B7CF436A"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 4.25,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "to": "top",
 "id": "effect_40715E77_50BF_2A98_41D1_DB8935A82E59",
 "class": "SlideOutEffect",
 "easing": "linear"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -110.41,
   "yaw": 92.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A"
  },
  {
   "backwardYaw": 18.46,
   "yaw": 128.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "MASTER BEDROOM",
 "id": "panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63",
 "thumbnailUrl": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_t.jpg",
 "cardboardMenu": "this.Menu_AF73A31B_A2F4_A7AF_41C8_8AD4F090FB31",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 145,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944",
   "x": 1868.34,
   "angle": 179.16,
   "y": 2205.44,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_AF5A76ED_A2D3_FFE9_4180_90BB1443F1DA",
  "this.overlay_AF5A16ED_A2D3_FFE9_41CE_CED7276C947B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_AF2F2340_A2F4_A799_41DB_C2F0461D37E0",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": -161.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_AF2F0340_A2F4_A799_41E3_FF1C77AC26CE",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_AF2F2340_A2F4_A799_41DB_C2F0461D37E0"
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_A953F37A_A2F4_A669_41DB_9E3220E62F4A",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": -18.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_A953C37A_A2F4_A669_41DD_8FFAA9CEA317",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_A953F37A_A2F4_A669_41DB_9E3220E62F4A"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 88.76,
   "yaw": 7.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "EXTERIOR",
 "id": "panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A",
 "thumbnailUrl": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_t.jpg",
 "cardboardMenu": "this.Menu_AF73A31B_A2F4_A7AF_41C8_8AD4F090FB31",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 145,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_93B98D68_9F2F_387A_41CE_EF23613F2304",
   "x": 1407.29,
   "angle": 0,
   "y": 4564.61,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_AE9FBBC6_A2D4_B61B_41C8_A29F353FEA8C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_AF497335_A2F4_A7FB_41E3_40E8E9DCE815",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": -91.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "camera_AF495335_A2F4_A7FB_41CB_3817FDC74C2F",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_AF497335_A2F4_A7FB_41E3_40E8E9DCE815"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 4.25,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 161.37,
   "yaw": -158.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071"
  },
  {
   "backwardYaw": 164.42,
   "yaw": 62.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A"
  },
  {
   "backwardYaw": 128.37,
   "yaw": 18.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63"
  },
  {
   "backwardYaw": -8.67,
   "yaw": -73.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "FOYER",
 "id": "panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5",
 "thumbnailUrl": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_t.jpg",
 "cardboardMenu": "this.Menu_AF73A31B_A2F4_A7AF_41C8_8AD4F090FB31",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 145,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944",
   "x": 845.88,
   "angle": 0,
   "y": 1890.83,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_ADEB111A_A2D5_922B_41BD_B86BFCB7B6F7",
  "this.overlay_ADEB311A_A2D5_922B_41E1_A7CD855B15AC",
  "this.overlay_AD94D11A_A2D5_922B_41CE_86827C7E59F6",
  "this.overlay_AD94C11A_A2D5_922B_41CE_80127A477F2A"
 ]
},
{
 "duration": 1000,
 "to": "top",
 "id": "effect_41141370_50BF_FA97_41C3_A342C2449FA3",
 "class": "SlideOutEffect",
 "easing": "linear"
},
{
 "items": [
  {
   "media": "this.panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 0, 1)",
   "camera": "this.panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 1, 2)",
   "camera": "this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 2, 3)",
   "camera": "this.panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7484739C_7AB2_30F1_41D1_3A18102618D9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 3, 4)",
   "camera": "this.panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 4, 5)",
   "camera": "this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 5, 6)",
   "camera": "this.panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 6, 7)",
   "camera": "this.panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 7, 0)",
   "camera": "this.panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "id": "panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 4.25,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_A946E380_A2F4_A699_41D6_1780C1F8B360",
 "timeToIdle": 3000,
 "initialPosition": {
  "hfov": 120,
  "yaw": -15.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 20,
 "id": "camera_A946F380_A2F4_A699_41E3_0F14A4750E20",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_A946E380_A2F4_A699_41D6_1780C1F8B360"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "KITCHEN",
 "id": "panorama_7484739C_7AB2_30F1_41D1_3A18102618D9",
 "thumbnailUrl": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_t.jpg",
 "cardboardMenu": "this.Menu_AF73A31B_A2F4_A7AF_41C8_8AD4F090FB31",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 145,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_t.jpg"
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_93B98D68_9F2F_387A_41CE_EF23613F2304",
   "x": 1708.23,
   "angle": 92.86,
   "y": 1449.82,
   "class": "PanoramaMapLocation"
  }
 ],
 "overlays": [
  "this.overlay_7484639C_7AB2_30F1_41AE_6649FF062BC6"
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_93B98D68_9F2F_387A_41CE_EF23613F2304",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist",
 "class": "PlayList"
},
{
 "duration": 1000,
 "to": "top",
 "id": "effect_40050340_50BC_DAF7_41B2_3FF5CFAD49DA",
 "class": "SlideOutEffect",
 "easing": "linear"
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "3vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "bold",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Helvetica",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 500,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "transparent",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 0.5,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container Denah"
 },
 "children": [
  "this.MapViewer",
  "this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C"
 ],
 "id": "Container_93CF56DC_9F23_C85A_41CF_F49472D44C0B",
 "left": "1.65%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "12.244%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "bottom": "3.06%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "height": "36.393%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container2534"
 },
 "children": [
  "this.Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047",
  "this.Image_41864BE8_50BD_E988_41D3_BF183798BC15"
 ],
 "id": "Container_5D718A0A_50AC_EA8B_41C8_17C8BA4B9974",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_5D718A0A_50AC_EA8B_41C8_17C8BA4B9974, false, 0, this.effect_40050340_50BC_DAF7_41B2_3FF5CFAD49DA, 'hideEffect', false); this.setComponentVisibility(this.Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047, false, 0, this.effect_40050340_50BC_DAF7_41B2_3FF5CFAD49DA, 'hideEffect', false); this.setComponentVisibility(this.Image_41864BE8_50BD_E988_41D3_BF183798BC15, false, 0, this.effect_40050340_50BC_DAF7_41B2_3FF5CFAD49DA, 'hideEffect', false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 23,
 "maxWidth": 35,
 "id": "IconButton_4124ED63_51DD_2EB8_41B6_821698441290",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "right": "3.02%",
 "width": 35,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_4124ED63_51DD_2EB8_41B6_821698441290.png",
 "borderSize": 0,
 "bottom": "4.04%",
 "minWidth": 1,
 "mode": "push",
 "height": 23,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "IconButton7201"
 }
},
{
 "cursor": "hand",
 "maxHeight": 1024,
 "maxWidth": 1024,
 "left": "94.39%",
 "paddingLeft": 0,
 "id": "IconButton_53A57C0F_4BCB_7BAA_41B7_D8A5A38F8DE4",
 "transparencyActive": false,
 "right": "2.52%",
 "iconURL": "skin/IconButton_53A57C0F_4BCB_7BAA_41B7_D8A5A38F8DE4.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "bottom": "13.77%",
 "top": "80.55%",
 "mode": "push",
 "minWidth": 1,
 "click": "if(!this.Container_93CF56DC_9F23_C85A_41CF_F49472D44C0B.get('visible')){ this.setComponentVisibility(this.Container_93CF56DC_9F23_C85A_41CF_F49472D44C0B, true, 0, this.effect_B32AD793_A2EC_9E39_41DD_8B16FC3843AD, 'showEffect', false) } else { this.setComponentVisibility(this.Container_93CF56DC_9F23_C85A_41CF_F49472D44C0B, false, 0, this.effect_B3293793_A2EC_9E39_41DE_887C39B8DD62, 'hideEffect', false) }; if(!this.Container_5C5B58AA_4BC8_BCEA_41BA_0E6334DE3694.get('visible')){ this.setComponentVisibility(this.Container_5C5B58AA_4BC8_BCEA_41BA_0E6334DE3694, true, 0, this.effect_B32AD793_A2EC_9E39_41DD_8B16FC3843AD, 'showEffect', false) } else { this.setComponentVisibility(this.Container_5C5B58AA_4BC8_BCEA_41BA_0E6334DE3694, false, 0, this.effect_B3293793_A2EC_9E39_41DE_887C39B8DD62, 'hideEffect', false) }",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "data": {
  "name": "IconButton18264"
 }
},
{
 "cursor": "hand",
 "maxHeight": 128,
 "maxWidth": 128,
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "left": "94.63%",
 "paddingLeft": 0,
 "id": "IconButton_5C7C0F58_4BCB_D5B6_41D2_0994130E7913",
 "transparencyActive": true,
 "right": "2.71%",
 "iconURL": "skin/IconButton_5C7C0F58_4BCB_D5B6_41D2_0994130E7913.png",
 "toolTipOpacity": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "toolTipFontSize": "3vmin",
 "toolTipFontColor": "#FFFFFF",
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "transparent",
 "toolTipTextShadowColor": "#000000",
 "toolTip": "Fullscreen",
 "verticalAlign": "middle",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "bold",
 "bottom": "8.75%",
 "top": "87.1%",
 "mode": "toggle",
 "minWidth": 1,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "shadow": false,
 "toolTipShadowOpacity": 0,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "horizontalAlign": "center",
 "toolTipFontFamily": "Helvetica",
 "propagateClick": false,
 "data": {
  "name": "IconButton1493"
 }
},
{
 "data": {
  "name": "Container Button"
 },
 "children": [
  "this.IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740",
  "this.IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB",
  "this.IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09",
  "this.IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132",
  "this.Container_5C58C8AA_4BC8_BCEA_41C8_82BAFB45EC11",
  "this.IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1",
  "this.IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25",
  "this.IconButton_5C58B8AA_4BC8_BCEA_41B4_DE2F6D9599C6",
  "this.IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4"
 ],
 "id": "Container_5C5B58AA_4BC8_BCEA_41BA_0E6334DE3694",
 "left": "0.3%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "94.88%",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "borderSize": 0,
 "top": "2.43%",
 "bottom": "41.64%",
 "contentOpaque": true,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 4,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "hidden"
},
{
 "itemThumbnailShadowColor": "#000000",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "scrollBarColor": "#FFFFFF",
 "itemThumbnailShadowHorizontalLength": 3,
 "scrollBarVisible": "rollOver",
 "right": "0.48%",
 "width": 167.05,
 "itemLabelHorizontalAlign": "center",
 "id": "ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90",
 "itemThumbnailOpacity": 1,
 "scrollBarOpacity": 0.5,
 "itemLabelFontFamily": "Arial",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "minHeight": 20,
 "itemThumbnailShadowOpacity": 0.54,
 "itemBorderRadius": 0,
 "minWidth": 20,
 "itemPaddingRight": 3,
 "height": "78.251%",
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0,
 "class": "ThumbnailList",
 "itemThumbnailBorderRadius": 50,
 "shadow": false,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "paddingRight": 20,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "playList": "this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist",
 "top": "1.27%",
 "itemThumbnailShadowBlurRadius": 8,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#FFFFFF",
 "layout": "vertical",
 "itemThumbnailHeight": 75,
 "paddingTop": 10,
 "itemThumbnailShadowVerticalLength": 3,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "borderRadius": 5,
 "gap": 10,
 "itemLabelGap": 9,
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 75,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10
},
{
 "paddingLeft": 0,
 "id": "IconButton_5C58B8AA_4BC8_BCEA_41B4_DE2F6D9599C6",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_5C58B8AA_4BC8_BCEA_41B4_DE2F6D9599C6.png",
 "minWidth": 0,
 "mode": "toggle",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_5C58B8AA_4BC8_BCEA_41B4_DE2F6D9599C6_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31994"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1",
 "transparencyActive": true,
 "width": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1.png",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1_rollover.png",
 "pressedIconURL": "skin/IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31992"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB.png",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB_rollover.png",
 "pressedIconURL": "skin/IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31985"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740",
 "transparencyActive": true,
 "width": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740.png",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740_rollover.png",
 "pressedIconURL": "skin/IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31984"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_5C58E8AA_4BC8_BCEA_41C3_08FC210FFB53",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_5C58E8AA_4BC8_BCEA_41C3_08FC210FFB53.png",
 "minWidth": 0,
 "mode": "toggle",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_5C58E8AA_4BC8_BCEA_41C3_08FC210FFB53_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31990"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25.png",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25_rollover.png",
 "pressedIconURL": "skin/IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31993"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09",
 "transparencyActive": true,
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09.png",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09_rollover.png",
 "pressedIconURL": "skin/IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31986"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4",
 "transparencyActive": true,
 "width": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4.png",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4_rollover.png",
 "pressedIconURL": "skin/IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31995"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B",
 "transparencyActive": true,
 "width": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B.png",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B_rollover.png",
 "pressedIconURL": "skin/IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31989"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18",
 "transparencyActive": true,
 "width": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18.png",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18_rollover.png",
 "pressedIconURL": "skin/IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31991"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132",
 "transparencyActive": true,
 "width": 32,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132.png",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132_rollover.png",
 "pressedIconURL": "skin/IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button31987"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_AF5B532F_A2F4_A7E7_41CA_943C6947BD31",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_A9247391_A2F4_A6BB_41AF_2F6D09A71DFC",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_A9696374_A2F4_A679_41E0_574A134092B3",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_47C8DF3F_56EF_D8BC_41CF_2C228B376918",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5, this.camera_A9709363_A2F4_A79F_41DB_08DDF37D1F77); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "FOYER"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.74,
   "image": "this.AnimatedImageResource_B2E0C830_A2DC_9277_41D3_00D13302E606",
   "pitch": -22.67,
   "yaw": -8.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC52DE83_A2D5_8E19_41E3_02F7AABD28A6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.74,
   "yaw": -8.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071, this.camera_A9244391_A2F4_A6BB_41E2_89E1DF7518EC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "LIVING ROOM"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.46,
   "image": "this.AnimatedImageResource_B2EE482F_A2DC_9269_41D5_B267D9B03B53",
   "pitch": -14.01,
   "yaw": 57.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC6992C5_A2D4_9619_41CA_DD4EFD980712",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.46,
   "yaw": 57.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.01
  }
 ]
},
{
 "map": {
  "width": 186.16,
  "x": 1342.68,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 2466.29,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 197.4,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1342.68,
  "height": 197.4,
  "y": 2466.29,
  "width": 186.16,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304_HS_0.png",
     "width": 119,
     "class": "ImageResourceLevel",
     "height": 126
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Living Room"
  }
 ],
 "id": "overlay_90E92370_9F25_4869_41DA_63C54CD2E54D",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 241.57,
  "x": 1286.5,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 4449.44,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 230.34,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1286.5,
  "height": 230.34,
  "y": 4449.44,
  "width": 241.57,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304_HS_1.png",
     "width": 154,
     "class": "ImageResourceLevel",
     "height": 147
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Exterior"
  }
 ],
 "id": "overlay_90BFAA81_9F24_D8AA_41CD_782A6D584C3E",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 304.14,
  "x": 825.83,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304_HS_2_map.gif",
     "width": 26,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1095.51,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 186.16,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 825.83,
  "height": 186.16,
  "y": 1095.51,
  "width": 304.14,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304_HS_2.png",
     "width": 194,
     "class": "ImageResourceLevel",
     "height": 119
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Bedroom"
  }
 ],
 "id": "overlay_90C56EDF_9F27_3856_41D4_F5587F63CC5D",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 214.25,
  "x": 1601.11,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 18
    }
   ]
  },
  "y": 1325.84,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 247.96,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1601.11,
  "height": 247.96,
  "y": 1325.84,
  "width": 214.25,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_93B98D68_9F2F_387A_41CE_EF23613F2304_HS_3.png",
     "width": 137,
     "class": "ImageResourceLevel",
     "height": 158
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Kitchen"
  }
 ],
 "id": "overlay_8F7C85D3_9F27_48AE_41D7_960DDF89A7DF",
 "class": "AreaHotspotMapOverlay"
},
{
 "media": "this.panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF888318_A2F4_A7A9_41D8_0E7ACF7EFA04, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "camera": "this.panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_AF888318_A2F4_A7A9_41D8_0E7ACF7EFA04",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF743319_A2F4_A7AB_41DB_C14432544E47, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "camera": "this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_AF743319_A2F4_A7AB_41DB_C14432544E47",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF754319_A2F4_A7AB_41E0_7537E553872F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "camera": "this.panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_AF754319_A2F4_A7AB_41E0_7537E553872F",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_7484739C_7AB2_30F1_41D1_3A18102618D9",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF76831A_A2F4_A7A9_41D4_4012D51827A8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "camera": "this.panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_AF76831A_A2F4_A7A9_41D4_4012D51827A8",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF77D31A_A2F4_A7A9_41C5_09ED85D81CC8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "camera": "this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_AF77D31A_A2F4_A7A9_41C5_09ED85D81CC8",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF77431A_A2F4_A7A9_41B5_BD2A5BBA925B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "camera": "this.panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_AF77431A_A2F4_A7A9_41B5_BD2A5BBA925B",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF76131A_A2F4_A7A9_41C6_41D4FB2F16FC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "camera": "this.panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_AF76131A_A2F4_A7A9_41C6_41D4FB2F16FC",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A",
 "end": "this.trigger('tourEnded')",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_AF77B31A_A2F4_A7A9_41D2_724D958F274D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 0)",
 "camera": "this.panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_AF77B31A_A2F4_A7A9_41D2_724D958F274D",
 "class": "PanoramaPlayListItem"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_A933C38B_A2F4_A6AF_41E2_E65B0FD4D86A",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_A9708363_A2F4_A79F_41C9_105F47287736",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "map": {
  "width": 197.4,
  "x": 747.18,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 20
    }
   ]
  },
  "y": 1764.04,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 253.58,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 747.18,
  "height": 253.58,
  "y": 1764.04,
  "width": 197.4,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944_HS_0.png",
     "width": 126,
     "class": "ImageResourceLevel",
     "height": 162
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Foyer"
  }
 ],
 "id": "overlay_908567DD_9F25_C85A_41CA_93A82F6C36DB",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 180.54,
  "x": 837.07,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 943.82,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 180.54,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 837.07,
  "height": 180.54,
  "y": 943.82,
  "width": 180.54,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944_HS_1.png",
     "width": 115,
     "class": "ImageResourceLevel",
     "height": 115
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Bedroom"
  }
 ],
 "id": "overlay_8F20A5EE_9F25_4876_41E1_A3963006B752",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 309.76,
  "x": 1713.46,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944_HS_2_map.gif",
     "width": 25,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 2106.74,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 197.4,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1713.46,
  "height": 197.4,
  "y": 2106.74,
  "width": 309.76,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944_HS_2.png",
     "width": 198,
     "class": "ImageResourceLevel",
     "height": 126
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Master Bedroom"
  }
 ],
 "id": "overlay_8F920713_9F24_C9AF_418A_213EC83FB182",
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 191.78,
  "x": 1028.08,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 2466.29,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 203.02,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1028.08,
  "height": 203.02,
  "y": 2466.29,
  "width": 191.78,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_94E7D264_9F2F_486A_41D9_DE9D5CCAF944_HS_3.png",
     "width": 122,
     "class": "ImageResourceLevel",
     "height": 129
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Master Bathroom"
  }
 ],
 "id": "overlay_8FDE0C72_9F23_F86E_41DA_03EB349D4802",
 "class": "AreaHotspotMapOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_A97E9369_A2F4_A66B_41D2_7DC2D5AF59E8",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_A94F0385_A2F4_A69B_41AB_9E6BD6D2098F",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A, this.camera_A97EE369_A2F4_A66B_41E2_01903347A946); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "TO EXTERIOR"
  }
 ],
 "data": {
  "label": "Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.07,
   "image": "this.AnimatedImageResource_AC7333F7_A2DC_B5F9_41E3_2EEFC1340013",
   "pitch": -44.4,
   "yaw": 88.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADCD70FD_A2D4_93E9_41C8_A0DBE502997B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.07,
   "yaw": 88.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30, this.camera_A9697374_A2F4_A679_4169_72D33D50F624); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "BEDROOM"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.03,
   "image": "this.AnimatedImageResource_AC7373F7_A2DC_B5F8_41E2_60E3EA9DC80D",
   "pitch": -3.33,
   "yaw": -112.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADCD10FD_A2D4_93E9_41D3_B0F90DB36DC7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.03,
   "yaw": -112.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KITCHEN"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.52,
   "image": "this.AnimatedImageResource_AC73B3F8_A2DC_B5F7_41D0_D325C23BCA9D",
   "pitch": -4.08,
   "yaw": -85.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADCDD0FD_A2D4_93E9_41E2_8751D8AF50FE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.52,
   "yaw": -85.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5, this.camera_A966436F_A2F4_A667_41B9_8CE997A3F3ED); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "TO 2ND FLOOR"
  }
 ],
 "data": {
  "label": "Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.21,
   "image": "this.AnimatedImageResource_AC73F3F8_A2DC_B5F7_41DB_B5A7DFE6FC6F",
   "pitch": 23.43,
   "yaw": 161.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADCDF0FD_A2D4_93E9_41E3_F13AB90CE0DC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.21,
   "yaw": 161.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 23.43
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_AF6B6329_A2F4_A7EB_41CE_339D6D5F3225",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63, this.camera_AF5BA32F_A2F4_A7E7_41E2_2B57CE60BB60); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "MASTER BEDROOM"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.36,
   "image": "this.AnimatedImageResource_B2E0B830_A2DC_9277_41D0_8B194F008BA3",
   "pitch": -26.32,
   "yaw": -110.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ACAB3E8E_A2D4_8E2B_41DC_63A25B9939BC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.36,
   "yaw": -110.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5, this.camera_AF6B7329_A2F4_A7EB_41BC_65F5F54A611B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "FOYER"
  }
 ],
 "data": {
  "label": "Arrow 03 Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.54,
   "image": "this.AnimatedImageResource_B2E17830_A2DC_9277_41CF_EF5114E19154",
   "pitch": -3.45,
   "yaw": 164.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_ACAB4E8E_A2D4_8E2B_41E4_580A34B2761D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.54,
   "yaw": 164.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.45
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_A966736F_A2F4_A667_41D4_12FE0014E3AB",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MapViewer",
 "left": "0%",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "right": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 500,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "bottom": "0%",
 "progressBarOpacity": 1,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "MapViewer"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_AF39533B_A2F4_A7EF_41CA_B626B7CF436A",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A, this.camera_AF39A33B_A2F4_A7EF_41E0_706751E97C04); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "MASTER BATHROOM"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.72,
   "image": "this.AnimatedImageResource_B2EF8830_A2DC_9277_41E4_0E9BA058337D",
   "pitch": -30.71,
   "yaw": 92.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AF5A76ED_A2D3_FFE9_4180_90BB1443F1DA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.72,
   "yaw": 92.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5, this.camera_AF2F0340_A2F4_A799_41E3_FF1C77AC26CE); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "FOYER"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.16,
   "image": "this.AnimatedImageResource_B2E00830_A2DC_9277_41DD_E9D5F4359447",
   "pitch": -26.06,
   "yaw": 128.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AF5A16ED_A2D3_FFE9_41CE_CED7276C947B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.16,
   "yaw": 128.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.06
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_AF2F2340_A2F4_A799_41DB_C2F0461D37E0",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_A953F37A_A2F4_A669_41DB_9E3220E62F4A",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071, this.camera_AF495335_A2F4_A7FB_41CB_3817FDC74C2F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "TO INTERIOR"
  }
 ],
 "data": {
  "label": "Arrow 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.49,
   "image": "this.AnimatedImageResource_B2EC782E_A2DC_926B_41D6_D7BDB8B25A6A",
   "pitch": -0.44,
   "yaw": 7.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE9FBBC6_A2D4_B61B_41C8_A29F353FEA8C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.49,
   "yaw": 7.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.44
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_AF497335_A2F4_A7FB_41E3_40E8E9DCE815",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071, this.camera_A953C37A_A2F4_A669_41DD_8FFAA9CEA317); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "TO 1ST FLOOR"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.42,
   "image": "this.AnimatedImageResource_B2EEC830_A2DC_9277_41E1_51F4041005AC",
   "pitch": -47.21,
   "yaw": -158.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_ADEB111A_A2D5_922B_41BD_B86BFCB7B6F7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.42,
   "yaw": -158.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14, this.camera_A933D38B_A2F4_A6AF_41DA_22B635DB0C20); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "BEDROOM"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.45,
   "image": "this.AnimatedImageResource_B2EEA830_A2DC_9277_41A7_A5688DD86AA2",
   "pitch": -39.63,
   "yaw": -73.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADEB311A_A2D5_922B_41E1_A7CD855B15AC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.45,
   "yaw": -73.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63, this.camera_A94F6385_A2F4_A69B_41DA_11255FA7937F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "MASTER BEDROOM"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.75,
   "image": "this.AnimatedImageResource_B2EF6830_A2DC_9277_41C1_178D4434C343",
   "pitch": -37.62,
   "yaw": 18.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AD94D11A_A2D5_922B_41CE_86827C7E59F6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.75,
   "yaw": 18.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A, this.camera_A946F380_A2F4_A699_41E3_0F14A4750E20); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "MASTER BATHROOM"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.37,
   "image": "this.AnimatedImageResource_B2EFC830_A2DC_9277_419B_B2C71C8CEDAC",
   "pitch": -40.13,
   "yaw": 62.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AD94C11A_A2D5_922B_41CE_80127A477F2A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.37,
   "yaw": 62.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.13
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_A946E380_A2F4_A699_41D6_1780C1F8B360",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 4.25,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 4.25,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "LIVING ROOM"
  }
 ],
 "data": {
  "label": "Circle 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.22,
   "image": "this.AnimatedImageResource_752EA92C_7AB2_31D1_41DB_2875A9565786",
   "pitch": -6.97,
   "yaw": 104.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7484639C_7AB2_30F1_41AE_6649FF062BC6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.22,
   "yaw": 104.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.97
  }
 ]
},
{
 "arrowBeforeLabel": false,
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowSpread": 1,
 "id": "DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C",
 "popUpBackgroundColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingLeft": 5,
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "paddingRight": 5,
 "right": "0%",
 "width": "100.026%",
 "backgroundColorDirection": "vertical",
 "popUpBackgroundOpacity": 0.9,
 "selectedPopUpBackgroundColor": "#333333",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "data": {
  "name": "DropDown1204"
 },
 "minHeight": 20,
 "playList": "this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist",
 "selectedPopUpFontColor": "#FFFFFF",
 "minWidth": 200,
 "popUpGap": 0,
 "backgroundColor": [
  "#666666"
 ],
 "top": "0%",
 "height": "5.376%",
 "popUpShadowBlurRadius": 6,
 "popUpShadow": false,
 "paddingTop": 0,
 "class": "DropDown",
 "backgroundOpacity": 0.9,
 "paddingBottom": 0,
 "borderRadius": 4,
 "gap": 0,
 "popUpShadowOpacity": 0,
 "popUpShadowColor": "#000000",
 "shadow": false,
 "textDecoration": "none",
 "popUpBorderRadius": 0,
 "fontSize": 14,
 "popUpFontColor": "#000000",
 "propagateClick": false,
 "fontWeight": "normal",
 "arrowColor": "#FFFFFF"
},
{
 "maxHeight": 236,
 "maxWidth": 960,
 "left": "17.85%",
 "paddingLeft": 0,
 "id": "Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047",
 "right": "24.25%",
 "paddingRight": 0,
 "borderSize": 0,
 "url": "skin/Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "bottom": "41.97%",
 "top": "32.24%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_5D718A0A_50AC_EA8B_41C8_17C8BA4B9974, false, 0, this.effect_40715E77_50BF_2A98_41D1_DB8935A82E59, 'hideEffect', false); this.setComponentVisibility(this.Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047, false, 0, this.effect_40715E77_50BF_2A98_41D1_DB8935A82E59, 'hideEffect', false); this.setComponentVisibility(this.Image_41864BE8_50BD_E988_41D3_BF183798BC15, false, 0, this.effect_40715E77_50BF_2A98_41D1_DB8935A82E59, 'hideEffect', false)",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image2636"
 }
},
{
 "maxHeight": 821,
 "maxWidth": 1460,
 "id": "Image_41864BE8_50BD_E988_41D3_BF183798BC15",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "32.81%",
 "width": "32.027%",
 "url": "skin/Image_41864BE8_50BD_E988_41D3_BF183798BC15.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "verticalAlign": "middle",
 "bottom": "23.06%",
 "minWidth": 1,
 "height": "19.891%",
 "click": "this.setComponentVisibility(this.Container_5D718A0A_50AC_EA8B_41C8_17C8BA4B9974, false, 0, this.effect_41141370_50BF_FA97_41C3_A342C2449FA3, 'hideEffect', false); this.setComponentVisibility(this.Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047, false, 0, this.effect_41141370_50BF_FA97_41C3_A342C2449FA3, 'hideEffect', false); this.setComponentVisibility(this.Image_41864BE8_50BD_E988_41D3_BF183798BC15, false, 0, this.effect_41141370_50BF_FA97_41C3_A342C2449FA3, 'hideEffect', false)",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image12123"
 }
},
{
 "data": {
  "name": "Container31988"
 },
 "children": [
  "this.IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B",
  "this.IconButton_5C58E8AA_4BC8_BCEA_41C3_08FC210FFB53",
  "this.IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_5C58C8AA_4BC8_BCEA_41C8_82BAFB45EC11",
 "scrollBarVisible": "rollOver",
 "width": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 4,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_AC52EE83_A2D5_8E19_41D0_3BF513FC2D14_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2E0C830_A2DC_9277_41D3_00D13302E606",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_AC69A2C5_A2D4_9619_41C0_DD7E0FC13E30_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2EE482F_A2DC_9269_41D5_B267D9B03B53",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_AC7333F7_A2DC_B5F9_41E3_2EEFC1340013",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC7373F7_A2DC_B5F8_41E2_60E3EA9DC80D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_AC73B3F8_A2DC_B5F7_41D0_D325C23BCA9D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_ADCD50FD_A2D4_93E9_41E4_49F674BC0071_0_HS_3_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_AC73F3F8_A2DC_B5F7_41DB_B5A7DFE6FC6F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2E0B830_A2DC_9277_41D0_8B194F008BA3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_ACAB1E8E_A2D4_8E2B_41A9_37F139FBB50A_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 960
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2E17830_A2DC_9277_41CF_EF5114E19154",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2EF8830_A2DC_9277_41E4_0E9BA058337D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_AF5A46EC_A2D3_FFEF_41D1_2AFD7FDA4D63_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2E00830_A2DC_9277_41DD_E9D5F4359447",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_AE9F0BC5_A2D4_B619_41D0_5D68C588955A_1_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_B2EC782E_A2DC_926B_41D6_D7BDB8B25A6A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2EEC830_A2DC_9277_41E1_51F4041005AC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2EEA830_A2DC_9277_41A7_A5688DD86AA2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2EF6830_A2DC_9277_41C1_178D4434C343",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_ADEB711A_A2D5_922B_41DD_9B5CFC9B43E5_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2EFC830_A2DC_9277_419B_B2C71C8CEDAC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_7484739C_7AB2_30F1_41D1_3A18102618D9_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_752EA92C_7AB2_31D1_41DB_2875A9565786",
 "class": "AnimatedImageResource",
 "frameDuration": 41
}],
 "start": "this.init(); this.syncPlaylists([this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist,this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist,this.mainPlayList]); this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_5C7C0F58_4BCB_D5B6_41D2_0994130E7913].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player15048"
 },
 "children": [
  "this.MainViewer",
  "this.Container_93CF56DC_9F23_C85A_41CF_F49472D44C0B",
  "this.Container_5D718A0A_50AC_EA8B_41C8_17C8BA4B9974",
  "this.IconButton_4124ED63_51DD_2EB8_41B6_821698441290",
  "this.IconButton_53A57C0F_4BCB_7BAA_41B7_D8A5A38F8DE4",
  "this.IconButton_5C7C0F58_4BCB_D5B6_41D2_0994130E7913",
  "this.Container_5C5B58AA_4BC8_BCEA_41BA_0E6334DE3694",
  "this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.69,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "minHeight": 20,
 "buttonToggleFullscreen": "this.IconButton_5C7C0F58_4BCB_D5B6_41D2_0994130E7913",
 "scripts": {
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "buttonToggleMute": "this.IconButton_5C58B8AA_4BC8_BCEA_41B4_DE2F6D9599C6",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
