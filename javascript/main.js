function start(){
    const frog = document.querySelector(".frog");
    const log = document.querySelector(".log");
    const logWidth = log.offsetWidth;
    const river = document.querySelector("#river");
    const riverWidth = river.offsetWidth;
    let numberOfLogs = Math.floor(riverWidth / logWidth);
    for (let i = 1; i < numberOfLogs; i++) {
        let logCopy = document.createElement("img");
        logCopy.src = "./images/log.svg";
        river.appendChild(logCopy);
        logCopy.classList.add("log");
        
    }
    function move(event) {
        let key = event.key;
        let moveBy=10;
            chr = {
                upDown: function () {
                    let y = parseInt(getComputedStyle(frog).top);
                    if (key == "ArrowUp") {
                        y-=moveBy;
                    } else if (key == "ArrowDown") {
                        y+=moveBy;
                    }
        
                    return y;
                },
        
                leftRight: function () {
                    let x = parseInt(getComputedStyle(frog).left);
                    if (key == "ArrowLeft") {
                        x-=moveBy;
                    } else if (key == "ArrowRight") {
                        x+=moveBy;
                    }
        
                    return x;
                }
            };
        
        frog.style.top = (chr.upDown()) + "px";
        frog.style.left = (chr.leftRight()) + "px";
        }
        
        document.addEventListener('keydown', move);  
}