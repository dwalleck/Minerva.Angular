(function () {
    "use strict";

    angular
        .module('minerva')
        .controller('IssuesSummaryCtrl',
                     ['$scope', IssuesSummaryCtrl])

    function IssuesSummaryCtrl($scope) {

        // Chart.js Data
        $scope.data = [{
            value: 300,
            color: "#1ABC9C",
            highlight: "#1ABC9C",
            label: "Critical"
        }, {
            value: 50,
            color: "#556B8D",
            highlight: "#556B8D",
            label: "High"
        }, {
            value: 100,
            color: "#EDCE8C",
            highlight: "#EDCE8C",
            label: "Normal"
        }, {
            value: 40,
            color: "#CED1D3",
            highlight: "#1F7BB6",
            label: "Low"
        }];

        // Chart.js Options
        $scope.options = {

            // Sets the chart to be responsive
            responsive: true,

            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke: true,

            //String - The colour of each segment stroke
            segmentStrokeColor: '#fff',

            //Number - The width of each segment stroke
            segmentStrokeWidth: 2,

            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout: 50, // This is 0 for Pie charts

            //Number - Amount of animation steps
            animationSteps: 100,

            //String - Animation easing effect
            animationEasing: 'easeOutBounce',

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate: true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale: true,

            //String - A legend template
            legendTemplate: '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'

        };

        // Chart.js Data
        $scope.lineData = {
            labels: ['3/4/2015', '3/11/2015', '3/18/2015', '3/25/2015', '4/1/2015', '4/8/2015', '4/15/2015'],
            datasets: [{
                label: 'Critical',
                fillColor: 'rgba(26,188,156,0.5)',
                strokeColor: 'rgba(26,188,156,1)',
                pointColor: 'rgba(220,220,220,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }, {
                label: 'High',
                fillColor: 'rgba(31,123,182,0.5)',
                strokeColor: 'rgba(31,123,182,1)',
                pointColor: 'rgba(151,187,205,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        };

        // Chart.js Options
        $scope.lineOptions = {

            // Sets the chart to be responsive
            responsive: true,

            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,

            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - Whether the line is curved between points
            bezierCurve: true,

            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.4,

            //Boolean - Whether to show a dot for each point
            pointDot: true,

            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,

            // Function - on animation progress
            onAnimationProgress: function () { },

            // Function - on animation complete
            onAnimationComplete: function () { },

            //String - A legend template
            legendTemplate: '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        };

    }
}());