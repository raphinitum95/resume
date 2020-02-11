import React, {Component} from 'react';
import TypingComponent from "../Typed/Typed";
import styles from'./Home.module.scss';
import UT from "../../assets/images/UT.jpg"

class Home extends Component {
    render() {
        return (
            <div id='home' className={styles.container}>
                <div id={styles.overlay}/>
                <img src={UT} alt={""} />

                <h1 className={styles.typing}>
                    <TypingComponent
                        strings={[
                            'I\'m a<br><b>UT Grad</b>',
                            'I\'m a<br><b>Software Engineer</b>',
                            'I\'m a<br><b>Full Stack Engineer</b>',
                            'I\'m a<br><b>Developer</b>',
                            'I\'m a<br><b>Programmer</b>',
                            'I\'m a<br><b>Pianist</b>',
                            'I\'m a<br><b>Singer</b>',
                            'I\'m an<br><b>Old Soul</b>']}
                    />
                </h1>
            </div>
        );
    }
}

export default Home