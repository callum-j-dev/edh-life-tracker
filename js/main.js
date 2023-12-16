document.querySelector('#start').addEventListener('click', startGame);

const lifeUpButtons = document.querySelectorAll('.lifeUp');
console.log(lifeUpButtons);
const lifeDownButtons = document.querySelectorAll('.lifeDown');

lifeUpButtons.forEach((button, index) => {
    button.addEventListener('click', incLife);
    console.log(index)
});
lifeDownButtons.forEach((button, index) => {
    button.addEventListener('click', decLife);
})


async function startGame() {
    let p1Commander = document.querySelector('#p1commander').value.toLowerCase().split(' ').join('+');
    let p1Name = document.querySelector('#p1Name').value;
    // for test purposes
    // p1Commander = 'magda';
    // p1Name = 'a';
    
    let p1Data = await getCardInfo(p1Commander);
    console.log(p1Data);

    

    document.querySelector('#p1 > .playerName').innerText = p1Name;
    document.querySelector('#p1 > .commanderName').innerText = p1Data.name;
    document.querySelector('#p1 > img').src = p1Data.image;

    let p2Commander = document.querySelector('#p2commander').value.toLowerCase().split(' ').join('+');
    let p2Name = document.querySelector('#p2Name').value;
    // for test purposes
    // p2Commander = 'magda';
    // p2Name = 'b';

    let p2Data = await getCardInfo(p2Commander);
    console.log(p2Data);

    

    document.querySelector('#p2 > .playerName').innerText = p2Name;
    document.querySelector('#p2 > .commanderName').innerText = p2Data.name;
    document.querySelector('#p2 > img').src = p2Data.image;

    let p3Commander = document.querySelector('#p3commander').value.toLowerCase().split(' ').join('+');
    let p3Name = document.querySelector('#p3Name').value;
    // for test purposes
    // p3Commander = 'magda';
    // p3Name = 'c';

    let p3Data = await getCardInfo(p3Commander);
    console.log(p3Data);

    

    document.querySelector('#p3 > .playerName').innerText = p3Name;
    document.querySelector('#p3 > .commanderName').innerText = p3Data.name;
    document.querySelector('#p3 > img').src = p3Data.image;

    let p4Commander = document.querySelector('#p4commander').value.toLowerCase().split(' ').join('+');
    let p4Name = document.querySelector('#p4Name').value;
    // for test purposes
    // p4Commander = 'magda';
    // p4Name = 'd';
    
    let p4Data = await getCardInfo(p4Commander);
    console.log(p4Data);

    

    document.querySelector('#p4 > .playerName').innerText = p4Name;
    document.querySelector('#p4 > .commanderName').innerText = p4Data.name;
    document.querySelector('#p4 > img').src = p4Data.image;

    console.log('Loading Field');

    document.querySelector('#players').classList.remove('hidden');
    document.querySelector('#players').classList.add('container');
    document.querySelector('#setup').classList.remove('container');
    document.querySelector('#setup').classList.add('hidden');

    // let url = `https://api.scryfall.com/cards/named?fuzzy=${p1Commander}`;

    // fetch(url)
    //   .then(res => res.json()) // parse response as JSON
    //   .then(data => {
    //     console.log(data);

    //     let image = data.image_uris.art_crop;
    //     let cmdName = data.name;

    //     document.querySelector('#p1 > .playerName').innerText =  p1Name;
    //     document.querySelector('#p1 > .commanderName').innerText = cmdName;
    //     document.querySelector('#p1 > img').src = image;
    //   })
    //   .catch(err => {
    //       console.log(`error ${err}`);
    //   });

}

async function getCardInfo(cardName) {
    let url = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`;
    let cmdName;
    let img;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        cmdName = await data.name;
        img = await data.image_uris.art_crop;


        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);

        //         img = data.image_uris.art_crop;
        //         cmdName = data.name;
        //     }).catch(err => {
        //         console.log(`error ${err}`);
        //     });

        // console.log(cmdName);
        
        return {name: cmdName, image: img};
    } catch (err) {
        console.log(`Error: ${err}`);
    }

}

function incLife(event) {
    let lifeTotalDisp = event.target.parentNode.parentNode.children[3];

    lifeTotalDisp.innerText = Number(lifeTotalDisp.innerText) + 1;
}

function decLife(event) {
    let lifeTotalDisp = event.target.parentNode.parentNode.children[3];

    lifeTotalDisp.innerText = Number(lifeTotalDisp.innerText) - 1;
}