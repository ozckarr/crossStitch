window.addEventListener('load', background);


let sliderHeight = document.getElementById("sliderHeight");
let sliderWidth = document.getElementById("sliderWidth");

let sliderHeightOutput = document.getElementById("sliderHeightOutput");
let sliderWidthOutput = document.getElementById("sliderWidthOutput");

let backgroundHeight = 20;
let backgroundWidth = 20;

sliderHeightOutput.innerHTML = sliderHeight.value;
sliderWidthOutput.innerHTML = sliderWidth.value;


sliderHeight.oninput = function() {
    sliderHeightOutput.innerHTML = this.value;
    backgroundHeight = this.value;
    let crossStitchTable = document.getElementById("crossStitchTable");
    crossStitchTable.parentNode.removeChild(crossStitchTable);
    background(backgroundWidth);
}

sliderWidth.oninput = function() {
    sliderWidthOutput.innerHTML = this.value;
    backgroundWidth = this.value;
    let crossStitchTable = document.getElementById("crossStitchTable");
    crossStitchTable.parentNode.removeChild(crossStitchTable);
    background(backgroundWidth);
}




function background(){
    let table = document.createElement("table");
    table.setAttribute("id", "crossStitchTable")

        for (let i = 1; i < backgroundHeight; i++) {
            let tr = document.createElement('tr');
            for (let j = 1; j < backgroundWidth; j++) {
                let td = document.createElement('td');
                if (i%2 == j%2) {
                    let cellId = i+ ":" +j;
                    td.className = "backgroundVer";
                    td.setAttribute("onclick", "backgroundVer(event)");
                    td.setAttribute("id", cellId);
                } else {
                    let cellId = i+ ":" +j;
                    td.className = "backgroundHor";
                    td.setAttribute("onclick", "backgroundVer(event)");
                    td.setAttribute("id", cellId);
                }
                tr.appendChild(td);
            }
        table.appendChild(tr);
        }
    document.querySelector('.crossStitchBackground').append(table);
}



function backgroundVer(event){
    if (document.querySelector('.crossStitchColorBlack:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerBlack.jpg')";
    } else if (document.querySelector('.backgroundHorDaGrey:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerDaGrey.jpg')";
    } else if (document.querySelector('.crossStitchColorDaBrown:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVarDaBrown.jpg')";
    } else if (document.querySelector('.crossStitchColorRed:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerRed.jpg')";
    } else if (document.querySelector('.crossStitchColorOrange:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerOrange.jpg')";
    } else if (document.querySelector('.crossStitchColorDaGreen:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerDaGreen.jpg')";
    } else if (document.querySelector('.crossStitchColorBlue:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerBlue.jpg')";
    } else if (document.querySelector('.crossStitchColorDaPurple:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerGreen.jpg')";
    } else if (document.querySelector('.crossStitchColorWhite:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerWhite.jpg')";
    } else if (document.querySelector('.crossStitchColorLiGrey:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerLiGrey.jpg')";
    } else if (document.querySelector('.crossStitchColorLiBrown:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerLiBrown.jpg')";
    } else if (document.querySelector('.crossStitchColorPink:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerPink.jpg')";
    } else if (document.querySelector('.crossStitchColorPink:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerPink.jpg')";
    } else if (document.querySelector('.crossStitchColorGreen:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerGreen.jpg')";
    } else if (document.querySelector('.crossStitchColorLiBlue:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerLiBlue.jpg')";
    } else if (document.querySelector('.crossStitchColorLiPurple:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVerLiPurple.jpg')";
    } else if (document.querySelector('.crossStitchColorReset:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVer.jpeg')";
    } else {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundVer.jpeg')";
    }
}

function backgroundHor(event){
    if (document.querySelector('.crossStitchColorBlack:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorBlack.jpg')";
    } else if (document.querySelector('.backgroundHorDaGrey:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorDaGrey.jpg')";
    } else if (document.querySelector('.crossStitchColorDaBrown:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorDaBrown.jpg')";
    } else if (document.querySelector('.crossStitchColorRed:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorRed.jpg')";
    } else if (document.querySelector('.crossStitchColorOrange:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorOrange.jpg')";
    } else if (document.querySelector('.crossStitchColorDaGreen:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorDaGreen.jpg')";
    } else if (document.querySelector('.crossStitchColorBlue:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorBlue.jpg')";
    } else if (document.querySelector('.crossStitchColorDaPurple:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorGreen.jpg')";
    } else if (document.querySelector('.crossStitchColorWhite:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorWhite.jpg')";
    } else if (document.querySelector('.crossStitchColorLiGrey:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorLiGrey.jpg')";
    } else if (document.querySelector('.crossStitchColorLiBrown:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorLiBrown.jpg')";
    } else if (document.querySelector('.crossStitchColorPink:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorPink.jpg')";
    } else if (document.querySelector('.crossStitchColorYellow:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorYellow.jpg')";
    } else if (document.querySelector('.crossStitchColorGreen:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorGreen.jpg')";
    } else if (document.querySelector('.crossStitchColorLiBlue:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorLiBlue.jpg')";
    } else if (document.querySelector('.crossStitchColorLiPurple:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHorLiPurple.jpg')";
    } else if (document.querySelector('.crossStitchColorReset:checked')) {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHor.jpeg')";
    } else {
        document.getElementById(event.target.id).style.backgroundImage = "url('./images/backgroundHor.jpeg')";
    }
}

