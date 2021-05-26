const submitButton = document.querySelector(".submit-button");
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
const imgBox = document.querySelector('.img-box');
const textBox = document.querySelector('.text-box');
const article = document.getElementsByTagName('article');

const getPokemonImage = function(res) {
    const images = res.data.sprites;
    const imgArr = [images.front_default, images.back_default, images.front_shiny, images.back_shiny];
    for(let i = 0; i < 4; i++) {
        var img = document.createElement('img');
        img.src = imgArr[i];
        imgBox.appendChild(img);
    }
}

const getPokemonText = function(res) {
    const texts = res.data;
    const textArr = [texts.name, texts.height, texts.weight];
    for(let i = 0; i < 3; i++) {
        var span = document.createElement('span');
        span.innerText = textArr[i];
        textBox.children[i].appendChild(span);
    }
}

const getPokemonInfo = async function(number) {
    const response = await axios.get(pokemonUrl + `${number}`);
    getPokemonImage(response);
    getPokemonText(response);
}

const removePokemonInfo = function() {
    for(let i = 0; i < 4; i++) {        
        imgBox.removeChild(imgBox.firstChild);
    }
    for(let i = 0; i < 3; i++) {
        article[i].removeChild(article[i].lastChild);
    }
}

const numberSubmit = function() {
    let value = document.querySelector(".submit-input").value;
    document.querySelector(".submit-input").value = '';
    if(value >= 1 && value <= 898) {
        if(imgBox.childElementCount != 0) {
            removePokemonInfo();
        }
        getPokemonInfo(value);
    } else {
        alert('1부터 898까지의 수를 입력해주세요 !');
    }
}

submitButton.addEventListener('click', numberSubmit);

