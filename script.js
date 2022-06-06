function createNode(description, info) {
    const Content = document.querySelector(".content");
    let listInfo = document.createElement('ul');
    listInfo.classList.add('info');
    listInfo.style.padding = '10px';
    listInfo.style.margin = '0px';
    listInfo.style.width = '20%';
    listInfo.style.backgroundColor = '#DB9501';
    for(let i = 0; i < 6; i++){
        let listItem = document.createElement('li');
        listItem.style.listStyleType = 'none';
        if(i == 0){
            let img = document.createElement('img');
            img.style.display = 'block';
            img.style.marginLeft = 'auto';
            img.style.marginRight = 'auto';
            img.style.width = '80%';
            img.src = info[0];
            listItem.appendChild(img);
        }
        else{
            listItem.textContent = description[i]+info[i];
        }
        listInfo.appendChild(listItem);
        Content.appendChild(listInfo);
    }
}
let button = document.querySelector('.button');
button.onclick = function () {
    fetch('https://randomuser.me/api')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const Picture = data.results[0].picture.large;
        const Latitude = data.results[0].location.coordinates.latitude;
        const Longitude = data.results[0].location.coordinates.longitude;
        const City = data.results[0].location.city;
        const Country = data.results[0].location.country;
        const Postcode = data.results[0].location.postcode;
        const arrData = [Picture, Latitude, Longitude, City, Country, Postcode];
        const arrDataDesc = ['Pic - ', 'Loc.: Latitude - ', ' Loc.: Longitude - ', 'City - ', 'Country - ', 'Postcode - '];
        createNode(arrDataDesc, arrData);
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    });
};
