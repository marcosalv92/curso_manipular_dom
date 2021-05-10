

const isIntersecting = (entry) =>{
    return entry.isIntersecting;
}
const accion = (entry) => {
    const container = entry.target;
    const image =  container.firstChild;
    image.src = image.dataset.src;
    console.log('holaa')
    observer.unobserve(container)
}
const observer = new IntersectionObserver((entries)=>{
    entries
        .filter(isIntersecting)
        .forEach(accion)
});

export const registerImg = (imagen) => {
    observer.observe(imagen)
}