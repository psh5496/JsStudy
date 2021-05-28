const submitButton = document.querySelector(".submit-button");
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
const imgBox = document.querySelector('.img-box');
const textBox = document.querySelector('.text-box');
const attribute = document.getElementsByClassName('attribute');
const submitInput = document.querySelector(".submit-input")
const ID_FIRST_INDEX = 1;
const ID_LAST_INDEX = 898;

const getPokemonImage = function(res) {
    const {front_default, back_default, front_shiny, back_shiny} = res.data.sprites;
    const imgArr = [front_default, back_default, front_shiny, back_shiny];
    for(let i = 0; i < 4; i++) {
        const img = document.createElement('img');
        img.src = imgArr[i];
        imgBox.appendChild(img);
    }
}

const getPokemonText = function(res) {
    const {name, height, weight} = res.data;
    const textArr = [name, height, weight];
    for(let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        span.innerText = textArr[i];
        textBox.children[i].appendChild(span);
    }
}

const checkChildElement = function(value) {
    if(imgBox.childElementCount != 0) {
        removePokemonInfo();
    }
    getPokemonInfo(value);
}

const getPokemonInfo = async function(id) {
    const response = await axios.get(pokemonUrl + id);
    getPokemonImage(response);
    getPokemonText(response);
}

const removePokemonInfo = function() {
    while (imgBox.childElementCount) {       
        imgBox.removeChild(imgBox.firstChild);
    }
    for (let i = 0; i < 3; i++) {
        attribute[i].removeChild(attribute[i].lastChild);
    }
}

const numberSubmit = function() {
    const value = submitInput.value;
    document.querySelector(".submit-input").value = '';
    if(value >= ID_FIRST_INDEX && value <= ID_LAST_INDEX) {
        checkChildElement(value);
    } else {
        alert(`${ID_FIRST_INDEX}부터 ${ID_LAST_INDEX}까지의 수를 입력해주세요 !`);
    }
}

submitButton.addEventListener('click', numberSubmit);

