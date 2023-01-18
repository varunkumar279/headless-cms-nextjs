import aemHeadlessClient from '../../../../lib/aem-headless-client';
import ChallengesLayout from '../../../../components/ChallengesLayout/challengesLayout';

export default function Steps({ challengeStepContent, challengeName, params }) {
    console.log('testing');
   
    return (
        <ChallengesLayout challengeStepContent={challengeStepContent} challengeName={challengeName} params={params}/>
        // <div></div>
        )
}

export async function getStaticPaths() {

    return {
        paths: [],
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const challengeName = params.challengeLanding;
    console.log(params, 'params');
    const step = params.steps;
    const challengesList = 'StayingSharpContentFragments/challenges';
    const res = await aemHeadlessClient.getChallengesStepContent(challengeName, step, challengesList);
    const challengeStepContent = res?.data?.stepByPath?.item || null;
    console.log(res, challengeStepContent, 'challengeStepContent');

    if (!challengeStepContent) {
        return {
        notFound: true,
        }
    } 

    return {
        props: {
            challengeStepContent,
            challengeName,
            params
        }
    };
}
