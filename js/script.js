window.addEventListener('DOMContentLoaded', () => {
    function req() {
        getResource('http://localhost:3000/people')
            .then(data => createCards(data))
            .catch(err => console.error(err));

        this.remove();
    }

    async function getResource(url) {
        let resp = await fetch(`${url}`);

        if(!resp.ok) {
            throw new Error(`Cannot fetch ${url}, status: ${resp.status}`);
        }

        return await resp.json();
    }

    function createCards(response) {

        response.forEach(item => {
            let card = document.createElement('div');
            card.classList.add('card');

            let icon;
            if (item.sex === "male") {
                icon = 'icons/mars.png';
            } else {
                icon = 'icons/female.png';
            }

            card.innerHTML = `
                <img src="${item.photo}" alt="photo">
                <div class="name">${item.name} ${item.surname}</div>
                <div class="sex">
                    <img src="${icon}" alt=""/>
                </div>
                <div class="age">${item.age}</div>
            `;

            document.querySelector('.app').appendChild(card);
        });

    }

    document.querySelector('button').addEventListener('click', req, {once: true});
});