import aemHeadlessClient from '../../../lib/aem-headless-client';
import ChallengesStep from '../../../components/ChallengesStep/challengesStep';

export default function ChallengesLanding({ challengeSteps }) {
    console.log(challengeSteps, 'steps');
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
    console.log(params, 'params');
    const challengeName = params.challengeLanding;
    const challengesList = 'StayingSharpContentFragments/challenges';
    const res = await aemHeadlessClient.getChallengesStepsByName(challengeName, challengesList);
    // console.log(res, 'challenges Steps')
    const challengeSteps = res?.data?.challengeByPath?.item || null;
    console.log(res?.data?.challengeByPath?.item, challengeSteps, 'testing');

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
