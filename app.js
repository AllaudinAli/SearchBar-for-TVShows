//Using Axios to fetch APIs
const form = document.getElementById('searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    appendImages(res.data);
    form.elements.query.value = ' ';
})
//Creating a new image tag with each result shown
const appendImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.querySelector('.preview').append(img);
        }
    }
}