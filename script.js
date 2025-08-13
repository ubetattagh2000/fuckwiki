const searchInput = document.getElementById('search');
const wordList = document.getElementById('word-list');

function displayWords(words) {
wordList.innerHTML = '';
words.forEach(word => {
const card = document.createElement('div');
        card.classList.add('word-card');
        card.innerHTML = `
            <h2>${word.word}</h2>
            <p><strong>Origin:</strong> ${word.origin}</p>
            <p><strong>Meaning:</strong> ${word.meaning}</p>
            <p><strong>Example:</strong> ${word.example}</p>
        `;
        wordList.appendChild(card);
    });
}

function filterWords() {
    const query = searchInput.value.toLowerCase();
    const filtered = swearWords.filter(w => w.word.toLowerCase().includes(query) w.meaning.toLowerCase().includes(query)
w.example.toLowerCase().includes(query)
 );
   displayWords(filtered);
}

searchInput.addEventListener('input', filterWords);

// Initial load
displayWords(swearWords);
