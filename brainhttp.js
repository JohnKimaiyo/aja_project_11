export class brainhttp {
    constructor() {
        this.http = new XMLHttpRequest();
    }

    // get request
    get = (url, callback) => {
        this.http.open('GET', url, true);
        this.http.send();
        this.http.onload = () => {
            if (this.http.status === 200) {
                let data = this.http.responseText;
                let employees = JSON.parse(data)
                callback(users);
            }
            else {
                callback(`error:${this.http.status}`);
            }

        }
    }
}

// post request
post = (url, employees, callback) => {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('content-Type', 'application/json');
    this.http.send(JSON.stringify(employees));
    this.http.onload = () => {
        let data = this.http.responseText;
        let employees = JSON.parse(data)
        callback(employees);
    }
}

//put request
put = (url, employees, callback) => {
    this.http.opme('put', url, true);
    this.http.setRequestHeader('content-Type', 'application/json');
    this.http.send(JSON.stringify(employees));
    this.http.onload = () => {
        let data = this.http.responseText;
        let employees = JSON.parse(data)
        callback(employees);
    }
}

// delete request
delet = (url, callback) => {
    this.http.open('DELETE', url, true);
    this.http.setRequestHeader('content-Type', 'application/json');
    this.http.send();
    this.http.onload = () => {
        let data = this.http.responseText;
        let employees = JSON.parse(data)
        callback(employees);
    }
}