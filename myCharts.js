
const dataBar = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12],
    datasets: []
};
const config = {
type: 'line',
data: dataBar,
options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
}
const myBarChart = new Chart(document.getElementById('myBarChart'), config);

//const ctx2 = document.getElementById('myPieChart').getContext('2d');
// const dataPie = {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [1,0,0,0,0,1],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     };
// const configPie = {
//     type: 'pie',
//     data: dataPie,
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// };
// const myPieChart = new Chart(document.getElementById('myPieChart').getContext('2d'), configPie);