particlesJS('hoge',{
  "particles":{
 

      "number":{
        "value":80, 
        "density":{
          "enable":true, 
          "value_area":200 
        }
      },
      "shape":{
        "type":"circle", 
        "stroke":{
          "width":0, 
          "color":"#ffcc00" 
        },
        
        "polygon": {
          "nb_sides": 5 
        },
        
        "image": {
          "src": "images/hoge.png",
          "width": 100,
          "height": 100
        }
      },
      "color":{
        "value":"#004d25" 
      },
      "opacity":{
        "value":1, 
        "random":false, 
        "anim":{
          "enable":false, 
          "speed":100, 
          "opacity_min":0.1, 
          "sync":false 
        }
      },
      "size":{
        "value":2, 
        "random":true, 
        "anim":{
          "enable":false, 
          "speed":40, 
          "size_min":0.1, 
          "sync":false 
        }
      },



      "line_linked":{
        "enable":true, 
        "distance":150, 
        "color":"#00a968", 
        "opacity":0.4, 
        "width":1 
      },



      "move":{
        "speed":5, 
        "straight":false, 
        "direction":"none", 
        "out_mode":"out" 
      }


    },
 
    "interactivity":{
      "detect_on":"canvas",
      "events":{


        "onhover":{
          "enable":true, 
          "mode":"repulse" 
        },



        "onclick":{
          "enable":true, 
          "mode":"push" 
        },


      },
 
      "modes":{


        "grab":{
          "distance":10, 
          "line_linked":{
            "opacity":1 
          }
        },



        "repulse":{
          "distance":40 
        },


      }
    },
    "retina_detect":true, 
    "resize":true 
  }
);

