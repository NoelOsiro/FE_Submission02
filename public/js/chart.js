//Init
let sales_over_time_week = JSON.parse(localStorage.getItem('dashboard')).sales_over_time_week;
let sales_over_time_year = JSON.parse(localStorage.getItem('dashboard')).sales_over_time_year;
let chartArea = document.getElementById('myChart');
let forecast_chart = null;
let t = document.getElementById("chartHeader");
let toggleInput = document.getElementById('checkb');
let values1Arr = [];
let values2Arr = [];
const labels1 = ['Today', 'Yesterday', 'Day 3', 'Day 4', 'Day 5', 'Day 6',];
const labels2 = ['This month', 'Last Month', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'];
const values1 = Object.values(sales_over_time_week).map((value) => (values1Arr.push(Number(value.total))));
const values2 = Object.values(sales_over_time_year).map((value) => (values2Arr.push(Number(value.total))));


//config
const getChart = (labels, values) => {
    const data = {
        labels: labels,
        datasets: [{
            label: 'Revenue',
            backgroundColor: 'rgb(255 136 0)',
            borderColor: 'rgb(255, 99, 132)',
            data: values,
        }]
    };
    const config = {
        type: 'bar',
        data: data,
        options: {}
    };
    return config;
}


t.innerHTML = "Revenue (Last 7 days)";
const config = getChart(labels1, values1)
forecast_chart = new Chart(chartArea, config);

function ButtonToggle() {
    if (toggleInput.checked == true) {
        t.innerHTML = "Revenue (Last 12 months)";
        const config = getChart(labels2, values2)
        if (forecast_chart!=null){
            forecast_chart.destroy()
        }
        forecast_chart = new Chart(chartArea, config);
    }
}



