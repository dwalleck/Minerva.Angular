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
            label: "Chrome"
        }, {
            value: 50,
            color: "#556B8D",
            highlight: "#556B8D",
            label: "IE"
        }, {
            value: 100,
            color: "#EDCE8C",
            highlight: "#EDCE8C",
            label: "Safari"
        }, {
            value: 40,
            color: "#CED1D3",
            highlight: "#1F7BB6",
            label: "Other"
        }, {
            value: 120,
            color: "#1F7BB6",
            highlight: "#1F7BB6",
            label: "Firefox"
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

    }
}());