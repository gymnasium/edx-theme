/// File:         Gymnasium.js
/// Description:  library containing helper functions used on Gymnasium
/// Author:       @mbifulco

function Gymnasium(){}

Gymnasium.prototype.setBackgroundColorOfElementFromImage = function (element, image)
{
  var canvas= document.createElement('canvas');
  var myImg = document.createElement('img');

  $(image).each(function(i,imgObj){
    myImg.src = imgObj.src;

    $(myImg).one('load',function(){

      var context = canvas.getContext('2d');
      context.drawImage(myImg, 0, 0);

      data = context.getImageData(1, 1, 1, 1).data;

      var r = data[0];
      var g = data[1];
      var b = data[2];
      var a = data[3];

      $(element).css('background-color','rgba(' + r + ',' + g + ',' + b + ',' + a + ')');
    });
  })
};

///get a URL parameter passed in with HTTP GET
///NOTE: this function is not case sensitive
Gymnasium.prototype.getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0].toLowerCase() === sParam.toLowerCase()) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

Gymnasium.prototype.injectFBTrackingPixel = function(){
  var trackingPix = $('<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1074612282557779&ev=PageView&noscript=1" /></noscript>');
  $('body').append(trackingPix);
  fbq('init', '1074612282557779');
  fbq('track', "PageView");
};

