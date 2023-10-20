window.onload = function() {
    var img = document.getElementById("img1")
    var count = document.getElementById("score")
    var score = 0
    var audio = new Audio("a.mp3")

    img.addEventListener('mousedown', function (){
        inc()
        audio.play(audio)
        img.src = "b2.png"
    }
    
    );
    img.addEventListener('mouseup', function (){
        img.src = "b.png"
    }
    
    ) ;
    img.addEventListener('touchstart', function (){
        inc()
        audio.play(audio)
        img.src = "b2.png"
    }
    
    );
    img.addEventListener('touchend', function (){
        img.src = "b.png"
    }
    )
    function inc() {
        score++;
        count.innerHTML = score
    }
}