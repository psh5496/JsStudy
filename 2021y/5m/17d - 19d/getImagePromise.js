const dog = Symbol('dog');
const cat = Symbol('cat');
const dogButton = document.querySelector('#dog');
const catButton = document.querySelector('#cat');
const dogUrl = 'https://dog.ceo/api/breeds/image/random';
const catUrl = 'https://api.thecatapi.com/v1/images/search';
const dogParent = document.querySelector('.dogs');
const catParent = document.querySelector('.cats');

const dogInfo = {
    url: dogUrl,
    parent: dogParent,
    getImageUrlPath: function (response) {
        return response.data.message;
    },
};

const catInfo = {
    url: catUrl,
    parent: catParent,
    getImageUrlPath: function (response) {
        return response.data[0].url;
    },
};

const infoMap = { [dog]: dogInfo, [cat]: catInfo };

const getRandomImages = (url) =>
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

const imageButtonClick = (target) => {
    const url = infoMap[target].url;
    getRandomImages(url)
        .then((response) => {
            const imgUrl = infoMap[target].getImageUrlPath(response);
            const randomImage = document.createElement('img');
            const imageInfo = {
                image: randomImage,
                imgUrl: imgUrl,
                imgStyle: { height: '300px' },
            };
            setImageInfo(imageInfo);
            infoMap[target].parent.appendChild(randomImage);
        })
        .catch(() => {
            new Error('There was no response');
        });
};

dogButton.addEventListener('click', () => imageButtonClick(dog));
catButton.addEventListener('click', () => imageButtonClick(cat));
