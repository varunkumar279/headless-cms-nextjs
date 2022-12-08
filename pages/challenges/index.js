import aemHeadlessClient from '../../lib/aem-headless-client';
import Challenges from '../../components/Challenges/challenges';

export default function ChallengeOverview({ challenges }) {
    console.log(challenges);
    return (
        <Challenges challengesList={challenges}/>
    )
}

export async function getServerSideProps() {
    let challengesList = 'StayingSharpContentFragments/challenges';
    const res = await aemHeadlessClient.getAllChallenges(challengesList);
    const challenges = res?.data?.challengeList?.items || [];

    if (!challenges.length) {
        return {
        notFound: true,
        }
    }
  
    return {
      props: {
        challenges
      }
    };
  }