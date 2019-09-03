function httpGet(url) {
    return new Promise(function (resolve, reject) {

        const request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.addEventListener('load', function () {
            if (this.status < 400) {
                resolve(this);
            } else {
                reject('request error ' + this.statusText)
            }
        });

        request.addEventListener("error", function () {
            reject('network error ' + this.statusText);
        });

        request.send();
    })
}

httpGet('http://get.sparrow.in.ua/countries?token=85ba37970e24fb1017669c536535211695f5805c27ec640f2028527d573892bd_')
    .then(function (response) {
        console.log('--->', response)
    }).catch(function (error) {
    console.log('--->', error);
});
