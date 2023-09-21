// const getImegnPromesa = () => new Promise(resolve => resolve('asdasdad') )
    
// getImegnPromesa().then(console.log)

const getImagen = async () => {

    try {
        const apiKey = 'Nc8lp3kFCGiCogWeNcsGalUne1VsCrOy';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);
        const data = await resp.json();
        const {url} = data.data[3].images.original
    
        const img = document.createElement('img');
        img.src = url
    
        document.body.append(img)
    } catch (error) {
        console.log;
    }

   
}
getImagen();

