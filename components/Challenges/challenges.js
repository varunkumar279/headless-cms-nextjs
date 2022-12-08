import Heading from "../Heading/heading";
import Paragraph from "../Paragraph/paragraph";
import Link from 'next/link'
import styles from './challenges.module.scss'
// import "./challenges.scss";


const Challenges = ({ challengesList }) => {
    return (
        <>
            <ul>
                {challengesList.map((challenge, index) => {
                    return (
                        <li key={`${index}-'index`} className={styles.challenges}>
                            <img
                                className="challenges-item-image"
                                src={challenge._path}
                                alt=""
                            />
                            <Link href={`/challenges/${challenge.challengePath?._path.replace('/content/staying-sharp/en/home/challenges/', '')}`} >
                                <div>
                                    <div>
                                        <Heading>{challenge.challengeTitle}</Heading>
                                        <Paragraph>{challenge.longDescription?.plaintext}</Paragraph>
                                    </div>
                                    <div>
                                        <button>start</button>
                                        0/{challenge.stepsPaths.length}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
          
        </>
    );
};

export default Challenges;
