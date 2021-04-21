const UnsplashService = {
    endpoint: "https://api.unsplash.com",
    token: "KYTUvupcCB3vSGmen46asBA7Zcm9l2ceNGWGSvLiwtM",

    init() {
        const minhaLista = document.getElementById("minhas_fotos")

        var photos = fetch(`${this.endpoint}/photos/?client_id=${this.token}`, {
            method: "GET",
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)

            for(let i = 0; i < response.length; i++) {
                let photo = response[i]
                let item = document.createElement("li")
                
                item.innerHTML = `<img src="${photo.urls.small}" height="128" />`

                minhaLista.appendChild(item)
            }
        })

        console.log("2", photos)
    },
}