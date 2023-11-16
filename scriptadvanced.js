function advancedSearch() {
    var allWords = document.getElementById('all-words').value;
    var exactPhrase = document.getElementById('exact-phrase').value;
    var anyWords = document.getElementById('any-words').value;
    var noneWords = document.getElementById('none-words').value;

    var query = '';

    if (allWords) {
        query += allWords + ' ';
    }

    if (exactPhrase) {
        query += '\"' + exactPhrase + '\" ';
    }

    if (anyWords) {
        query += anyWords + ' OR ';
    }

    if (noneWords) {
        query += '-' + noneWords + ' ';
    }

    // Виконати додаткову логіку обробки даних і формування запиту
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query.trim());
}
