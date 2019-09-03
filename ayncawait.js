async function get(url) {

    let result;

    let promise = await fetch(url)
        .then(function (data) {
            return data.json();
        }).then(function (data) {
            result = data;
        }).catch(function (error) {
            result = 'error ' + error.toString();
        });

    return result;
}


(async function () {
    console.log('--->', await get('http://get.sparrow.in.ua/countries?token=85ba37970e24fb1017669c536535211695f5805c27ec640f2028527d573892bd_')
    );
})();
