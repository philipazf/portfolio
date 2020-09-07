import React from'react';

import reactImage from '../assets/images/reactImage.png';
import hackathon from '../assets/images/hackathon.jpg';
import future from '../assets/images/future.jpg'
import Card from '../components/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Skill Exchange',
                    subTitle: 'CRUD app made in 48 hour hackathon',
                    imgSrc: hackathon,
                    link: 'https://github.com/philipazf/devs-hackathon2020',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Portfolio Website',
                    subTitle: 'Landing site built on react',
                    imgSrc: reactImage,
                    link: '/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'More to Come!',
                    subTitle: 'Future Projects',
                    imgSrc: future,
                    link: 'https://www.marketwatch.com/investing/stock/tsla',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id,card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map( item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id}/>
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around"> 
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel