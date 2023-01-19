    function leaves(){
        pantsInfo.style.visibility = "hidden"
        pantsInfo.style.height = "0px"
        suit.style.visibility = "hidden"
        suit.style.height = "0px"
        shirtsInfo.style.visibility = "hidden"
       shirtsInfo.style.height = "0px"
       sweatersInfo.style.visibility = "hidden"
       sweatersInfo.style.height = "0px"
       jacketsInfo.style.visibility = "hidden"
       jacketsInfo.style.height = "0px"
       shoesInfo.style.visibility = "hidden"
       shoesInfo.style.height = "0px"
       accsInfo.style.visibility="hidden"
       accsInfo.style.height="0px"
    }
    let accsInfo = document.getElementById("accsInfo");
    let shoesInfo = document.getElementById("shoesInfo");
    let jacketsInfo = document.getElementById("jacketsInfo");
     let suit = document.getElementById("suitsInfo");
    let shirtsInfo = document.getElementById("shirtsInfo");
    let pantsInfo =document.getElementById("pantsInfo");
    let sweatersInfo = document.getElementById("sweatersInfo")
    function bigImg(){
        shirtsInfo.style.visibility = "visible"
        shirtsInfo.style.height="auto"
        // shirtsInfo.body.style.background.filter = "blur(4px)";
    }
    function suits(){
        suit.style.height="auto"
        suit.style.visibility = "visible"
    }
    function pantInfo(){
       pantsInfo.style.visibility="visible"
       pantsInfo.style.height="auto"

    }
    function sweaterInfo(){
        sweatersInfo.style.visibility = "visible"
        sweatersInfo.style.height="auto"

    }
    function jacketInfo(){
        jacketsInfo.style.height="auto"
        jacketsInfo.style.visibility ="visible"
    }
    function shoeInfo(){
        shoesInfo.style.height="auto"
        shoesInfo.style.visibility="visible"
    }
    function accInfo(){
        accsInfo.style.height="auto"
        accsInfo.style.visibility="visible"
    }
leaves()