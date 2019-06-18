const KEY = '77476733e7c59096a735c01f4690225e';
function getCurrenciesForToday(){
    fetch(`http://data.fixer.io/api/latest?access_key=${KEY}`)
    .then(function(response) {
        return response.json();
    })
     .then(function(data){
        drawCurrenciesForToday(data);
     })
    
    }
getCurrenciesForToday();


// desenarea graficului

function drawCurrenciesForToday( currencies ){

    console.log (currencies);
    var ctx = document.getElementById('myCurrencies')
    var latestChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys (currencies.rates).slice(0,15),
            datasets:[
                {
                    label: "Currencies for today",
                    data: Object.values(currencies.rates).slice(0,15),
                },
            ]
        },
        options: {}
    });
}

