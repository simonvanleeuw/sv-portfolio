import React, { Component } from 'react';
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TextBlock from '../components/TextBlock'
import Notification from '../components/Notification'
import { heroHome, textBlockHome } from '../data/Data'

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="grid">
                    <Hero heroContent={heroHome} />
                    <TextBlock title='Services' textItems={textBlockHome}/>
                </div>
                <Footer />
                <Notification/>
            </div>
        )
    }
}

export default HomePage;