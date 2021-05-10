import { registerImg } from './lazy'
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/



 const maximum = 122;
 const minimum = 1;
export const getImagenId = () => Math.floor(Math.random()*(maximum - minimum)+minimum);

const createImagenNode = () => {
    const div_image = document.createElement('div');
    div_image.className = 'p-4'
    
    const image = document.createElement('img')
    image.className = 'mx-auto'
    image.dataset.src = `https://randomfox.ca/images/${getImagenId()}.jpg`
    image.alt = `${getImagenId()}`
    image.style.width = '320px'
    image.style.minHeight = '150px'
    image.style.background = '#232323'
    
    div_image.appendChild(image)

    return div_image
    
}

// creando contenedor de las imagenes
const containerImg = document.querySelector('#container_images');
// containerImg.append(createImagenNode(),createImagenNode(),createImagenNode(),createImagenNode());

const addButton = document.querySelector('button')
const addButtonR = document.querySelector('#buttonRemove');

const addImage = () => {
    console.log('Presionamos click')
    const newImg = createImagenNode();
    registerImg(newImg)
    containerImg.append(newImg);
}
const removeAll = () => {
    const arrayNode = containerImg.childNodes;
    [... arrayNode].forEach((node)=>{
        containerImg.removeChild(node);
    })
    
    // containerImg.innerHTML = '';
}

addButton.addEventListener('click', addImage)
addButtonR.addEventListener('click', removeAll)

// creando contenedor de las imagenes individuales

// document.querySelector('').insertAdjacentElement('afterend',containerImg);







