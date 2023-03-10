const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const EmojiRandom = () => {
    switch(randint(0, 5)) {
        case 0: return 'π'
        case 1: return 'π'
        case 2: return 'π'
        case 3: return 'π'
        case 4: return 'π±'
        case 5: return 'π'
    }
}

const MsgRandom = () => {
    switch(randint(0, 5)) {
        case 0: return 'μ΄μ¬ν κΈμνλ₯Ό<br>μ½κ³ μλ μ€'
        case 1: return 'μ€λ κΈμμ<br>μμλ¬Έ νλ μ€'
        case 2: return 'κΈμ μμ£Όλ¨Έλμκ²<br>λ¬Όμ΄λ³΄λ μ€'
        case 3: return 'μΈν°λ·μΌλ‘<br>κ²μνλ μ€'
        case 4: return 'λ€λ₯Έ λ° κΈμν<br>λΉΌλλ¦¬λ μ€'
        case 5: return 'λ°μ΄ν°λ² μ΄μ€<br>λ―μ΄λ³΄λ μ€'
    }
}

const PageRefrash = (emoji, message, iscreate) => {
    const Class_Emoji = document.getElementById(emoji);
    const Class_Message = document.getElementById(message);
    if(iscreate){
        Class_Emoji.innerHTML = EmojiRandom();
        Class_Message.innerHTML = MsgRandom();
    }else{
        Class_Emoji.remove();
        Class_Message.remove();
    }
    return 1
}