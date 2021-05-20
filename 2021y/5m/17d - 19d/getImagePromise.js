const dogButton = document.querySelector('#dog');
const catButton = document.querySelector('#cat');
const dogUrl = 'https://dog.ceo/api/breeds/image/random';
const catUrl = 'https://api.thecatapi.com/v1/images/search';

const getDogImages = new Promise((resolve, reject) => {
    const res = axios.get(dogUrl);
    if (res) {
        resolve(function () {
            const imgURL = res.data.message;
            const dogImage = document.createElement('img');
            dogImage.src = imgURL;
            dogImage.style.height = '300px';
            document.querySelector('.dogs').appendChild(dogImage);
        });
    } else {
        reject(new Error('There was no response'));
    }
});

dogButton.addEventListener(
    'click',
    getDogImages
        .then((success) => {
            success();
        })
        .catch((err) => {
            console.log(err);
        })
);
