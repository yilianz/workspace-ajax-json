
var A = '{ "events": [{ "location": "San Francisco, CA", "date": "May 1","map": "img/map-ca.png"},\
{"location": "Austin, TX",\
      "date": "May 15",\
      "map": "img/map-tx.png"\
    },\
    {\
      "location": "New York, NY",\
      "date": "May 30",\
      "map": "img/map-ny.png"\
    }\
  ]\
}';           // multiline -- json string


var B = JSON.parse(A);   // change to JSON object  

alert(B['events'][0]['location']);  // get the element





$.each(B, function (key, value) {
    for (var i = 0; i < value.length; i++) {
        $.each(value[i], function (l, y) {
            console.log(l);
            console.log(y);

        });

    }

});

$.getJSON("data/rates.json", function (rates) {
    $.each(rates, function (key, value) {
        console.log(key);
        console.log(value);

    });

});




