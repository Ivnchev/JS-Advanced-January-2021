function getArticleGenerator(articles) {
    let data = document.querySelector('#content')
    function showNext () {
        if(articles.length > 0){
            let newArt = document.createElement('article')
            newArt.textContent = articles.shift()
            data.appendChild(newArt)
        }
    }
    return showNext
}
