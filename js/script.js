window.addEventListener('DOMContentLoaded', () => {
    function req() {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/people');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status == 200) {
                let res = JSON.parse(request.response);
                console.log(res);
            } else {
                console.log("Error!");
            }
        });
    }
    req();
});