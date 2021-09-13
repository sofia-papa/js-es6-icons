//Milestone 1:
//Partendo dalla seguente struttura dati, mostriamo in pagina tutte le icone disponibili come da layout.

//Milestone 2:
//Coloriamo le icone per tipo

//Milestone 3:
//Creiamo una select con i tipi di icone e usiamola per filtrare le icone


const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//milestone 1

let containerIcons = document.getElementById("my_icon-box");
console.log(containerIcons);

arrayColored = itemsColored (icons, colors);
seeOnPage(arrayColored, container);

const types = getTypes(icons, "type");
const select = document.getElementById("my_select");

console.log(getTypes(icons, "type"));
addOptions(types, select);



//FUNCTIONS

function seeOnPage(array, container){
    let htmlContent = "";
    
    array.forEach((element) => {
        const {family, name, prefix, type} = element;

        htmlContent += 
        `<div>
            <i class= "${family} ${prefix}${name}">
            style = "color: ${color}"></i>
            <h4 class="my_icon-title>${name} ${type} </h4>
        </div>`   
    });
    container.innerHTML = htmlContent;   
}

function getTypes(array){
    const types = [];

    array.forEach((element,index) => {
        if(! types.includes(element.type)){
            types.push(element.type);
        }
    });

    return types;
}

function itemsColored (array, colors) {
    const types = getTypes (array, "type");
    console.log(types);

    const arrayColored = array.map ((element) => {
        const indexofType = types.indexOf(element.type);

        if (indexofType !== -1){
            element.color = colors[indexOfTypes];
        }
        return element;
    })
    return itemsColored;
}

function addOptions(options, select){
    options.forEach((element) => {
        select.innerHTML +=  `<option value="${element}">${element}</option>`;
    });
    console.log(select);
}