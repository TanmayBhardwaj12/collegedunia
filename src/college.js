import React, {Component} from 'react';
import colleges from './frontendtask/colleges.json';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';

class College extends Component{
    constructor(props){
        super(props);
        this.state = {
            Colleges:colleges
        }
    }
    render(){
        console.log(this.state.Colleges.colleges);
        const cards = this.state.Colleges.colleges.map((college)=>{
            return (
                <div className="col-6 mt-10" key={college.college_name[-1]}>
                    <Rendercollege college={college}/>
                </div>
            )
        })
        return(
            <>
            <div className="container">
                <p>Colleges in North India</p>
                <div className="row">
                {cards}
                </div>
            </div>
            </>
        )
    }

}


function Rendercollege({college }) {
    const dest="./frontend/";
    return (
        <Card>
            <CardImg top width="100%" src={college.image} alt={college.college_name}/>
    <Button>{college.tags[0]}</Button>
            <CardBody>
            <CardTitle>{college['college_name']}</CardTitle>
            <CardSubtitle>{college.nearest_place[0]} | <span>{college.nearest_place[1]}</span></CardSubtitle>
            <CardText><span className="percent">93% Match : </span> {college.famous_nearest_places}</CardText>
            <div className="greenbox">
                {college.offertext}
            </div>
            <div className="right">
                {college.amenties[0]} &#9679; {college.amenties[1]}
            </div>
            </CardBody>
        </Card>
    );
}

export default College;