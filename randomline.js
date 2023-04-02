window.onload = ()=>{
    let canvas = document.getElementById('canvas');
    
    let context = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    for(var i = 0; i < 100; i +=1){
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.strokeStyle='red';
        context.stroke();
        
        
    }
}