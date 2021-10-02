type="text/javascript https://www.gstatic.com/charts/loader.js";
     type="text/javascript";
      google.charts.load('current', {
        'packages':['geochart'],
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Total cases'],
          ['United States', 44443405],
          ['India',     33791061],
          ['Brazil',  21445651],
          ['United Kingdom', 7841625],
          ['Russia',    7535548],
          ['Turkey', 7182943],
          ['France', 7018367],
          ['Iran', 5601565],
          ['Argentina', 5258466],
          ['Spain', 4961128],
          ['Colombia', 4959144],
          ['Italy', 4675758], 
          ['Germany', 4249003],
          ['Indonesia', 4216728],
          ['Mexico', 3671611],
          ['Poland',2908432],
          ['South Africa', 2904307],
          ['Philippines', 2565487],
          ['Ukraine',  2447222],
          ['Malaysia', 2257584]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
   
    
        $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        })


         type="text/javascript https://www.gstatic.com/charts/loader.js";
        type="text/javascript";

            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);
      
            function drawChart() {
      
              var data = google.visualization.arrayToDataTable([
                ['State', 'Today covid cases'],
                ['Kerala',     15914],
                ['Maharastra',  3063],
                ['Mizoram',  1170],
                ['Tamil Nadu', 1612],
                ['Andra Pradesh', 1010]
              ]);
      
              var options = {
                title: 'Covid-19 Updates'
              };
      
              var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      
              chart.draw(data, options);
            }

            $(function () {
              $('[data-toggle="tooltip"]').tooltip()
              })
          
    