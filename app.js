function searchGoogle() {
    var query = document.getElementById('search-query').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
}
