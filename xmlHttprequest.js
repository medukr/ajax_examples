function get(url) {
    
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    
    request.addEventListener('load', function () {
        if (this.status === 200) {
            console.log('--->', JSON.parse(request.responseText));
        } else {
            console.log('--->', 'request error');
        }
    });

    request.addEventListener('error', function () {
       console.log('--->', 'network error');
    });
    request.send();
}

get('http://get.sparrow.in.ua/countries?token=85ba37970e24fb1017669c536535211695f5805c27ec640f2028527d573892bd');