Gymnasium.prototype.LoadJobsForMarket = function(selected_market, limit, page, callback)
{

  //limit is the number of listings to return.  Default is 5.
  limit = typeof limit == 'undefined' ? 5 : limit ;

  //page is for pagination, by default we return page 0.
  page = typeof page == 'undefined' ? 0 : page ;

  var markets = [{
    name:"Atlanta",
    id: 23,
    coords: {
      latitude: 33.748995,
      longitude: -84.387982
    }
    },
    {
      name:"Austin",
      id: 60,
      coords: {
        latitude: 30.267153,
        longitude: -97.743061
      }
    },
    {
      name:"Baltimore",
      id: 46,
      coords: {
        latitude: 39.290385,
        longitude: -76.612189
      }
    },
    {
      name:"Boise",
      id: 102,
      coords: {
        latitude: 43.618710,
        longitude: -116.214607
      }
    },
    {
      name:"Boston",
      id: 10,
      coords: {
        latitude: 42.360082,
        longitude: -71.058880
      }
    },
    {
      name:"Charlotte",
      id: 61,
      coords: {
        latitude: 35.227087,
        longitude: -80.843127
      }
    },
    {
      name:"Chicago",
      id: 14,
      coords: {
        latitude: 41.878114,
        longitude: -87.629798
      }
    },
    {
      name:"Connecticut",
      id: 34,
      coords: {
        latitude: 41.763711,
        longitude: -72.685093
      }
    },
    {
      name:"Dallas",
      id: 22,
      coords: {
        latitude: 32.776664,
        longitude: -96.796988
      }
    },
    {
      name:"Denver",
      id: 27,
      coords: {
        latitude: 39.739236,
        longitude: -104.990251
      }
    },
    {
      name:"Detroit",
      id: 24,
      coords: {
        latitude: 42.331427,
        longitude: -83.045754
      }
    },
    {
      name:"Houston",
      id: 826,
      coords: {
        latitude: 29.760427,
        longitude: -95.369803
      }
    },
    {
      name:"Indianapolis",
      id: 58,
      coords: {
        latitude: 39.768403,
        longitude: -86.158068
      }
    },
    {
      name:"Los Angeles",
      id: 13,
      coords: {
        latitude: 34.052234,
        longitude: -118.243685
      }
    },
    {
      name:"Miami",
      id: 33,
      coords: {
        latitude: 25.761680,
        longitude: -80.191790
      }
    },
    {
      name:"Minneapolis",
      id: 20,
      coords: {
        latitude: 44.977753,
        longitude: -93.265011
      }
    },
    {
      name:"Moline",
      id: 807,
      coords: {
        latitude: 41.506700,
        longitude: -90.515134
      }
    },
    {
      name:"New Jersey",
      id: 30,
      coords: {
        latitude: 40.660118,
        longitude: -74.128876
      }
    },
    {
      name:"New York City",
      id: 11,
      coords: {
        latitude: 40.712784,
        longitude: -74.005941
      }
    },
    {
      name:"Northern Virginia",
      id: 51,
      coords: {
        latitude: 38.804836,
        longitude: -77.046921
      }
    },
    {
      name:"Ohio",
      id: 32,
      coords: {
        latitude: 40.417287,
        longitude: -82.907123
      }
    },
    {
      name:"Orange County",
      id: 19,
      coords: {
        latitude: 33.717471,
        longitude: -117.831143
      }
    },
    {
      name:"Orlando",
      id: 72,
      coords: {
        latitude: 28.538335,
        longitude: -81.379236
      }
    },
    {
      name:"Philadelphia",
      id: 18,
      coords: {
        latitude: 39.952584,
        longitude: -75.165222
      }
    },
    {
      name:"Phoenix",
      id: 31,
      coords: {
        latitude: 33.448377,
        longitude: -112.074037
      }
    },
    {
      name:"Portland, OR",
      id: 41,
      coords: {
        latitude: 45.523062,
        longitude: -122.676482
      }
    },
    {
      name:"Raleigh/Durham",
      id: 803,
      coords: {
        latitude: 35.779590,
        longitude: -78.638179
      }
    },
    {
      name:"Rhode Island",
      id: 73,
      coords: {
        latitude: 41.823989,
        longitude: -71.412834
      }
    },
    {
      name:"Richmond",
      id: 78,
      coords: {
        latitude: 37.540725,
        longitude: -77.436048
      }
    },
    {
      name:"San Diego",
      id: 16,
      coords: {
        latitude: 32.715738,
        longitude: -117.161084
      }
    },
    {
      name:"San Francisco",
      id: 12,
      coords: {
        latitude: 37.774929,
        longitude: -122.419416
      }
    },
    {
      name:"Seattle",
      id: 17,
      coords: {
        latitude: 47.606209,
        longitude: -122.332071
      }
    },
    {
      name:"Silicon Valley",
      id: 15,
      coords: {
        latitude: 37.441883,
        longitude: -122.143019
      }
    },
    {
      name:"St. Louis",
      id: 37,
      coords: {
        latitude: 38.627003,
        longitude: -90.199404
      }
    },
    {
      name:"Tampa",
      id: 68,
      coords: {
        latitude: 27.950575,
        longitude: -82.457178
      }
    },
    {
      name:"Washington, DC",
      id: 25,
      coords: {
        latitude: 38.907192,
        longitude: -77.036871
      }
    },
    {
      name:"Wisconsin",
      id: 881,
      coords: {
        latitude: 43.784440,
        longitude: -88.787868
      }
    },
    {
      name:"Toronto",
      id: 40,
      coords: {
        latitude: 43.653226,
        longitude: -79.383184
      }
    },
    {
      name:"Vancouver",
      id: 47,
      coords: {
        latitude: 49.282729,
        longitude: -123.120738
      }
    },
    {
      name:"Amsterdam",
      id: 43,
      coords: {
        latitude: 52.370216,
        longitude: 4.895168
      }
    },
    {
      name:"London",
      id: 29,
      coords: {
        latitude: 51.507351,
        longitude: -0.127758
      }
    },
    {
      name:"Paris",
      id: 35,
      coords: {
        latitude: 48.856614,
        longitude: 2.352222
      }
    },
    {
      name:"Melbourne",
      id: 36,
      coords: {
        latitude: -37.816279,
        longitude: 144.964246
      }
    },
    {
      name:"Sydney",
      id: 39,
      coords: {
        latitude: -33.868820,
        longitude: 151.209296
      }
    },
    {
      name:"Fukuoka",
      id: 92,
      coords: {
        latitude: 33.590355,
        longitude: 130.401716
      }
    },
    {
      name:"Nagoya",
      id: 79,
      coords: {
        latitude: 35.181446,
        longitude: 136.906398
      }
    },
    {
      name:"Osaka",
      id: 64,
      coords: {
        latitude: 34.693738,
        longitude: 135.502165
      }
    },
    {
      name:"Tokyo",
      id: 44,
      coords: {
        latitude: 35.709026,
        longitude: 139.731992
      }
    }];

    var getMarketFromGeoLocation = function(position)
    {
      // compare lat and long to known markets
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var shortest_distance = distanceBetweenPoints(position, markets[0]);
      var selected_market = markets[0];

      //console.log("Geolocation says: (" + position.coords.latitude + "," + position.coords.longitude + ")");

      //find cartesian distance between this and all markets
      for(i = 0; i < markets.length; i++)
      {
        var d = distanceBetweenPoints(position, markets[i]);

        //console.log("distance to " + markets[i].name + ": (" + markets[i].coords.latitude + "," + markets[i].coords.longitude + ") is: " + d);

        if (d < shortest_distance)
        {
          shortest_distance = d;
          selected_market = markets[i];
        }

      }

      // return nearest market's Name (ie. "Chicago")
      return selected_market;
    };

    //return the distance between two points on the map
    var distanceBetweenPoints = function (position1, position2)
    {
      var distance;

      // set the lat and long coordinates on a 360 degree
      // scale, so that positions near 0 and 180 deg in
      // either direction wrap around correctly when
      // calculating distance.
      var lat1 = (position1.coords.latitude + 180) % 360;
      var lat2 = (position2.coords.latitude + 180 ) % 360;

      var long1 = (position1.coords.longitude + 180) % 360;
      var long2 = (position2.coords.longitude + 180) % 360;

      //cartesian distance formula in 2-dimensions
      distance = Math.sqrt(
        Math.pow((lat2 - lat1),2) +
        Math.pow((long2 - long1),2)
      );

      return distance;
    };

    var queryJobsForMarket = function(market)
    {

      var url = "https://aquent.com/api/content/render/false/type/jsonp/callback/Gymnasium.myCustomCallback/query/+contentType:AquentJob%20+AquentJob.isPosted:true%20+languageId:1%20+deleted:false%20+working:true" +
                "%20+AquentJob.locationId:" + market +
                "/orderby/AquentJob.postedDate%20desc" +
                "/limit/" + limit +
                "/offset/" + page;
      $.ajax(
        {
          url: url,
          type: "POST",
          contentType: "application/json",
          dataType: "jsonp",
        });
    }

    var displayJobsForGeoLocation = function(position)
    {
      var market = getMarketFromGeoLocation(position);
      queryJobsForMarket(market.id);
    }

    // get user's Market name (ie. "Chicago")
    // 0. Is User is logged in, skip geolocation and use their market
    var market = "";

    if (typeof selected_market == 'undefined')
    {
      if (navigator.geolocation) {
        // 1. Geolocation is enabled - use this as location
        navigator.geolocation.getCurrentPosition(displayJobsForGeoLocation);
        return;
      } else {
        // 2. Geolocation not enabled - pick default behavior
        market = 10; //boston
      }
    }
    else
    {
      market=selected_market;
    }
    queryJobsForMarket(market);
}

