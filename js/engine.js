console.log('This is the engine of the blender');


//on-off switch variable
let stateBlender = 'off';
//Save the sound of the blender
let soundBlender = document.getElementById("blender-sound");
//Save the sound of the button
let soundButtonBlender = document.getElementById("blender-button-sound");
//Save my blender in a variable
let myBlender = document.getElementById("blender");


//This function controls the state of the blender and changes it;
function controlBlender(){
    if(stateBlender === 'off'){
        stateBlender = 'on';
        playSoundBlender();
        myBlender.classList.add("active");
    }else{
        stateBlender = 'off';
        playSoundBlender()
        myBlender.classList.remove("active");
    }
}


//This function play on the sound of the blender
function playSoundBlender(){
    if(soundBlender.paused){
        soundButtonBlender.play();
        soundBlender.play();
    }else{
        soundBlender.play();
        soundBlender.pause();
        soundBlender.currenTime = 0;
    }
}
