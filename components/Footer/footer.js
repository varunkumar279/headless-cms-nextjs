import Link from 'next/link';
import styles from './footer.module.scss'

const Footer = (props) => {
    const { onNext, onBack } = props;
    const handlePressNextStep = () => {
        onNext();
    }
    const handlePressBackStep = () => {
        onBack();
    }
    return (
        <>
            <footer className={styles.footer}>
                <center>
                    <button onClick={handlePressBackStep}>Back</button>
                </center>
                <center>
                 <button onClick={handlePressNextStep}>NEXT</button>
                </center>
            </footer>
        </>
    )
}

export default Footer;