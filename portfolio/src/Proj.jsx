import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function Proj({title, text, img, tech}){

    const [hovered, setHovered] = useState(false);

    return (
        <Card onMouseOver = {function(){setHovered(true)}} onMouseLeave = {function(){setHovered(false)}} 
            style={{ width: '18rem', scale : hovered ? "1.04" : "1", boxSizing : "border-box", borderWidth : hovered ? "5px 5px 5px 5px" : "3px 3px 3px 3px", borderColor : hovered ? "rgb(161, 56, 56)" : "rgb(148, 143, 143)", backgroundColor : "rgb(19, 17, 17)"}}>
            <Card.Img style = {{height : "165px"}} src={img} />
            <Card.Body>
            <Card.Title style = {{color : "white"}}>{title}</Card.Title>
            <Card.Text style = {{color : "rgb(148, 143, 143)"}}>
                {text}
            </Card.Text>
            <Card.Subtitle style = {{fontSize : 12, color : "rgb(70, 65, 65)"}}>{tech}</Card.Subtitle>
            </Card.Body>
        </Card>
    )

}