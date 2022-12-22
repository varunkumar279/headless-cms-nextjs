import React, { useState } from 'react';
import SideBar from '../SideBar/sideBar';
import Footer from '../Footer/footer';
import styles from './challengesLayout.module.scss';
import { useRouter } from 'next/router'
// import ChallengeContent from '../ChallengeContent/challengesContent';

export default function ChallengesLayout({ challengeStepContent, challengeName, params }) {
    // console.log(challengeStepContent, 'steps content');
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

    const getChallengeContentProps = () => {
       return { path: challengeStepContent.subContentTypePages[counter]._path,  challengePath: `challenges/${challengeName}` }
    }

    const handleNextStep = () => {
        debugger;
        const list = challengeStepContent.subContentTypePages;
        list.length > counter && setCounter(counter + 1);
        let urlPath = getChallengeContentProps();
        urlPath = urlPath.path.split('/');
        urlPath = urlPath[urlPath.length - 1];
        router.push(
            `${router.asPath}/${urlPath}`
        );
    }

    const handleBackStep = () => {
       counter > 0 && setCounter(counter - 1);
       let urlPath = getChallengeContentProps();
       urlPath = urlPath.path.split('/');
       urlPath = urlPath[urlPath.length - 1]
       history.push(`./${urlPath}`, {
          pathstep: challengeStepContent._path,
          challengePath: `challenges/${challengeName}`
       });
    }
   
    return (
        <main className={styles.main}>
            <SideBar data={sideBarProps}/>
            {/* <ChallengeContent data={getChallengeContentProps()} /> */}
            <Footer onNext={handleNextStep} onBack={handleBackStep}/>
        </main>
    )
}
