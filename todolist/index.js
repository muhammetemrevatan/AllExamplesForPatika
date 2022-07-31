let ulDOM = document.querySelector("#list")
let allLi = document.getElementsByTagName("li")
let localList = []

for (let index = 0; index < allLi.length; index++) {
    localList.push(allLi[index].innerHTML)
}
localStorage.setItem('listInfo', JSON.stringify(localList))

let index=0
for(; index < allLi.length; index++){
    let spanDOM = document.createElement('span')
    spanDOM.innerHTML = `&times;`
    spanDOM.classList.add('close')
    spanDOM.onclick = deleteElement
    allLi[index].append(spanDOM)
    allLi[index].onclick = marked
}

const newElement = () => {
    let textDOM = document.querySelector("#task")
    let liDOM = document.createElement('li')
    let spanDOM = document.createElement('span')

    textDOM.value = textDOM.value.trim()
    if(textDOM.value == "" || textDOM.value == null || textDOM.value == " "){
        $('#liveToasterror').toast('show')
    }else{
        spanDOM.innerHTML = `&times;`
        spanDOM.classList.add('close')
        liDOM.innerHTML = textDOM.value
        localList.push(textDOM.value)
        localStorage.setItem('listInfo', JSON.stringify(localList))
        liDOM.onclick = marked
        spanDOM.onclick = deleteElement
        liDOM.append(spanDOM)
        ulDOM.append(liDOM)
        $('#liveToastsuccess').toast('show')

    }
}

function deleteElement(){
    let deleteString = this.parentElement.innerHTML.split('<')[0]
    this.parentElement.remove()
    localList.pop(deleteString)
    localStorage.setItem('listInfo', JSON.stringify(localList))
}

function marked(){
    this.classList.toggle("checked"); 
}
