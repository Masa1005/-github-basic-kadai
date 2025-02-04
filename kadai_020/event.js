const changeText = document.getElementById('text');

const button = document.getElementById('btn');

button.addEventListener('click', () => {
    changeText.textContent = 'ボタンをクリックしました';
});