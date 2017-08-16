import React from 'react';
import './home.scss';

export default class HelloWorld extends React.Component{
    render(){
        return (
            <div>
                <h1 className='home'>Hello react starter</h1>
            </div>
        );
    }
}