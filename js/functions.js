function showAnswers() {

    const answers = document.getElementsByClassName('vastaus');
    const button = document.querySelector('button');

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].style.display === 'block') {
            answers[i].style.display = 'none';
            button.textContent = 'Näytä vastaukset';
        } else {
            answers[i].style.display = 'block';
            button.textContent = 'Piilota vastaukset';
        }
    }
}