function scrollTop(){
    let element = document.documentElement.scrollTop;
    //let x = element.scrollTop;

    if(element > 0){
        document.getElementById("navbar").classList.remove("transparent");
        document.getElementById("navbar").classList.add("black");
    }
    else {
        document.getElementById("navbar").classList.remove("black");
        document.getElementById("navbar").classList.add("transparent");
    }
}

