function venuenumber(){
    var x = document.getElementById("venue");
    var ven= document.getElementById("venue-number");
    if(x.value=="venue1" ||x.value=="venue2" ||x.value=="venue3" ||x.value=="venue4" ||x.value=="venue5")
    {
        ven.style.display="block";
    }
    else{
        ven.style.display="none";
    }
}
