// National College of Ireland
// Module: Web design and client scripting
// Author:
// Daniel Gonzalez, student number: 21111383
// Erik Raúl Vargas Bocanegra, student number: 21131660

//setup table and values
window.onload=function(){
var data = {
  labels: ["Aug 30", "Sep 30", "Oct 30", "Nov 30", "Dec 30"],
  datasets: [{
    label: "Total of transactions (Thousands)",
    backgroundColor: "rgba(255,99,132,0.2)",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 2,

    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: [0.389117785, 1553.789788, 3548.421127, 3895.163093, 4253.281240],
  },]
};
//set up visualization options
var option = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        fontStyle: 'italic'
      }
    },{
    display: true,
      gridLines: {display: false,color: 'transparent'},
      ticks: {display: false},
      scaleLabel: {
        display: true,
        labelString: "Total Value Deposited",
        fontStyle: 'bold',
        fontSize: 12
      }
    }]
  }
};
//create chart on page
var myLineChart = new Chart.Line('myChart', {
data: data,
options: option,
});
}
