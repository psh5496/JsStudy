const dogButton = document.querySelector('#dog');
const catButton = document.querySelector('#cat');
const dogUrl = 'https://dog.ceo/api/breeds/image/random';
const catUrl = 'https://api.thecatapi.com/v1/images/search';

const getAnimalImages = (url) =>
    new Promise((resolve, reject) => {
        const response = axios.get(url);
        if (response) {
            resolve(response);
        } else {
            reject();
        }
    });

const setImageInfo = ({ image, imgUrl, imgStyle }) => {
    image.src = imgUrl;
    Object.keys(imgStyle).forEach((style) => (image.style[style] = imgStyle[style]));
};

const animalButtonClick = (url) => {
    getAnimalImages(url)
        .then((response) => {
            let imgUrl;
            if (url.endsWith('random')) {
                imgUrl = response.data.message;
            } else {
                imgUrl = response.data[0].url;
            }
            const animalImage = document.createElement('img');
            const imageInfo = {
                image: animalImage,
                imgUrl: imgUrl,
                imgStyle: { height: '300px' },
            };
            setImageInfo(imageInfo);
            if (url.endsWith('random')) {
                document.querySelector('.dogs').appendChild(animalImage);
            } else {
                document.querySelector('.cats').appendChild(animalImage);
            }
        })
        .catch(() => {
            new Error('There was no response');
        });
};

dogButton.addEventListener('click', () => animalButtonClick(dogUrl));
catButton.addEventListener('click', () => animalButtonClick(catUrl));
