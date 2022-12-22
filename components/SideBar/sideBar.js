
import Link from 'next/link';
import Heading from '../Heading/heading';
import Paragraph from '../Paragraph/paragraph';
import styles from './sideBar.module.scss'

function SideBar(props) {
    const { title, stepNumber, image, path } = props.data;
    console.log(path);
    return (
        <aside className={styles.sideNav}>
            <div>
                <img style={{ width: '100%' }} src={image} alt=""></img>
                <div>
                    <center><Heading>{title}</Heading></center>
                    <center><Paragraph>{`step-${stepNumber}`}</Paragraph></center>
                </div>

                <Link href={path}>
                    <button>Back to overview</button>
                </Link>
            </div>
        </aside>
    )
}

export default SideBar
