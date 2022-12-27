import setCookie from 'set-cookie-parser';
import axios from 'axios';

class LoginAPI {
    async loginAPI(loginData) {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        axios.post(loginData.url, {
        headers: {
            'Content-Type': 'application/json'
            },
            data: loginData.body
        }).then(resp => {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
            console.log(resp.json());
            //setCookie.parse(resp.json());
        });
    //     await browser.call(async () => {
    //     await nodeFetch(loginData.url, { method: 'POST', body: loginData.body });
    // }).then(resp => {
    //     console.log(JSON.stringify(resp));
    //     setCookie.parse(resp.json());
    //    });
    }
}
module.exports = new LoginAPI();