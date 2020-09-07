import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

class ContactPage extends React.Component{

  

    render(){

        return(
            <div>
                <Hero title={this.props.title}/>
    
                <Content>
                <p>
                <a href = "mailto: philip.azf@gmail.com">Send Email</a>
                <br></br>
                <a href = "https://github.com/philipazf">GitHub</a> 
                </p>
                </Content>
            </div>
        );

    }
    

}

export default ContactPage;
