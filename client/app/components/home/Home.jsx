import React from 'react';
import './home.scss';
import FaBeer from 'react-icons/fa/beer';

export default class Home extends React.Component{
    render(){
        return (
            <div>
                <h1 className='home'>Hello react starter</h1>
                <h3>Lets have some <FaBeer /></h3>
            </div>
        );
    }
}