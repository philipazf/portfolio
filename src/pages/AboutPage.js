import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return(
        <div>
            <Hero title={props.title}/>

            <Content>
            <p>Hi, my name is Philip and i'm a second year computer science student at The University of Auckland.
            I am experienced with web development (HTML,CSS,JS,JS frameworks i.e. react) 
                and general programming (C, Python, Java, Bash/Unix Shell). 
                </p>
                <p>After being recently exposed to the information
                security sector I have decided to focus learning about the field such as completing simple CTF challenges/wargames and am practicing HackTheBox pentesting as well
                as setting up my own homelab to experiment with. Papers which I have studied at university which are of 
                relevance include an Operating Systems paper (Which I parallelised with POSIX threads and fork) and a 
                Computer Systems Paper (Assembly level programming).</p>
            <p>I am constantly learning new things and am excited to see what kind of future I create for my self :)
                
            </p>
            </Content>
        </div>
    );

}

export default AboutPage;
