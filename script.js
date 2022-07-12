
const navigation = document.querySelector('#navigation')
const body = document.body


function OnScroll() {

    if(scrollY > 1){
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function openMenu(){
    body.classList.add('menuExpanded')
}

function closeMenu(){
    body.classList.remove('menuExpanded')
}

// 1:26