function pyramid(){
    var lines = 5;
    var triangle = "";
    for(var i = 0; i < lines; i++){
        for(var j = i; j < lines; j++) {
            triangle += " "
        }
        for(var j = 0; j <= i; j++) {
            triangle += "X "
        }
        triangle += "<br>"
    }
    console.log(triangle)
} pyramid(5)