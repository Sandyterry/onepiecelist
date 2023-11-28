// fetch('https://api.api-onepiece.com/episodes')
// .then(response => response.json())
// .then(data => {
//     const img = document.querySelector('.img')
//     img.src = data.message
//     console.log(data)
// })
const apiUrl = 'https://api.api-onepiece.com/episodes'
const episodesContainer = 
document.getElementById('episodes-container');

fetch('https://api.api-onepiece.com/episodes')
.then(response => response.json())
.then(data => {
//    const id = document.querySelector('.id')
//    const title = document.querySelector('.title')
//    const description = document.querySelector('.description')
//    id.src = data.message
//    title.src = data.message
//    description.src = data.message

const episodesToShow = data.slice(0,300)

episodesToShow.forEach(episode => {
    const card = document.createElement('div');

    card.classList.add('episode-card')
    card.innerHTML = `
    <h3>ID: ${episode.id}</h3>
    <h2>${episode.title}</2>
    <p>${episode.description}</p>`;

    episodesContainer.appendChild(card);
});
    
})

// for (let key in data){
//     let id = data[key].id;
//     let title = data[key].title;
//     let description = data[key].description;
   

//     console.log(`${id} ${title} a ${description} ` )}