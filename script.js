const toDoInput = document.querySelector('.todo-input')
const addBtn = document.querySelector('.btn-add')
const ul = document.querySelector('ul')
const pErrorInfo = document.querySelector('.error-info')

const popUp = document.querySelector('.popup')
const popUpInfo = document.querySelector('.popup-input')
const popUpBtnAcc = document.querySelector('.accept')
const popUpBtnCanc = document.querySelector('.cancel')
const popUpP = document.querySelector('.popup-info')

const addToDos = () => {
	if(toDoInput.value !== ''){
		const element = document.createElement('li')
		element.textContent = toDoInput.value
		ul.append(element)
		createToolArea(element)
		toDoInput.value = ''
		pErrorInfo.textContent = ''
	} else{
		pErrorInfo.textContent = 'Wpisz treść zadania...'
	}
}

const createToolArea = (element) => {
	const div = document.createElement('div')
	div.classList.add('tools')
	element.append(div)

	const button1 = document.createElement('button')
	button1.classList.add('complete')
	button1.innerHTML = '<i class="fas fa-check"></i>'

	const button2 = document.createElement('button')
	button2.classList.add('edit')
	button2.textContent = 'EDIT'

	const button3 = document.createElement('button')
	button3.classList.add('delete')
	button3.innerHTML = '<i class="fas fa-times"></i>'

	div.append(button1, button2, button3)
}

const toolsFunctionalities = e => {
	if(e.target.matches('.complete')){
		((e.target).closest('li')).classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if(e.target.matches('.edit')){
		editToDo(e)
	} else if(e.target.matches('.delete')){
		deleteToDo(e)
	}
}

const editToDo = e => {
	toDoEdit = e.target.closest('li')
	popUpInfo.value = toDoEdit.firstChild.textContent
	popUp.style.display = 'flex'
}

const closeToDo = () => {
	popUp.style.display = 'none'
}

const saveToDo = () => {
	if (popUpInfo.value !== '') {
		popUpP.textContent = ''
		toDoEdit.firstChild.textContent = popUpInfo.value
		popUp.style.display = 'none'
	}else{
		popUpP.textContent = 'Musisz wpisać jakąś wartość...'
	}
}

const deleteToDo = e => {
	e.target.closest('li').remove()
	const allToDos = ul.querySelectorAll('li')
	if (allToDos.length === 0) {
		pErrorInfo.textContent = 'Brak zadań na liście...'
	}
}

const checkIfEnter = e => {
	if(e.key === 'Enter'){
		addToDos()
	}
}

toDoInput.addEventListener('keydown', checkIfEnter)
popUpBtnAcc.addEventListener('click', saveToDo)
popUpBtnCanc.addEventListener('click', closeToDo)
ul.addEventListener('click', toolsFunctionalities)
addBtn.addEventListener('click', addToDos)

