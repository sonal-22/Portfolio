import React from 'react';
import html from '../images/html.png';
import react from '../images/react.png';
import SpringBoot from '../images/Spring.png';
import sql from '../images/sql.png';
import angular from '../images/Angular.png';
import UiUx from '../images/UiUx.png';
import css from '../images/css.png';
import PM from '../images/PM.jpg';
import '../Styles/Skills.css';

const skills = [
    { img: html, name: 'HTML' },
    { img: react, name: 'React' },
    { img: UiUx, name: 'UI/UX' },
    { img: angular, name: 'Angular' },
    { img: SpringBoot, name: 'Spring Boot' },
    { img: sql, name: 'SQL' },
    { img: css, name: 'CSS' },
    { img: PM, name: 'Project Management' }
];

const Skills = () => {
    return (
        <div id='skills' className='bg-gradient-to-br from-pink-100 to-white w-full h-auto flex items-center justify-center py-8'>
            <div className='max-w-[1000px] mx-auto p-4 w-full'>
                <div className='text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-gray-400 py-4 mb-3'>My Skills</p>
                </div>
                <div className='w-full overflow-hidden py-8 flex flex-wrap justify-center'>
                    {skills.map((skill, index) => (
                        <div key={index} className='min-w-[120px] shadow-md shadow-black transform hover:scale-105 transition-transform duration-300 mx-4 my-4 text-center'>
                            <img className='w-20 h-20 mx-auto' src={skill.img} alt={`${skill.name} icon`} />
                            <p className='my-4 text-gray-800 font-semibold'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
