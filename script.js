function searchImages() {
    var query = document.getElementById('image-search-query').value;
    window.location.href = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(query);
}
