import aemHeadlessClient from '../../../lib/aem-headless-client';
import ChallengesStep from '../../../components/ChallengesStep/challengesStep';

export default function ChallengesLanding({ challengeSteps }) {
    return (
        <ChallengesStep challengeSteps={challengeSteps}/>
    )
}

export async function getStaticPaths() {
    const challengesList = 'StayingSharpContentFragments/challenges';
    const challengesPaths = await aemHeadlessClient.getChallengesPaths(challengesList);

    return {
        paths: challengesPaths,
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const challengeName = params.challengeLanding;
    const challengesList = 'StayingSharpContentFragments/challenges';
    const res = await aemHeadlessClient.getChallengesStepsByName(challengeName, challengesList);
    const challengeSteps = res?.data?.challengeByPath?.item || null;

    if (!challengeSteps) {
        return {
        notFound: true,
        }
    } 

    return {
        props: {
            challengeSteps
        }
    };
}
