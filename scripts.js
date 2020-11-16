var ctx = document.getElementById("myChart").getContext('2d');


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["5 nov",	"6 nov",	"7 nov",	"8 nov",	"9 nov",	"10 nov",	"11 nov"],
        datasets: [
        {
            label: 'Online', // Name the series
            data: [5, 6, 5, 7, 25  , 6    , 15], // Specify the data values array
            fill: false,
            borderColor: '#f32167', // Add custom color border (Line)
            backgroundColor: '#f32167', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            fill: true,
            backgroundColor: '#f3216773',
            pointBackgroundColor: '#f32167'
        },
        {
            label: 'Offline', // Name the series
            data: [10, 15, 11, 16, 19, 11, 21], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            fill: true,
            backgroundColor: '#2195f33b',
            pointBackgroundColor: '#2196f3'
        },]},
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'consultations'
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'last seven days'
                }
            }]
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        legend: {
            display: true,
            position: 'right',
            align:'start',
            labels:{
                boxWidth: 11    
            }
        },
        title:{
            display: true,
            text: 'Consultation Pace through out the week'
        }
    }
});




var ctx = document.getElementById("myChart2").getContext('2d');


var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#80b6f4");
gradientStroke.addColorStop(1, "#f49080");


var myChart2 = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["5 nov 20",	"6 nov 20",	"7 nov 20",	"8 nov 20",	"9 nov 20",	"10 nov 20",	"11 nov 20"],
        
        datasets: [{
            label: 'customers', // Name the series
            data: [10, 15, 11, 16, 19, 11, 21], // Specify the data values array
            fill: false,
            lineTension: 0,    
            pointRadius: 3,
            pointHoverRadius: 5,

            borderColor:               gradientStroke,
            pointBorderColor:          gradientStroke,
            pointBackgroundColor:      gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor:     gradientStroke,
            
            //borderColor: '#008000', // Add custom color border (Line)
            //backgroundColor: '#008000', // Add custom color background (Points and Fill)
            borderWidth: 2 // Specify bar border width
        }
    
    ]},
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        scales: {
            yAxes: [{
                    
                    ticks: {
                        beginAtZero: true
                    }
            }]
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        legend: {
            display: false,
            position: 'right',
            align:'start',
            labels:{
                boxWidth: 11    
            }
        },
        title:{
            display: true,
            text: 'Customer Pace'
        }
    }
});


var ctx = document.getElementById("myChart3").getContext('2d');


var myChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["5 nov",	"6 nov",	"7 nov",	"8 nov",	"9 nov",	"10 nov",	"11 nov"],
        datasets: [
        {
            label: 'Online', // Name the series
            data: [5, 6, 5, 7, 25  , 6    , 15], // Specify the data values array
            fill: false,
            borderColor: '#f32167', // Add custom color border (Line)
            backgroundColor: '#f32167', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            
            pointBackgroundColor: '#f32167'
        },
        {
            label: 'Offline', // Name the series
            data: [10, 15, 11, 16, 19, 11, 21], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            
            pointBackgroundColor: '#2196f3'
        },]},
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'consultations'
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'last seven days'
                }
            }]
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        legend: {
            display: true,
            position: 'right',
            align:'start',
            labels:{
                boxWidth: 11    
            }
        },
        title:{
            display: true,
            text: 'Consultation Pace through out the week'
        }
    }
});


var ctx = document.getElementById("myChart0").getContext('2d');

var gradientStrokeA = ctx.createLinearGradient(0, 0, 0, 220);
gradientStrokeA.addColorStop(0, "#FF416C");
gradientStrokeA.addColorStop(1, "#FF4B2B");

var gradientStrokeB = ctx.createLinearGradient(0, 0, 0, 420);
gradientStrokeB.addColorStop(0, "#00B4DB");
gradientStrokeB.addColorStop(1, "#0083B0");


var myChart0 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Cardiology",	"Diabetology",	"General Medicine",	"Dental"],
        datasets: [
            {
                label: "occupancy",
                stack: 'Stack 0',
                backgroundColor:  gradientStrokeA,
                borderColor: '#00000000',
                data: [60, 90, 20, 60, 40, 20, 60],
                borderWidth: 5
            },
            {
                label: "vacancy",
                stack: 'Stack 0',
                backgroundColor: gradientStrokeB,
                borderColor: '#00000000',
                data: [40, 10, 80, 40, 60, 80, 40],
                borderWidth: 5
            },
           /* {
                label: "occupancy",
                stack: 'Stack 1',
                backgroundColor:  '#00d13e',
                borderColor: '#00d13e',
                data: [60, 90, 20, 60, 40, 20, 60]
            },
            {
                label: "vacancy",
                stack: 'Stack 1',
                backgroundColor: '#00d13e',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [40, 10, 80, 40, 60, 80, 40]
            }*/
        ]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        scales: {
            xAxes: [{
                stacked: true,
                
                categoryPercentage: 0.2,
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    fontSize: 10
                }
        
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    min: 0,
                    max: this.max,// Your absolute max value,

                    
                    stepSize: 50,
                    callback: function (value) {
                      return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
                    }
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
            }]
        },
       
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
        title: {
            display: true,
            text: 'Current Occupancy'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            
        },
        hover: {
            mode: 'index',
            intersect: false,
            
        },
        legend: {
            display: true,
            position: 'right',
            align:'start',
            labels:{
                boxWidth: 11    
            }
        },
        
    }
});




var ctx = document.getElementById("myChart0a").getContext('2d');



var myChart0a = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Cardiology",	"Diabetology",	"General Medicine",	"Dental"],
        datasets: [
            {
                label: "occupancy",
                stack: 'Stack 0',
                backgroundColor:  '#f32167',
                borderColor: '#00000000',
                data: [60, 90, 20, 60, 40, 20, 60],
                borderWidth: 5
            },
            {
                label: "vacancy",
                stack: 'Stack 0',
                backgroundColor: '#2196f3',
                borderColor: '#00000000',
                data: [40, 10, 80, 40, 60, 80, 40],
                borderWidth: 5
            },
            {
                label: "occupancy",
                stack: 'Stack 1',
                backgroundColor:  '#00e676',
                borderColor: '#00000000',
                data: [70, 80, 30, 50, 50, 10, 70],
                borderWidth: 5
            },
            {
                label: "vacancy",
                stack: 'Stack 1',
                backgroundColor: '#ffeb3b',
                borderColor: '#00000000',
                data: [30, 20, 70, 50, 50, 90, 30],
                borderWidth: 5
            }
        ]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height ,
        
        scales: {
            xAxes: [{
                stacked: true,
                categoryPercentage: 0.8,
                barPercentage: 0.3  ,

                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    fontSize: 10
                }
        
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    min: 0,
                    max: this.max,// Your absolute max value,

                    
                    stepSize: 25,
                    callback: function (value) {
                      return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
                    }
                }
            }]
        },
       
        
        
        title: {
            display: true,
            text: 'Current vs Probable Occupancy'
        },
        /*tooltips: {
            mode: 'index',
            intersect: false,
            
        },*/
        hover: {
            mode: 'index',
            intersect: false,
            
        },
        legend: {
            display: true,
            position: 'top',
            align:'center',
            labels:{
                boxWidth: 11    
            },
            padding: 4
        },
        
    }
});
//bar 

