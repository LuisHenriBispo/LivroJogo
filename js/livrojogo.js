function changeModeWhite(){
    const modeToggle = document.getElementById('mode-toggle');
    if(modeToggle.className.includes("dark")){
        modeToggle.classList.remove('dark');
        modeToggle.classList.add('white');
    }

    const iconColor = document.getElementById('icon-color');
    if(iconColor.className.includes("mode-white")){
        iconColor.classList.remove('mode-white');
        iconColor.classList.add('mode-dark');
    }

    const iconColor2 = document.getElementById('icon-color2');
    if(iconColor2.className.includes("mode-white")){
        iconColor2.classList.remove('mode-white');
        iconColor2.classList.add('mode-dark');
    }

    // const buttonColor = document.getElementById('button-color');
    // if(buttonColor.className.includes("mode-white")){
    //     buttonColor.classList.remove('mode-white');
    //     buttonColor.classList.add('mode-dark');
    // }
}

function changeModeDark(){
    const modeToggle = document.getElementById('mode-toggle');
    if(modeToggle.className.includes("white")){
        modeToggle.classList.remove('white');
        modeToggle.classList.add('dark');
    }

    const iconColor = document.getElementById('icon-color');
    if(iconColor.className.includes("mode-dark")){
        iconColor.classList.remove('mode-dark');
        iconColor.classList.add('mode-white');
    }

    const iconColor2 = document.getElementById('icon-color2');
    if(iconColor2.className.includes("mode-dark")){
        iconColor2.classList.remove('mode-dark');
        iconColor2.classList.add('mode-white');
    }

    // const buttonColor = document.getElementById('button-color');
    // if(buttonColor.className.includes("mode-dark")){
    //     buttonColor.classList.remove('mode-dark');
    //     buttonColor.classList.add('mode-white');
    // }
}


