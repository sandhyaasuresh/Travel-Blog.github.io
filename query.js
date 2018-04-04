	$(document).ready(function(){
        $(".est_a").hide();
        $(".est_b").hide();
        
        $("#estbut1").click(function(){
          $(".est_a").hide("slow");
        });
        $(".est").on({
            mouseenter: function(){
              $(".est_b").show();
              $(".graze_a").hide();
              $(".graze_b").hide();
              $(".ochre_a").hide();
              $(".ochre_b").hide();
              $(".alch_a").hide();
              $(".alch_b").hide();
              },
              mouseleave: function(){
              $(".est_b").hide(); 
              },
              click: function(){
              $(".est_b").hide();
              $(".est_a").toggle("slow");
              }  
        });

        $(".ochre_a").hide();
        $(".ochre_b").hide();
        
        $("#ochrebut").click(function(){
          $(".ochre_a").hide("slow");
        });
        $(".ochre").on({
            mouseenter: function(){
              $(".ochre_b").show();
              $(".est_a").hide();
              $(".est_b").hide();
              $(".graze_a").hide();
              $(".graze_b").hide();
              $(".alch_a").hide();
              $(".alch_b").hide();
              },
              mouseleave: function(){
              $(".ochre_b").hide(); 
              },
              click: function(){
              $(".ochre_b").hide();
              $(".ochre_a").toggle("slow");
              }  
        });

        $(".graze_a").hide();
        $(".graze_b").hide();
        
        $("#grazebut").click(function(){
          $(".graze_a").hide("slow");
        });
        $(".graze").on({
            mouseenter: function(){
              $(".graze_b").show();
              $(".est_a").hide();
              $(".est_b").hide();
              $(".ochre_a").hide();
              $(".ochre_b").hide();
              $(".alch_a").hide();
              $(".alch_b").hide();
              },
              mouseleave: function(){
              $(".graze_b").hide(); 
              },
              click: function(){
              $(".graze_b").hide();
              $(".graze_a").toggle("slow");
              }  
        });

        $(".alch_a").hide();
        $(".alch_b").hide();
        
        $("#alchbut1").click(function(){
          $(".alch_a").hide("slow");
        });
        $(".alch").on({
            mouseenter: function(){
              $(".alch_b").show();
              $(".est_a").hide();
              $(".est_b").hide();
              $(".ochre_a").hide();
              $(".ochre_b").hide();
              $(".graze_a").hide();
              $(".graze_b").hide();
              },
              mouseleave: function(){
              $(".alch_b").hide(); 
              },
              click: function(){
              $(".alch_b").hide();
              $(".alch_a").toggle("slow");
              }  
        });


    });


$(document).ready(function(){
      $(".byron_a").hide();
      $(".byron_b").hide();
      
      $("#byronbut1").click(function(){
          $(".byron_a").hide("slow");
        });
        $(".byron").on({
            mouseenter: function(){
              $(".byron_b").show();
              $(".Magnetic_a").hide();
              $(".Magnetic_b").hide();
              $(".airline_a").hide();
              $(".airline_b").hide();
              $(".perth_a").hide();
              $(".perth_b").hide();
              },
              mouseleave: function(){
              $(".byron_b").hide(); 
              },
              click: function(){
              $(".byron_b").hide();
              $(".byron_a").toggle("slow");
              }  
        });

        $(".airline_a").hide();
        $(".airline_b").hide();
        
        $("#airlinebut").click(function(){
          $(".airline_a").hide("slow");
        });
        $(".airline").on({
            mouseenter: function(){
              $(".airline_b").show();
              $(".byron_a").hide();
              $(".byron_b").hide();
              $(".Magnetic_a").hide();
              $(".Magnetic_b").hide();
              $(".perth_a").hide();
              $(".perth_b").hide();
              },
              mouseleave: function(){
              $(".airline_b").hide(); 
              },
              click: function(){
              $(".airline_b").hide();
              $(".airline_a").toggle("slow");
              }  
        });

        $(".Magnetic_a").hide();
        $(".Magnetic_b").hide();
        
        $("#Magneticbut").click(function(){
          $(".Magnetic_a").hide("slow");
        });
        $(".Magnetic").on({
            mouseenter: function(){
              $(".Magnetic_b").show();
              $(".byron_a").hide();
              $(".byron_b").hide();
              $(".airline_a").hide();
              $(".airline_b").hide();
              $(".perth_a").hide();
              $(".perth_b").hide();
              },
              mouseleave: function(){
              $(".Magnetic_b").hide(); 
              },
              click: function(){
              $(".Magnetic_b").hide();
              $(".Magnetic_a").toggle("slow");
              }  
        });

        $(".perth_a").hide();
        $(".perth_b").hide();
        
        $("#perthbut1").click(function(){
          $(".perth_a").hide("slow");
        });
        $(".perth").on({
            mouseenter: function(){
              $(".perth_b").show();
              $(".byron_a").hide();
              $(".byron_b").hide();
              $(".airline_a").hide();
              $(".airline_b").hide();
              $(".Magnetic_a").hide();
              $(".Magnetic_b").hide();
              },
              mouseleave: function(){
              $(".perth_b").hide(); 
              },
              click: function(){
              $(".perth_b").hide();
              $(".perth_a").toggle("slow");
              }  
        });


    });