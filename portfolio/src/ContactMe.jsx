import SectionText from "./SectionText"

function ContactMe({onClick, font}){

    return (

        <SectionText onClick = {onClick} font = {font} text = "Contact Me" pos = {[3.75, 40, -29]}></SectionText>

    )

}

function ContactMeHtml(){

    return (

        <div id = "ccard" className = "containe" onClick = {function(e){e.stopPropagation();}}>
            <h4 style = {{color : "rgb(68, 60, 49)"}}>Hy Lac Nguyen</h4>
            <h6>Student at uw</h6>
            <h6>hl6nguye@uwaterloo.ca</h6>
            <div style = {{ display : "flex", flexWrap : "nowrap",width : "100%", height : "30px", justifyContent : "space-evenly"}}>
                <img src = "linkedin.png" className = "clinks" onClick = {function(){window.open("http://www.linkedin.com/in/hy-lac", "_blank")}}></img>
                <img src = "mail.png" className = "clinks" onClick = {function(){window.open("mailto:hl6nguye@uwaterloo.ca", "_blank")}}></img>
                <img src = "github.png" className = "clinks" onClick = {function(){window.open("https://github.com/kingMonkeh", "_blank")}}></img>
            </div>
        </div>

    )

}

export {ContactMe, ContactMeHtml}