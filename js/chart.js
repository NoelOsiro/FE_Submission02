let sales_over_time_week = JSON.parse(localStorage.getItem('dashboard')).sales_over_time_week;
let sales_over_time_year = JSON.parse(localStorage.getItem('dashboard')).sales_over_time_year;
let chartArea = document.getElementById('myChart');
let t = document.getElementById("chartHeader");
let toggleInput = document.getElementById('checkb');


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

function ButtonToggle() {
    toggleInput.checked?toggleInput.checked==false:toggleInput.checked==true;
    console.log(toggleInput.checked)
    if (toggleInput.checked == true) {
        chartArea.destroy()
        t.innerHTML = "Revenue (Last 12 months)";
        let values = [];
        Object.values(sales_over_time_year).map((value) => (
            values.push(Number(value.total))
        ));
        const labels = [
            'This month',
            'Last Month',
            'Month 3',
            'Month 4',
            'Month 5',
            'Month 6',
            'Month 7',
            'Month 8',
            'Month 9',
            'Month 10',
            'Month 11',
            'Month 12',
        ];
        const config = getChart(labels, values)
        myChart = new Chart(
            chartArea,
            config
        );
    }else{
        t.innerHTML = "Revenue (Last 7 days)";
        let values = [];
        Object.values(sales_over_time_week).map((value) => (
            values.push(Number(value.total))
        ));
        const labels = [
            'Today',
            'Yesterday',
            'Month 3',
            'Month 4',
            'Month 5',
            'Month 6',
    
        ];
        const config = getChart(labels, values)
        myChart = new Chart(
            chartArea,
            config
        );
    }
}



