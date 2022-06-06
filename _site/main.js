$( document ).ready(function() {

    const smallScreen = window.matchMedia("(max-width: 700px)");
    //Click event for toggle class of active between weeks
    $(".week").click(function () {
        if ($(this).hasClass("active")) {
            return;
        }
        else {
          $(".week").removeClass("active");
          $(this).addClass("active");
        }
      });

      //Toggle States ---------- //
      //Inital state on page load
      $('.sales-rep.forecast').hide();
      $('.sales-leader.pod').hide();
      $('.sales-leader.forecast').hide();

      $('#toggle-on').attr("checked", "checked");
      $('#toggle-on-2').attr("checked", "checked");

    
      $("#toggle-on").click(function () {

        //Sales Rep - Forecast
        if ($("#toggle-on").is(":checked") && $("#toggle-off-2").is(":checked")) {
          $('.sales-rep.forecast').show();
          $('.sales-rep.pod').hide();
          $('.sales-leader.forecast').hide();
          $('.sales-leader.pod').hide();
          $("#content").load("./content/SalesRep/Forecast/Month1/week1.html");

          $('.week').each(function( index ) {
            $(this).removeClass('active');
          });
          $('.week-one-s-r-f').addClass('active');

          if (smallScreen.matches) {
            $("#content").insertAfter('#week1SalesRepFor');
          }
        }

        // Sales Rep - POD
        if ($("#toggle-on").is(":checked") && $("#toggle-on-2").is(":checked")) {
          $('.sales-rep.forecast').hide();
          $('.sales-rep.pod').show();
          $('.sales-leader.forecast').hide();
          $('.sales-leader.pod').hide();
          $("#content").load("./content/SalesRep/POD/Month1/week1.html");

          $('.week').each(function( index ) {
            $(this).removeClass('active');
          });
          $('.week-one-s-r-p').addClass('active');

          if (smallScreen.matches) {
            $("#content").insertAfter('#week1SalesRepPod');
          }
        }

        // Sales Leader - POD
        if ($("#toggle-off").is(":checked") && $("#toggle-on-2").is(":checked")) {
          $('.sales-rep.forecast').hide();
          $('.sales-rep.pod').hide();
          $('.sales-leader.forecast').hide();
          $('.sales-leader.pod').show();
          $("#content").load("./content/SalesLeader/POD/Month1/week1.html");

          $('.week').each(function( index ) {
            $(this).removeClass('active');
          });
          $('.week-one-s-l-p').addClass('active');

          if (smallScreen.matches) {
            $("#content").insertAfter('#week1SalesLeaderPod');
          }
        }

        //Sales Leader - Forecast
        if ($("#toggle-off").is(":checked") && $("#toggle-off-2").is(":checked")) {
          $('.sales-rep.forecast').hide();
          $('.sales-rep.pod').hide();
          $('.sales-leader.forecast').show();
          $('.sales-leader.pod').hide();
          $("#content").load("./content/SalesLeader/Forecast/Month1/week1.html");

          $('.week').each(function( index ) {
            $(this).removeClass('active');
          });
          $('.week-one-s-l-f').addClass('active');

          if (smallScreen.matches) {
            $("#content").insertAfter('#week1SalesLeaderFor');
          }
        }
        
      });

      $("#toggle-off").click(function () {

       //Sales Rep - Forecast
       if ($("#toggle-on").is(":checked") && $("#toggle-off-2").is(":checked")) {
        $('.sales-rep.forecast').show();
        $('.sales-rep.pod').hide();
        $('.sales-leader.forecast').hide();
        $('.sales-leader.pod').hide();
        $("#content").load("./content/SalesRep/Forecast/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-r-f').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesRepFor');
        }
      }

      // Sales Rep - POD
      if ($("#toggle-on").is(":checked") && $("#toggle-on-2").is(":checked")) {
        $('.sales-rep.forecast').hide();
        $('.sales-rep.pod').show();
        $('.sales-leader.forecast').hide();
        $('.sales-leader.pod').hide();
        $("#content").load("./content/SalesRep/POD/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-r-p').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesRepPod');
        }
      }

      // Sales Leader - POD
      if ($("#toggle-off").is(":checked") && $("#toggle-on-2").is(":checked")) {
        $('.sales-rep.forecast').hide();
        $('.sales-rep.pod').hide();
        $('.sales-leader.forecast').hide();
        $('.sales-leader.pod').show();
        $("#content").load("./content/SalesLeader/POD/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-l-p').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesLeaderPod');
        }
      }

      //Sales Leader - Forecast
      if ($("#toggle-off").is(":checked") && $("#toggle-off-2").is(":checked")) {
        $('.sales-rep.forecast').hide();
        $('.sales-rep.pod').hide();
        $('.sales-leader.forecast').show();
        $('.sales-leader.pod').hide();
        $("#content").load("./content/SalesLeader/Forecast/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-l-f').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesLeaderFor');
        }
      }
        
      });

      $("#toggle-on-2").click(function () {
       //Sales Rep - Forecast
       if ($("#toggle-on").is(":checked") && $("#toggle-off-2").is(":checked")) {
        $('.sales-rep.forecast').show();
        $('.sales-rep.pod').hide();
        $('.sales-leader.forecast').hide();
        $('.sales-leader.pod').hide();
        $("#content").load("./content/SalesRep/Forecast/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-r-f').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesRepFor');
        }
      }

      // Sales Rep - POD
      if ($("#toggle-on").is(":checked") && $("#toggle-on-2").is(":checked")) {
        $('.sales-rep.forecast').hide();
        $('.sales-rep.pod').show();
        $('.sales-leader.forecast').hide();
        $('.sales-leader.pod').hide();
        $("#content").load("./content/SalesRep/POD/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-r-p').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesRepPod');
        }
      }

      // Sales Leader - POD
      if ($("#toggle-off").is(":checked") && $("#toggle-on-2").is(":checked")) {
        $('.sales-rep.forecast').hide();
        $('.sales-rep.pod').hide();
        $('.sales-leader.forecast').hide();
        $('.sales-leader.pod').show();
        $("#content").load("./content/SalesLeader/POD/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-l-p').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesLeaderPod');
        }
      }

      //Sales Leader - Forecast
      if ($("#toggle-off").is(":checked") && $("#toggle-off-2").is(":checked")) {
        $('.sales-rep.forecast').hide();
        $('.sales-rep.pod').hide();
        $('.sales-leader.forecast').show();
        $('.sales-leader.pod').hide();
        $("#content").load("./content/SalesLeader/Forecast/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-l-f').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesLeaderFor');
        }
      }
      });

      $("#toggle-off-2").click(function () {
       //Sales Rep - Forecast
       if ($("#toggle-on").is(":checked") && $("#toggle-off-2").is(":checked")) {
        $('.sales-rep.forecast').show();
        $('.sales-rep.pod').hide();
        $('.sales-leader.forecast').hide();
        $('.sales-leader.pod').hide();
        $("#content").load("./content/SalesRep/Forecast/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-r-f').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesRepFor');
        }
      }

      // Sales Rep - POD
      if ($("#toggle-on").is(":checked") && $("#toggle-on-2").is(":checked")) {
        $('.sales-rep.forecast').hide();
        $('.sales-rep.pod').show();
        $('.sales-leader.forecast').hide();
        $('.sales-leader.pod').hide();
        $("#content").load("./content/SalesRep/POD/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-r-p').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesRepPod');
        }
      }

      // Sales Leader - POD
      if ($("#toggle-off").is(":checked") && $("#toggle-on-2").is(":checked")) {
        $('.sales-rep.forecast').hide();
        $('.sales-rep.pod').hide();
        $('.sales-leader.forecast').hide();
        $('.sales-leader.pod').show();
        $("#content").load("./content/SalesLeader/POD/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-l-p').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesLeaderPod');
        }
      }

      //Sales Leader - Forecast
      if ($("#toggle-off").is(":checked") && $("#toggle-off-2").is(":checked")) {
        $('.sales-rep.forecast').hide();
        $('.sales-rep.pod').hide();
        $('.sales-leader.forecast').show();
        $('.sales-leader.pod').hide();
        $("#content").load("./content/SalesLeader/Forecast/Month1/week1.html");

        $('.week').each(function( index ) {
          $(this).removeClass('active');
        });
        $('.week-one-s-l-f').addClass('active');

        if (smallScreen.matches) {
          $("#content").insertAfter('#week1SalesLeaderFor');
        }
      }
      });

      //Inital State on Load - desktop
      $("#content").load("./content/SalesRep/POD/Month1/week1.html"); 
      //Inital state on load - mobile
      if (smallScreen.matches) {
        $("#content").insertAfter('#week1SalesRepPod');
      }
      

      //Sales REP - POD
      $('#week1SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month1/week1.html");
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week2SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month1/week2.html");
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week3SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month1/week3.html");
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        } 
      });

      $('#week4SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month1/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week5SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month2/week1.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week6SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month2/week2.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week7SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month2/week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week8SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month2/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week9SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month3/week1.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week10SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month3/week2.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week11SalesRepPod').on("click", function() { 
        $("#content").load("./content/SalesRep/POD/Month3/week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week12SalesRepPod').on("click", function() { 
        console.log('week 4 month 3')
        $("#content").load("./content/SalesRep/POD/Month3/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      //Sales REP - FORECAST
      $('#week1SalesRepFor').on("click", function() { 
        console.log('correct')
        $("#content").load("./content/SalesRep/Forecast/Month1/week1.html");
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        } 
      });

      $('#week2SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month1/week2.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week3SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month1/week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week4SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month1/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week5SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month2/week1.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week6SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month2/week2.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week7SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month2/week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week8SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month2/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week9SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month3/week1.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week10SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month3/week2.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week11SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month3/week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week12SalesRepFor').on("click", function() { 
        $("#content").load("./content/SalesRep/Forecast/Month3/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

       //Sales Leader - POD
       $('#week1SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month1/week1.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week2SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month1/week2.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week3SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month1/week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week4SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month1/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week5SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month2/week1.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week6SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month2/week2.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week7SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month2/week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week8SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month2/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week9SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month3/week1.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week10SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month3/week2.html");
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        } 
      });

      $('#week11SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month3/week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week12SalesLeaderPod').on("click", function() { 
        $("#content").load("./content/SalesLeader/POD/Month3/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      //Sales Leader - FORECAST
      $('#week1SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month1/week1.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week2SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month1/week2.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week3SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month1//week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week4SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month1/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week5SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month2/week1.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week6SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month2/week2.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week7SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month2/week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week8SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month2/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week9SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month3/week1.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week10SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month3/week2.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week11SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month3/week3.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

      $('#week12SalesLeaderFor').on("click", function() { 
        $("#content").load("./content/SalesLeader/Forecast/Month3/week4.html"); 
        if (smallScreen.matches) {
          $("#content").insertAfter(this);
        }
      });

});

