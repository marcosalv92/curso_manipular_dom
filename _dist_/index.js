/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseURL = 'https://platzi-avo.vercel.app';
const API = `${baseURL}/api/avo`

const getData = async () =>{
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    const allItems = [];
    data.data.forEach(element => {
        console.log(element);
        // crear imagen 
        const imagen = document.createElement('img');
        imagen.src = `${baseURL}${element.image}`;
        
        
        //crear titulo
        const titulo = document.createElement('h2');
        titulo.textContent = element.name;

        //crear  precio
        const precio = document.createElement('div');
        precio.textContent = element.price;
        
        const container = document.createElement('div');
        container.append(imagen,titulo,precio);
        allItems.push(container);
        

    });
    
    const container = document.querySelector('#container');
    container.append(...allItems);
    
    return allItems;
}

const allItems = getData();

// allItems.forEach((element)=>{
//     element.addEventListener('onclick',updateClick)

// })
// const updateClick = () => {
//     console.log('dio un click');
// }
