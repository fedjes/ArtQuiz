const btnArtists = document.getElementById('CategoryArtists');
const btnPictures = document.getElementById('CategoryPictures');



btnArtists.addEventListener("click", ()=>{
    console.log('btnArtists');
    const home = document.getElementById("home");
    home.className = 'blockHome';
});

btnPictures.addEventListener("click", ()=>{
    console.log('btnPictures');
    home.className = 'blockHome';
});