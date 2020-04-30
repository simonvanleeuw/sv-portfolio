import React, { Component } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TextBlock from '../components/TextBlock'
import Notification from '../components/Notification'
import { heroAbout, textBlockAbout } from '../data/Data'

class AboutPage extends Component {
    render() {
        return (
            <div>
                <div className="grid">
                    <Hero heroContent={heroAbout} />
                    <TextBlock title='Process' textItems={textBlockAbout}/>
                </div>
                <Footer />
                <Notification/>
            </div>
        )
    }
}

export default AboutPage;