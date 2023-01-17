import React, { useState } from 'react';
import SideBar from '../SideBar/sideBar';
import Footer from '../Footer/footer';
import styles from './challengesLayout.module.scss';
import { useRouter } from 'next/router'
import ChallengeContent from '../ChallengeContent/challengeContent';

export default function ChallengesLayout({ challengeStepContent, challengeName, params }) {
    console.log(challengeStepContent, 'steps content');
    // console.log(challengeName);
    // console.log(params);
    const [counter, setCounter] = useState(0);
    const router = useRouter();

    const sideBarProps = {
        title: challengeStepContent.shortDescription.html,
        image: challengeStepContent?.pageImagePath?._path,
        stepNumber: challengeStepContent.stepNumber,
        path: `challenges/${challengeName}`
    }

    const getActivePathIndex = (challengeStepContent) => {
        console.log(challengeStepContent, 'title');
        if (challengeStepContent.title.includes('Quiz')) {
            return 0;
        } else {
            let counter = -1;
            challengeStepContent?.subContentTypePages?.forEach((item, i) => {
                const pagePath = item._path.split('challenges-mobile-app')[1];
                if (router.asPath.split('challenges')[1] == pagePath) {
                    counter = i;
                }
            });
            return counter > -1 ? counter : null;
        }
    };

    const getChallengeContentProps = () => {
        debugger
        const activePathIndex = getActivePathIndex(challengeStepContent);
        console.log(activePathIndex, challengeStepContent);
        return { path: challengeStepContent.subContentTypePages[activePathIndex]._path,  challengePath: `challenges/${challengeName}` }
    }

    const handleNextStep = () => {
        const stepPathsList = challengeStepContent.subContentTypePages;
        const activePathIndex = getActivePathIndex(stepPathsList);
        let nextPath = `challenges/${challengeName}`;
        if (activePathIndex !== null && stepPathsList[activePathIndex+1]) {
            nextPath = stepPathsList[activePathIndex+1]._path.split('challenges-mobile-app')[1];
        } else if (activePathIndex == null) {
            nextPath = stepPathsList[0]._path.split('challenges-mobile-app')[1];
        } else {
            nextPath = `/${challengeName}`;
        }
        router.push(
            `/challenges${nextPath}`
        );
    }

    const handleBackStep = () => {
        const stepPathsList = challengeStepContent.subContentTypePages;
        const activePathIndex = getActivePathIndex(stepPathsList);
        let prevPath = `challenges/${challengeName}`;
        if (activePathIndex !== null && stepPathsList[activePathIndex-1]) {
            prevPath = stepPathsList[activePathIndex-1]._path.split('challenges-mobile-app')[1];
        } else if (activePathIndex == null) {
            prevPath = stepPathsList[0]._path.split('challenges-mobile-app')[1];
        } else {
            prevPath = `/${challengeName}`;
        }
        router.push(
            `/challenges${prevPath}`
        );
    }
   
    return (
        <main className={styles.main}>
            <SideBar data={sideBarProps}/>
            <ChallengeContent data={getChallengeContentProps()} />
            <Footer onNext={handleNextStep} onBack={handleBackStep}/>
        </main>
    )
}
