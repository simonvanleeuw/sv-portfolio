import React, {Component} from 'react';
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TextBlock from '../components/TextBlock'
import Notification from '../components/Notification'
import { heroWork, textBlockWork } from '../data/Data';

class WorkPage extends Component {
    render() {
        return (
            <div>
                <div className="grid">
                    <Hero heroContent={heroWork} />
                    <TextBlock title='Services' textItems={textBlockWork}/>
                </div>
                <Footer />
                <Notification/>
            </div>
        )
    }
}

export default WorkPage;