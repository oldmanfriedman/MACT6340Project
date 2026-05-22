(function(){
"use strict";   

    document
        .querySelector("#testButton")
        .addEventListener("click", (event) =>{
            event.preventDefault();
            event.stopPropagation();
            console.log("MAKE MY DAY.");
             });
})();