const classMap = {
    'theme_color_project-default' : 'theme_color_project-inverse',
    'theme_color_project-inverse' : 'theme_color_project-default'
}

const onoffswitchAction = function (target) {

    target.classList.toggle('onoffswitch_checked');

    let themeForToggle = document.querySelectorAll('.theme');

    themeForToggle.forEach( block => {

        for( let className in classMap){
            if (block.classList.contains(className)) {
                block.classList.remove(className);
                block.classList.add(classMap[className]);
                break;
            }
        }

    });

}

const accordionDefault = function(){

    let accordionsForDefault = document.querySelectorAll('.e-accordion__more');

    accordionsForDefault.forEach( block => {
        block.classList.add('e-accordion__more_state_close');
    });

}

const accordionAction = function (target){

    let forClose = document.querySelector('.e-accordion__more_state_open');
    if(forClose){
        forClose.classList.remove('e-accordion__more_state_open');
        forClose.classList.add('e-accordion__more_state_close');
    }

    let forOpen = target.parentElement.querySelector('.e-accordion__more');
    forOpen.classList.remove('e-accordion__more_state_close');
    forOpen.classList.add('e-accordion__more_state_open');
}

const handlerMap = {
    'onoffswitch' : onoffswitchAction,
    'e-accordion__short' : accordionAction,
}

const bodyHandler = function (event) {

    for( let className in handlerMap){
        let target = event.target.closest('.'+className)
        if (target) {
            handlerMap[className](target);
            break;
        }
    }
}

document.addEventListener('DOMContentLoaded', accordionDefault);
document.body.addEventListener('click', bodyHandler);