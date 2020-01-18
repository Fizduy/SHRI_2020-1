const onoffswitchAction = function (target){
    alert('test!');
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