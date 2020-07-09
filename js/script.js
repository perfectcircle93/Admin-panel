function toggleMenu(visible) {
  document.querySelector('.section_sidebar').classList.toggle('open', visible);
  document.querySelector('.main').classList.add('sidebar-close');
  
}
  
document.querySelector('.close-sidebar').addEventListener('click', function (e) {
// console.log('click: ', e);
  e.preventDefault();
  toggleMenu();
});
  
function toggleMobileMenu(visible) {
  document.querySelector('.section_sidebar').classList.toggle('open', visible);
  document.querySelector('.main').classList.add('sidebar-close');
  
}
  
document.querySelector('.mobile-bars').addEventListener('click', function (e) {
  console.log('click: ', e);
  e.preventDefault();
  toggleMobileMenu();
});
  
// chart.js
  
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      data: [230, 350, 400, 270, 540, 300, 490, 390, 510, 110],
      backgroundColor:'#80BFCA',
    // yAxisID: 'y-axis-1',
    }, {
      label: 'FTD',
      data: [130, 250, 520, 170, 440, 330, 410, 110, 410, 210],
      backgroundColor:'#FF9A38',
    // yAxisID: 'y-axis-1',
    },
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});