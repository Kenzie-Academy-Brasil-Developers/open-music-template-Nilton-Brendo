/* Desenvolva sua lógica aqui ... */

export const themeMode = () => {
    const buttonMode = document.querySelector('.button__theme');
    const imgTheme = document.querySelector('.button__theme > figure > img');
    const htmlTag = document.querySelector('html');

    const saveThemePreference = JSON.parse(localStorage.getItem('dark__mode'));
    
    if(saveThemePreference) {
        imgTheme.setAttribute('src', './src/assets/img/sun.svg');
        htmlTag.classList.add('dark__mode');
    } else {
        imgTheme.setAttribute('src', './src/assets/img/moon.svg');
        htmlTag.classList.remove('dark__mode');
    };

    buttonMode.addEventListener('click', ()=>{
    
        htmlTag.classList.toggle('dark__mode');

        if(htmlTag.classList.contains('dark__mode')){
            imgTheme.setAttribute('src', './src/assets/img/sun.svg');
            localStorage.setItem('dark__mode', true);
        } else {
            imgTheme.setAttribute('src', './src/assets/img/moon.svg');
            localStorage.setItem('dark__mode', false);
        };
    });
};