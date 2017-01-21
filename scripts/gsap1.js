let box1 = document.getElementById('box1');

TweenLite.to("#box1", 4, { backgroundColor:"#ff00ff", width:"50%", height:"250px", ease:Power2.easeInOut });


let box2 = document.getElementById('box2');

TweenLite.fromTo("#box2", 1.5, {width:0, height:0}, {width:250, height:250});
