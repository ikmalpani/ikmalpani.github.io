let myChart = document.getElementById('myChart').getContext('2d');
myChart.canvas.width = 100;
myChart.canvas.height = 50;
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
	type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data:{
		labels:['Boston', 'Worcester', 'Springfield', 'Lowel', 'Cambridge', 'New Bedford'],
		datasets:[{
			label: 'Populations', 
			data:[
				656634,
				156475,
				156452,
				135445,
				145645,
				94353,
			],
			backgroundColor:[
				'green',
				'blue',
				'pink',
				'red',
				'black',
				'yellow'
			],
			borderWidth:1,
			borderColor:'#777',
			hoverBorderWidth: 3,
			hoverBorderColor: '#000'
		}]
	},
	options:{
		title:{
			display:true,
			text:'Largest cities in Massachusetts',
			fontSize: 25,
		},
		legend:{
			display:false,
			position:'right',
			labels:{
				fontColor: 'black'
			}
		},
		layout:{
			padding:{
				left:50,
				right:0,
				bottom:0,
				top:0
			}
		},
		tooltips:{
			enabled:true
		}
	}
});