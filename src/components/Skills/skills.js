import React from 'react'
import './skills.css'
import eclipseimg from '../../assets/Eclipse-icon-vector-02.svg'
import javalogo from '../../assets/Java-logo-vector-01.svg'
import jslogo from '../../assets/JavaScript-logo-vector-01.svg'
import pylogo from '../../assets/Python-logo-vector-01.svg'
import reactlogo from '../../assets/React-logo-vector-01.svg'
import typescriptlogo from '../../assets/Typescript-logo-vector-02.svg'
import angularlogo from '../../assets/Angular-icon-vector-04.svg'
import vscode from '../../assets/Visual-studio-code-icon-vector-02.svg'
import nodelogo from '../../assets/Node-JS-logo-vector-01.svg'
import sqllogo from '../../assets/MySQL-logo-vector-01.svg'

const Skills = () => {
    return (
        <section id='skills'>
            <span id='Experience' className='skillTitle'>Skills</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={angularlogo} alt='' className='skillBarImg' />
                    <img src={reactlogo} alt='' className='skillBarImg' />
                    <img src={javalogo} alt='' className='skillBarImg' />
                    <img src={jslogo} alt='' className='skillBarImg' />
                    <img src={typescriptlogo} alt='' className='skillBarImg' />
                </div>
                <div className='skillBar'>
                    <img src={pylogo} alt='' className='skillBarImg' />
                    <img src={nodelogo} alt='' className='skillBarImg' />
                    <img src={sqllogo} alt='' className='skillBarImg' />
                    <img src={vscode} alt='' className='skillBarImg' />
                    <img src={eclipseimg} alt='' className='skillBarImg' />
                </div>
            </div>
        </section>
    )
}

export default Skills