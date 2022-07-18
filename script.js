
const navigation = document.querySelector('#navigation')
const body = document.body


function OnScroll() {

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(depositions)
    activateMenuAtCurrentSection(contact)
    // activateMenuAtCurrentSection --> momento em que a função é ativada na pagina sempre quando acontecer o scroll(rolagem)

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


//funcao para efeito de mudança de sessoes
function activateMenuAtCurrentSection(section){
    //altura da linha dividida no meio
    const targetLine = scrollY + innerHeight / 2
    
    //verificando se a seção passou da linha 
    //quais dados eu preciso:?

    //topo da linha
    const sectionTop = section.offsetTop 
    //altura da section
    const sectionHeight = section.offsetHeight
    // base da secao
    const sectionEndsAt = sectionTop + sectionHeight

    //o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    // a base passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

    if(sectionBoundaries){
        menuElement.classList.add('active')
    }else{
        menuElement.classList.remove('active')
    }

}