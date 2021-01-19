function createArticle() {
	let titleElement = document.getElementById('createTitle')
	let textElement = document.getElementById('createContent')
	if(titleElement.value !== '' && textElement.value !== ''){
	let headingEl = document.createElement('h3')
	headingEl.innerHTML = titleElement.value
	titleElement.value = ''
	let contentEl = document.createElement('p')
	contentEl.innerHTML = textElement.value
	textElement.value = ''
	let articleElement = document.createElement('article')
	articleElement.appendChild(headingEl)
	articleElement.appendChild(contentEl)

	let articleSection = document.getElementById('articles')
	articleSection.appendChild(articleElement)
	}
}