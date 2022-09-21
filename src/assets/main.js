const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC_Qq4ZCyX27niofli2vHDWg&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');//referencia al HTML

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51c7f60690msh705dc6305c3d717p19c974jsnce3d4604ac6e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}
//de esta manera podemos hacer que se auto ejecute una funcion mientras carga la pagina
(async () => {
    try{
        const videos = await fetchData(API);//creamos una constante y con la funcion fetchData con la API de argumento
        //creamos un templay para poder hacer la logica necesaria de los elementos que necesitamos para imprimir las solicitudes
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">

                <div class="w-full bg-gray-200 aspect-w-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">

                </div>

                <div class="mt- 4 flex justify-between">

                    <h3 class="text-sm text-gray-700">

                        <span aria-hidden="true" class="absolute inset-0"></span>

                        ${video.snippet.title}

                    </h3>

                </div>

            </div>
        `).slice(0,4).join('')}
        `;//.slice(0,4).join('') esta linea reduce el numero de interaciones 
        content.innerHTML = view;
    }catch (error) {
        console.log('error');
    }
})();