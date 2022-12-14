
import Link from 'next/link';
import Heading from '../Heading/heading';
import Paragraph from '../Paragraph/paragraph';
import styles from './../Challenges/challenges.module.scss'

const ChallengesStep = ({ challengeSteps }) => {

    const getPagePath = (path) => {
        path.replace('/content/dam/content-fragments/staying-sharp/en/challenges-mobile-app/', '');
        path = path.split('/');
        return path[path.length - 1];
    }

    const getTitle = (step) => {
        const { title, stepNumber } = step;
        if(title.indexOf('Quiz') > -1) {
            return getPagePath(step._path)
        }
        return `step-${stepNumber}`;
    }

    const handleNavigate = (step, challengeSteps) => {
        const title = getTitle(step)
        let path = challengeSteps?.challengePath._path.replace("/content/staying-sharp/en/home/challenges/", '');
        return `/challenges/${path}/${title}`;
    }


    return (
        <>
            <center>
                <h2>Challenge Overview </h2>
                <h4>{challengeSteps?.challengeTitle} </h4>
                <p>{challengeSteps?.overviewCopy?.plaintext}</p>
            </center>
            <ul>
                {
                    challengeSteps?.stepsPaths.map((step, index) => {
                        return (
                            <li key={`${index}-'index`} className={styles.challenges}>
                                <img style={{ width: '150px', height: '100%' }} className="challenges-item-image" src={step.pageImagePath?._path} alt="" />
                                <div>
                                    <Heading>{step.title}</Heading>
                                    <Paragraph>{step.shortDescription?.html}</Paragraph>
                                </div>
                                <Link href={handleNavigate(step, challengeSteps)}>
                                    <button>start</button>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    )
}

export default ChallengesStep;