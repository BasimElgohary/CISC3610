new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Brooklyn", "Queens", "Manhattan", "The Bronx", "Staten Island"],
        datasets: [{
            label: "Population (2020 Census)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [2736074, 2405464, 1694251, 1472654, 495747]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'NYC Borough Populations (2020) - Chart by Basim Elgohary'
        }
    }
});

new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
        labels: [
            "Under $10,000", "$10,000–$19,999", "$20,000–$29,999", "$30,000–$39,999", "$40,000–$49,999",
            "$50,000–$74,999", "$75,000–$99,999", "$100,000–$149,999", "$150,000–$199,999", "$200,000 and up"
        ],
        datasets: [{
            label: "Percentage of NYC Households",
            backgroundColor: "#3e95cd",
            data: [8, 7, 8, 7, 6, 12, 11, 17, 10, 14]
        }]
    },
    options: {
        title: {
            display: true,
            text: "NYC Household Income Distribution - Chart by Basim Elgohary"
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value) {
                        return value + '%';
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Percent of Households'
                }
            }]
        }
    }
});