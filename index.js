const fetch = require('node-fetch');
const readline = require("readline-sync");
var randomize = require('randomatic')
var random = require('random-name')
const random_useragent = require('random-useragent');

const functionRegist = (name, last, email, reff) => new Promise((resolve, reject) => {
    const bodys = {
        params: {
            "event":"registration",
            "user":{"firstname":name,
                "lastname":last,
                    "email":email},
                        "referrer":{"referralCode":reff},
                            "refSource":"email",
                                "acquiredFrom":"form_widget"},
                                    "publicToken":"xlpIkQFqSuuOgXAwIp8GOUuRRno"
    }

    fetch('https://app.viral-loops.com/api/v2/events', {
        method: 'POST',
        headers: {
            'Host': 'app.viral-loops.com',
            'Connection': 'keep-alive',
            'Content-Length': 250,
            'Sec-Fetch-Dest': 'empty',
            'X-UCID': 'xlpIkQFqSuuOgXAwIp8GOUuRRno',
            'User-Agent': random_useragent.getRandom(),
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Origin': 'https://www.bankiom.com',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'cors',
            'Referer': `https://www.bankiom.com/?referralCode=${reff}&refSource=email`,
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
                },
        body: JSON.stringify(bodys)
    })
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});


(async () => {
    const reff = readline.question("[?] Kode reff: ")
    const jumlah = readline.question("[?] Jumlah reff: ")
    console.log("")
    for (var i = 0; i < jumlah; i++){
    try{
        const name = random.first()
        const last = random.last()
        const rand = randomize('0', 5)
        const email = `${name}${rand}@gmail.com`
        const regist = await functionRegist(name, last, email, reff)
        console.log(regist)
    }catch(e){
        console.log(e)
    }
}
})();