Gymnasium.prototype.myCustomCallback = function(response)
{
  var list = $("#find-jobs-job-list");
  var market_label = $('#find-jobs-market-name');

  var jobs = response.contentlets;

  //remove anything in the list right now
  $(list).empty();

  for (var i = 0; i < jobs.length; i ++)
  {
    var utm_info = "?utm_source=thegymnasium.com&utm_medium=web&utm_campaign=homepagejobs";

    var li = '<li class="row">';
    li += '<a href="https://aquent.com/find-work/' + jobs[i].jobId + utm_info + '">';
    li += '<div class="job-post">';
    li += '<b class="job-title col-xs-8">' + jobs[i].title + '</b>';
    li += '<em class="job-market col-xs-4 text-right"> ' + jobs[i].marketId + '</em>';
    li += '</div>';
    li += '</a>';
    li += '</li>';
    $(list).append(li);
  }
}

Gymnasium.prototype.RecordCourseEnrollment = function(firstName, lastName, emailAddress, courseId, callback)
{
  var data = {
    first_name:       firstName,
    last_name:        lastName,
    email:            emailAddress,
    course:           courseId,
    utm_campaign:     courseId + " - Enrollment",
    carrot_type:      "Gymnasium Enrollment",
    carrot_topic:     "GYM-" + courseId,
    PROC:             "AWUISubmitExternalLead",

  };
  Gymnasium.RecordCloudwallRecord(data, callback);

};

Gymnasium.prototype.RecordExamGrade = function(email, courseId, grade, callback)
{
  var data = {
    leadDestination:  "cw-rc",
    email:            email,
    score:            grade,
    course_id:        courseId,
    utm_campaign:     courseId + " - Grade"
  };
};

Gymnasium.prototype.RecordRegistration = function(emailAddress, firstName, lastName, cityId, callback)
{
  var data = {
    first_name:       firstName,
    last_name:        lastName,
    email:            emailAddress,
    location:         cityId,
    utm_campaign:     "Registration",
    carrot_type:      "Gymnasium Registration",
    carrot_topic:     "GYM REG",
    PROC:             "AWUISubmitExternalLead"
  };

  return Gymnasium.RecordCloudwallRecord(data, callback);
};

Gymnasium.prototype.RecordCloudwallRecord = function(jsonData, callback)
{
  jsonData.utm_source = "gymnasium.com";
  jsonData.utm_medium = "web";
  jsonData.utm_content = "not-provided";
  jsonData.utm_term = "not-provided";
  jsonData.agent_email = "tmashburn@aquent.com";
  jsonData.agent_id = "1694600";
  jsonData.agent_name = "TALENT LEAD NURTURING";
  jsonData.carrot = "thegymnasium.com";
  jsonData.subdomain = CLOUDWALL_ENV;
  jsonData.language = "en_US";
  jsonData.medium = "1009";
  jsonData.referring_site = "thegymnasium.com";
  jsonData.status = "Talent";
  jsonData.referer = "thegymnasium.com";


  $.ajax("https://aquent.com/application/gymnasium-lead.htm",
    {
      contentType: "application/json",
      dataType: "jsonp",
      data: jsonData
    })
    .done(function(event)
    {
      //console.log("Success!\n", event);
    })
    .fail(function(event, textStatus, errorThrown)
    {
      //console.log("Failure:\n", textStatus, "\n", errorThrown);
    })
    .always(function(e){
      //console.log("always:\n", e);
      if (callback)
      {
        callback();
      }
    });
}

<!-- Facebook Pixel Code -->
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','//connect.facebook.net/en_US/fbevents.js');
<!-- End Facebook Pixel Code -->

var Gymnasium = new Gymnasium();
