const collage = document.getElementsByClassName('grid')[0]

for (let i = 1; i <= 28; i++) {
    const img = document.createElement('img')
    img.src = `./img/${i}.jpg`
    img.className = 'grid-item'
    collage.appendChild(img)
}

imagesLoaded(collage, () => {
    const msnry = new Masonry(collage, {
        itemSelector: '.grid-item'
    })
    msnry.layout()
})