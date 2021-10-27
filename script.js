window.onload = function() {
    
    /* Left section = active icon onclick */
    window.onclick = e => {
        if ((e.target.tagName) == "I") {
            let activeIcon = document.getElementsByClassName("active");
            activeIcon[0].classList.remove("active");
            e.target.classList.add("active");
        }
    }

    /* Show sidebar left */
    document.querySelector(".button-sidebar-left").addEventListener("click", function(){
        document.querySelector(".left").classList.add("left-active");
        sleep(800).then(() => {
            document.querySelector(".button-sidebar-left-close").style.visibility = "visible";
        });
    })

    /* Hide sidebar left */
    document.querySelector(".button-sidebar-left-close").addEventListener("click", function() {
        document.querySelector(".left").classList.remove("left-active");
        sleep(200).then(() => {
            this.style.visibility = "collapse";
        });        
    })

    /* Show sidebar right */
    document.querySelector(".button-sidebar-right").addEventListener("click", function() {
        document.querySelector(".right").classList.add("right-active");
        sleep(400).then(() => {
            document.querySelector(".middle").style.visibility = "collapse";
            document.querySelector(".button-sidebar-right-close").classList.add("button-sidebar-right-close-active");
        });
    })

    /* Hide sidebar right */
    document.querySelector(".button-sidebar-right-close").addEventListener("click", function() {
        document.querySelector(".right").classList.remove("right-active");
        document.querySelector(".middle").style.visibility = "visible";
        sleep(400).then(() => {
            document.querySelector(".button-sidebar-right-close").classList.remove("button-sidebar-right-close-active");
        });
    })

    /* Sleep for more fluidity on the appear/disappear icon */
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

};