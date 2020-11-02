const imageHolder = document.querySelector('.image-wrapper');


const pathGenerator = () => {
    let i = Math.floor(Math.random() * 13) + 1;
    return `./img/img-${i}.jpg`;
}

let imagePath = pathGenerator();


const getImage = async (imgPath) => {
    try{
        // Render Image:
        const img = await new Promise((resolve,reject) => {
            const imgEl = document.createElement('img');
            imgEl.setAttribute('alt','image');
            imgEl.src = imgPath;

            imgEl.addEventListener('load',() => {
                resolve(imgEl);
            });
            imgEl.addEventListener('error', () => {
                reject(new Error('Cannot found Image'))
            })
        });
        imageHolder.append(img);

        // Remove Image and restart circle:
        setTimeout(() => {
            imageHolder.removeChild(img);

            let newImage = pathGenerator();
            getImage(newImage);
        },10000);

    }catch(err){
        console.error(err.message);
        
    }

} 
getImage(imagePath);
