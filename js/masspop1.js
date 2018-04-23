let myChart1 = document.getElementById('myChart1').getContext('2d');
myChart1.canvas.width = 100;
myChart1.canvas.height = 50;
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart1 = new Chart(myChart1, {
	type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
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
			display:true,
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