document.querySelector('#start').addEventListener('click', startGame);


function startGame() {
    let p1Commander = document.querySelector('#p1commander').value.toLowerCase().split(' ').join('+');
    let p1Name = document.querySelector('#p1Name').value;

    let url = `https://api.scryfall.com/cards/named?fuzzy=${p1Commander}`;

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);

        let image = data.image_uris.art_crop;
        let cmdName = data.name;

        document.querySelector('#p1 > .playerName').innerText =  p1Name;
        document.querySelector('#p1 > .commanderName').innerText = cmdName;
        document.querySelector('#p1 > img').src = image;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}