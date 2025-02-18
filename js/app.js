'use strict'

document.addEventListener("DOMContentLoaded", () => {
	tomSelect()
	contentTabs()
})


function tomSelect() {
	const select = document.querySelector('.content__search #content__select')

	if(select) {
		new TomSelect(select ,{
			create: false,
			sortField: {
				field: "text",
				direction: "asc"
			}
		})
	}
}

function contentTabs() {
	

	document.addEventListener('click', function(e) {
		e.preventDefault()

		const tabs = document.querySelector('.content__tabs')
		const headItem = tabs.querySelectorAll('.content__head_item')
		const contentItem = document.querySelectorAll('.content__tab_body .content__tab_item')
		const tabHeadAttr = e.target.dataset.tab

		if(!e.target.closest('.content__head_item')) return

		headItem.forEach(function(item) {
			if(item.contains(e.target)) {
				item.classList.add('active')
			} else {
				item.classList.remove('active')
			}
		})
		contentItem.forEach(function(item) {

			if(item.dataset.content == tabHeadAttr) {
				item.classList.add('active')
				item.classList.remove('visually-hidden')
			} else {
				item.classList.remove('active')
				item.classList.add('visually-hidden')
			}
		})
	})
}