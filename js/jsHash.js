
const imgsContainer = document.querySelector('.container');
const input = document.querySelector('.sectionSearch');
const valueInput = document.querySelector('.searchMovie')
const hiddenOpcoes = document.querySelector('.hiddenOpcoes');
const description = document.querySelector('.desc');
const titleSelected = document.querySelector('.titleSelected');
const yearSelected = document.querySelector('.year');
const bgList = document.querySelector('.bgList');
const boxDesc = document.querySelector('.boxDesc');
const listBox = document.querySelector('.listBox');
const btnFechar = document.querySelector('.btnFechar');
const menuTitulos = document.querySelector('.menuTitulos');
const titleOpc = document.querySelector('.titleOpc');

class AddImagesSlider{
    constructor(imgArray, imgName){
        this.imgArray = imgArray;
        this.imgName = imgName;
    }

    addInArray(){
        const pathFileImg = `../images/imgVetores/${this.imgName}`;
        this.imgArray.push(pathFileImg);
    }
    createImageElement() {
        this.imgArray.forEach((imgSrc, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('imageContainer');
    
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('maxWidthSliders');
            img.classList.add('slider');
    
            const btnShowName = document.createElement('button');
            btnShowName.textContent = 'Mostrar Nome';
            btnShowName.addEventListener('click', () => {
                this.showProteinName(index);
            });
    
            imgContainer.appendChild(img);
            imgContainer.appendChild(btnShowName);
            imgsContainer.appendChild(imgContainer);
        });
    }
    
    
   
    showProteinName(index) {
        const proteinName = proteins[index].nome;
        alert(`Nome da Proteína: ${proteinName}`);
    }
    
};


const images = [];

for (let i = 0; i < 8; i++){
    const addImg = new AddImagesSlider(images, 'icons-slide${i + 1}.png');
    addImg.createImageElement();

}

const proteins = [
    {id: 0, nome: "ATG-CGA-TCA", imagem: "../images/imgHash/hemoglobina.jpg"},
    {id: 1, nome: "CCA-GGA-TTC", imagem: "../images/imgHash/queratina.jpg"},
    {id: 2, nome: "GTG-TTC-AGA", imagem: "../images/imgHash/albumina.jpg"},
    {id: 3, nome: "GCC-CAA-TAC", imagem: "../images/imgHash/colageno.png"},
    {id: 4, nome: "ATC-TGG-GGT", imagem: "../images/imgHash/amilase.jpg"},
    {id: 5, nome: "GGA-CCA-TAG", imagem: "../images/imgHash/citocromo.png"}
   /* {id: 6, nome: "Hunter", imagem: "../images/imgVetores/hunter.jpg"},
    {id: 7, nome: "Mass Effect", imagem: "../images/imgVetores/mass_effect.jpg"},
    {id: 8, nome: "The Elder", imagem: "../images/imgVetores/theElder.jpg"},
    {id: 9, nome: "Warcraft", imagem: "../images/imgVetores/warcraft.jpg"},
    {id: 10, nome: "The Witcher", imagem: "../images/imgVetores/witcher.jpg"},
    {id: 11, nome: "Stardew Valley", imagem: "../images/imgVetores/stardew.jpg"},
    {id: 12, nome: "Divinity", imagem: "../images/imgVetores/divinity.jpg"} */

]

const containerAvailable = document.querySelector('.containerAvailable');


// Itera sobre cada filme na lista 'movies'
proteins.forEach((proteina) => {
    
    const itemBox = document.createElement('div');
    itemBox.classList.add('itemBox'); 
    itemBox.style.flexDirection = 'column'; // Adiciona a propriedade CSS para organizar em coluna

    const img = document.createElement('img');
    img.classList.add('itemList', 'listAvailable'); 
    img.src = proteina.imagem; 
    img.alt = 'img list'; 
    // Cria um elemento span para exibir o nome do filme
    const span = document.createElement('span');
    span.classList.add('name'); // Adiciona a classe 'name' ao elemento span
    span.textContent = proteina.nome; // Define o texto do span com base na propriedade 'name' do filme

    // Adiciona a imagem e o span ao elemento div 'itemBox'
    itemBox.appendChild(img);
    itemBox.appendChild(span);

    // Adiciona o elemento 'itemBox' ao elemento com a classe 'containerAvailable'
    containerAvailable.appendChild(itemBox);
});





const showAvailableGames = () => {
    containerAvailable.innerHTML = '';

    proteins.forEach((proteina) => {
        const itemBox = document.createElement('div');
        itemBox.classList.add('itemBox');

        const img = document.createElement('img');
        img.classList.add('itemList', 'listAvailable');
        img.src = proteina.imagem;
        img.alt = 'img list';

        const span = document.createElement('span');
        span.classList.add('nome');
        span.textContent = proteina.nome;

        itemBox.appendChild(img);
        itemBox.appendChild(span);

        containerAvailable.appendChild(itemBox);
    });
};


