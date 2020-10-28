import React from 'react';
import appleLogo from '../../images/apple-logo.png';
import jsImg from '../../images/js.png';
import cssImg from '../../images/css.png';
import htmlImg from '../../images/html.png';
import sassImg from '../../images/sass.png';
import ReactImg from '../../images/react.png';
import angularImg from '../../images/angular.png';
import bootstrapImg from '../../images/bootstrap.png';
import ReactNativeImg from '../../images/react-native.png';
import './index.scss';

const Skills = () => {

    const skillsList = [
        {id: 1, title: 'Html', imgSrc: htmlImg},
        {id: 2, title: 'css', imgSrc: cssImg},
        {id: 3, title: 'sass', imgSrc: sassImg},
        {id: 4, title: 'bootstrap', imgSrc: bootstrapImg},
        {id: 5, title: 'Js', imgSrc: jsImg},
        {id: 6, title: 'React Js', imgSrc: ReactImg},
        {id: 7, title: 'React native', imgSrc: ReactNativeImg},
        {id: 8, title: 'angular Js', imgSrc: angularImg}
    ];

    return (
        <div className="skills-page" id="skills">
            <div className="content-header"> Technical Skills </div>
            <div className="content-header__design">
                <div /> 
                <div />
                <div />
            </div> 
            <div className="introduction"> 
                Lorem ipsum dolor sit unique.Lorem ipsum dolor sit unique.
                Lorem ipsum dolor sit unique.Lorem ipsum dolor sit unique.
                Lorem ipsum dolor sit unique.Lorem ipsum dolor sit unique.
                Lorem ipsum dolor sit unique.Lorem ipsum dolor sit unique.
            </div>
            <div className="skills-content">
                <div className="macpc">
                    <div className="display"> 
                        <div className="skills-list">
                            {
                                skillsList.map(({ id, title, imgSrc }, index) => {
                                    return (
                                        <div key={index} className={id === 7 
                                            ? "react-native skills" : "skills"}>
                                            <img src={imgSrc} alt="images" />
                                            <div className="image-title">
                                                {title}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="logo">
                        <img src={appleLogo} alt="logo" />
                    </div>
                    <div className="stand" />
                </div>
            </div>
        </div>
    )
}

export default Skills;