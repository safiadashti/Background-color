function getRandomColor(){
    let letters ='0123456789ABCDEF';
    let colors = '#';
    for(let i=0; i<6; i++){
        colors +=letters[Math.floor(Math.random() * letters.length)];
    }
    return colors;
}
document.getElementById("colorChanger").addEventListener('click',()=>{
    let colorChanger = getRandomColor();
    document.body.style.backgroundColor = colorChanger;
})