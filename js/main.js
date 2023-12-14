document.querySelector('#start').addEventListener('click', startGame);


async function startGame() {
    let p1Commander = document.querySelector('#p1commander').value.toLowerCase().split(' ').join('+');
    let p1Name = document.querySelector('#p1Name').value;
    let p1Data = await getCardInfo(p1Commander);
    console.log(p1Data);

    document.querySelector('#p1 > .playerName').innerText = p1Name;
    document.querySelector('#p1 > .commanderName').innerText = p1Data.name;
    document.querySelector('#p1 > img').src = p1Data.image;

    let p2Commander = document.querySelector('#p2commander').value.toLowerCase().split(' ').join('+');
    let p2Name = document.querySelector('#p2Name').value;
    let p2Data = await getCardInfo(p2Commander);
    console.log(p2Data);

    document.querySelector('#p2 > .playerName').innerText = p2Name;
    document.querySelector('#p2 > .commanderName').innerText = p2Data.name;
    document.querySelector('#p2 > img').src = p2Data.image;



    let p3Commander = document.querySelector('#p3commander').value.toLowerCase().split(' ').join('+');
    let p3Name = document.querySelector('#p3Name').value;

    let p4Commander = document.querySelector('#p4commander').value.toLowerCase().split(' ').join('+');
    let p4Name = document.querySelector('#p4Name').value;

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

    const response = await fetch(url);
    const data = await response.json();

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

}