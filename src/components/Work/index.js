import React from 'react';
import './index.scss';

const Work = () => {
    const workList = [
        {
            id: 1,
            title: 'Talentdome',
            description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
        },
        {
            id: 2,
            title: 'Maryland Judiciary',
            description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
        },
        {
            id: 3,
            title: 'Maryland Judiciary CMS(Content Management System)',
            description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
        },
        {
            id: 4,
            title: 'Talentdome / Infojini Chatbot',
            description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
        },
        {
            id: 5,
            title: 'Talentdome / Infojini Chatbot',
            description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
        }
    ];

    return (
        <div className="work-page" id="work">
            <div className="content-header"> My work </div>
            <div className="content-header__design">
                <div /> 
                <div />
                <div />
            </div> 
            <div className="work-content">
                {
                    workList.map(({ title, description }, index) => {
                        return (
                            <div className="work-list" key={index}>
                                <div className="title"> {title} </div>
                                <div className="description">
                                    {description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Work;