async function get(url) {
    try {
        let response = await fetch(url);

        if (response.status !== 200) throw Error(response.message);

        return response.json();

    } catch (e) {

        return e;
    }

}


async function post(url){
    let setting  = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        }
    };

    try {
        let response = await fetch(url, setting);

        if (response.status !== 200) throw Error(response.message);

        return response.json()
    } catch (e) {
        return e;
    }

}


async function clog() {

        let data = await get('http://get.sparrow.in.ua/countries?token=85ba37970e24fb1017669c536535211695f5805c27ec640f2028527d573892bd_');

        if (data instanceof Error){
            console.log('--->', data);
            document.getElementById('result').innerHTML = 'Ошибка'
        } else {
            document.getElementById('result').innerHTML = data[0].name

        }
}

clog();