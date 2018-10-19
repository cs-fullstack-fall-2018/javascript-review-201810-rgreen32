
function IntergerNumbersRange(a,b){
    var numbers = ""
    for(i = a +1; i<b; i++){
        numbers += i;
    }
    return numbers
}

function MultiplicationsTable(){
    var counter
    for(let i=1; i<=10; i++){
        counter = i
        let newstring = ""
        for(let x=1;x<=10;x++){
            newstring += (x * counter + " ")


        }
        console.log(newstring)
    }
}

function MultiplicationsTableOnDemand(counter){

    // for(let i=counter; i; i++){
    //
        let newstring = ""
        for(let x=1;x<=10;x++){
            newstring += (x * counter + " \n")


        }
        console.log(newstring)

}
MultiplicationsTableOnDemand(9)

function Calculation(){
    var sum =0
    var num = 0
    var string = ""
    while((num < 500)){
        sum +=num
        string += (num + " ")
        num +=23

    }
    console.log(string)
    console.log("Sum: "+ sum)
}

function max(a,b){
    if(a > b){
        console.log(a +" is the greater number")
    }else if(a === b){
        console.log("The numbers are equal")
    }else{
        console.log(b+" is the greater number")
    }
}

function maxOfThree(a,b,c){
    if (a > b){
        if(a > c){
            console.log(a + " is the greatest number")
        }
    }else if(b > a){
        if(b > c){
            console.log(b + " is the greatest number")
        }else{
            console.log(c + " is the greatest number")
        }

    }
}

function isVowel(char){
    char = char.toLowerCase()
    if (char ==="a" || char ==="e"|| char ==="i" || char ==="o" || char ==="u" || char ==="y" ){
        console.log(char + " is a vowel")
    }else{
        console.log(char + " is NOT a vowel")
    }
}

function getRGB(color){
    var r = color.slice(1,3);

    var g = color.slice(3,5);

    var b = color.slice(5,7);
    var hex = "0x"

    console.log(parseInt(hex+r), parseInt(hex+g), parseInt(hex+b))
}


function getRGBenhanced(color){

    var colors = {
        "#FF0000": "Red",
        "#FFFFFF": "White",
        "#000000": "Black",
        "#00FF00": "Green",
        "#0000FF": "Blue"
    }
    var r = color.slice(1,3);

    var g = color.slice(3,5);

    var b = color.slice(5,7);
    var hex = "0x"

    var mycolor = colors[color];



    console.log(parseInt(hex+r), parseInt(hex+g), parseInt(hex+b), mycolor)
}




