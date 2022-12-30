const alarm_open = () => {
    
    const element = document.querySelector('.erroralarm');
    const background = document.querySelector('.blackback');
    document.getElementById("erroralarm").style.display = "block";
    document.getElementById("blackback").style.display = "flex";
    
    if((!element.classList.contains('playanimated_f')) && (!element.classList.contains('playanimated_r'))){
        element.classList.add('playanimated_f');
        background.classList.add('playanimated_bf');
    }else if (element.classList.contains('playanimated_r')){
        element.classList.replace('playanimated_r', 'playanimated_f');
        background.classList.replace('playanimated_br', 'playanimated_bf');
    }
};

const alarm_close = () => {

    const element = document.querySelector('.erroralarm');
    const background = document.querySelector('.blackback');
    
    if((element.classList.contains('playanimated_f')) && (!element.classList.contains('playanimated_r'))){
        element.classList.replace('playanimated_f', 'playanimated_r');
        background.classList.replace('playanimated_bf', 'playanimated_br');
    }else if((!element.classList.contains('playanimated_f')) && (!element.classList.contains('playanimated_r'))){
        element.classList.add('playanimated_r');
        background.classList.add('playanimated_br');
    }

    element.addEventListener("animationend", function() {
        if(!element.classList.contains('playanimated_f')){
            document.getElementById("erroralarm").style.display = "none";
            document.getElementById("blackback").style.display = "none";
        }
    }, false);

};