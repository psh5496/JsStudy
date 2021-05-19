const dogButton = document.querySelector('#dog');
const catButton = document.querySelector('#cat');
const dogUrl = 'https://dog.ceo/api/breeds/image/random';
const catUrl = 'https://api.thecatapi.com/v1/images/search';

const getDogImages = function () {
    axios.get(dogUrl).then((response) => {
        const imgURL = response.data.message;
        const dogImage = document.createElement('img');
        dogImage.src = imgURL;
        dogImage.style.height = '300px';
        document.querySelector('.dogs').appendChild(dogImage);
    });
};

const getCatImages = function () {
    axios.get(catUrl).then((response) => {
        const imgURL = response.data[0].url;
        const catImage = document.createElement('img');
        catImage.src = imgURL;
        catImage.style.height = '300px';
        document.querySelector('.cats').appendChild(catImage);
    });
};

dogButton.addEventListener('click', getDogImages);
catButton.addEventListener('click', getCatImages);