const itemBox = document.querySelector('.itemBox');
const imgItemBoxElement = document.createElement('img');
const spanItemBoxElement = document.createElement('span');

let index;
const imgAddedName = [];
let tempImgAddedName;


const createDynamicElement = (proteina) => {
    const spanElement = document.createElement('span');
    const divElement = document.createElement('div');
    divElement.className = 'itemBox';

    spanElement.className = 'numb';

    const imgElement = document.createElement('img');
    imgElement.className = 'itemList';
    imgElement.classList.add('classUserList');
    imgElement.src = game.imagem;
    imgElement.alt = 'img list';

    const btnRemoveElement = document.createElement('button');
    btnRemoveElement.className = 'btnRemove';
    btnRemoveElement.textContent = '-';

    divElement.appendChild(spanElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(btnRemoveElement);

    listBox.appendChild(divElement);

    imgElement.addEventListener('click', () => {
        mostrarNomeProteina(proteina.nome);
    });

    return divElement;
};


/*
const createDynamicElement = (imagePath) => {
    const spanElement = document.createElement('span');
    const divElement = document.createElement('div');
    divElement.className = 'itemBox';

    spanElement.className = 'numb';

    const imgElement = document.createElement('img');
    imgElement.className = 'itemList';
    imgElement.classList.add('classUserList');
    imgElement.src = imagePath;
    imgElement.alt = 'img list';

    const btnRemoveElement = document.createElement('button');
    btnRemoveElement.className = 'btnRemove';
    btnRemoveElement.textContent = '-';

    divElement.appendChild(spanElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(btnRemoveElement);

    listBox.appendChild(divElement);

    return divElement;
}
*/
let selectedElement = null;
itemBox.addEventListener('click', (event) =>
{ 
    if (event.target.classList.contains('classUserList')) 
    {
        const itemBox = event.target.closest('.classUserList');        

        if (itemBox === selectedElement)
        {
            itemBox.classList.remove('imgSelected');
            selectedElement = null;

        }
        else
        {
            if (selectedElement)
            {
                selectedElement.classList.remove('imgSelected');
            }

            itemBox.classList.add('imgSelected');

            selectedElement = itemBox;
        }
 
        // This Section is for Github Pages***********************************************
        for (let i = 0; i < games.length; i++)
        {
            let url = games[i].imagem;
            let itemBoxSrc = itemBox.src
            let relativeItemBox = new URL(itemBoxSrc, window.location.origin).pathname
            let relativeUrl = new URL(url, window.location.origin).pathname

            let convertURL = `/View-Data-Structure${relativeUrl.toString()}`;
            let convertItemBox = relativeItemBox.toString();
            console.log(`itemBox.src: ${itemBoxSrc}`);
            console.log(`url: ${url}`);
            console.log(`RelativeItemBox: ${relativeItemBox}`)
            console.log(`Relative url: ${relativeUrl}`);
            console.log(`convertURL: ${convertURL}`);
            console.log(`convertItemBox ${convertItemBox}`);
            if (convertURL == convertItemBox)
            {
                titleSelected.innerHTML = '';
                description.innerHTML = '';
                src = movies[i].bg;

                titleSelected.innerHTML = games[i].completeTitle;
                
                description.innerHTML = games[i].desc
                yearSelected.innerHTML = games[i].year;
                // console.log(bgList);
                bgList.src = src;  
                console.log("Elemento clicado!");
                bgList.classList.toggle('bgListAnimation');
                boxDesc.classList.toggle('animationBoxDesc');
            }
        }
        // This Section is for Github Pages***********************************************
    }
});
const handleClick = () =>
{
    // Alterna entre as classes 'hiddenSideAvailable' e 'visibleSideAvailable' no menu de títulos
    menuTitulos.classList.toggle('hiddenSideAvailable');
    menuTitulos.classList.toggle('visibleSideAvailable');

    // Adiciona ou remove a classe 'backAllTranslateHiddenOpcoes' no menu de opções escondido
    if (menuTitulos.classList.contains('hiddenSideAvailable')) {
        hiddenOpcoes.classList.add('backAllTranslateHiddenOpcoes');
    } else {
        hiddenOpcoes.classList.remove('backAllTranslateHiddenOpcoes');
    }

    // Alterna entre as classes 'translateHiddenOpcoes1' e 'translateHiddenOpcoes2' no menu de opções escondido
    hiddenOpcoes.classList.toggle('translateHiddenOpcoes1');
    hiddenOpcoes.classList.toggle('translateHiddenOpcoes2');
};
document.querySelector('.botaoVerGames').addEventListener('click', handleClick);
document.querySelector('.').addEventListener('click', handleClick);