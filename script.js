function menu() {
    const x = document.getElementsByClassName("nav-mobile-slidein")[0];
    if (x.style.display === "flex") {
        x.style.display = "none";
        console.log("Done");
    } else {
        x.style.display = "flex";
    }
} 
