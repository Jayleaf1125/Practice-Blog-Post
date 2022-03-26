// DOM ELEMENTS
const blogPost = document.querySelector('#blog-post-input');
const input = document.querySelector('#desc')
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', handleInput);

function handleInput() {
    const inputValue = input.value;
    console.log(inputValue);
    blogPost.style.display = 'none';
}
