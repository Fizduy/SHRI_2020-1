const themeBlocks = document.getElementsByClassName('theme');

const classMap = {
    'theme_color_project-default' : 'theme_color_project-inverse',
    'theme_color_project-inverse' : 'theme_color_project-default'
}

const onoffswitchAction = function (target) {

    target.classList.toggle('onoffswitch_checked');

    let themeForInvert = Array.prototype.slice.call(themeBlocks);

    themeForInvert.forEach( block => {

        for( let className in classMap){
            if (block.classList.contains(className)) {
                block.classList.remove(className);
                block.classList.add(classMap[className]);
                break;
            }
        }

    });

}

const accordionAction = function (target){
    alert('test_2!');
}

const handlerMap = {
    'onoffswitch' : onoffswitchAction,
    'e-accordion__short' : accordionAction
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

document.body.addEventListener('click', bodyHandler);