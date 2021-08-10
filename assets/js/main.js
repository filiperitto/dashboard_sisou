(function () {

    var headerScroll = getId('header-main'),
        scrollHeight = 10,
        classHeader = 'fixed-top';

    //SCROLL
    window.addEventListener("scroll", scrollOn);

    function scrollOn() {
        animatedScroll(headerScroll, classHeader, scrollHeight);
    }

    //Função que on scroll muda o comportamento do elemento
    function animatedScroll(element, classN, height) {
        y = pageYOffset; //resgata do objeto window o valor pageYOffset e guarda na variável
        if (y > height) {
            element.className = classN;
        } else {
            element.className = '';
        }
    }

    // Função toggle adiciona ou tira a class do elemento
    function toggle(element, classe) {
        element.className = element.className ? '' : classe;
    }

    //Função que retorna o id do elemento
    function getId(id) {
        return document.getElementById(id);
    }


})();
//------------------------ Header

//-== HamburgerMenu Toggle
(function(){
    function hamburgueToggle() {
        document.getElementById('hamb').classList.toggle('open');
        document.getElementById('header-main').classList.toggle('open');
    }
    
    // Select all the elements with example class.
    var hambComponent = document.querySelectorAll('.hamb');
    var itemNavComponent = document.querySelectorAll('.itemNav');
    
    // Loop through the elements.
    for (var i = 0; i < hambComponent.length; i++) {
        hambComponent[i].addEventListener('click', hamburgueToggle);
    }
    for (var i = 0; i < itemNavComponent.length; i++) {
        itemNavComponent[i].addEventListener('click', hamburgueToggle);
    }
})();
//======================== /HamburgerMenu Toggle

