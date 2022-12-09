// import React from 'react';
// import Heading from '../Heading/heading';
// import Paragraph from '../Paragraph/paragraph';
// import { useLocation, useHistory } from 'react-router-dom'
// import Error from '../Error';
// import Loading from '../Loading';
// import '../Challenges/challenges.scss';
// import useGraphQL from '../../api/useGraphQL';

const ChallengesStep = () => {
    return (
        <div>Challenges Step Page</div>
    );
    // const location = useLocation()
    // const history = useHistory();
    // let challengePath;
    // if(!location.state){
    //     challengePath = `/content/dam/content-fragments/staying-sharp/en/challenges-mobile-app/${window.location.pathname.split('/')[2]}`;
    // }else {
    //     challengePath = location.state.challengePath;
    // }
    

    // let challengesStepList = challengePath && `StayingSharpContentFragments/find-challenge-by-path${(encodeURIComponent(`;fragmentPath=${challengePath}`))}`;


    // const { loading, error, data } = useGraphQL('', challengesStepList);
    // //If there is an error with the GraphQL query
    // if (error) return <Error errorMessage={error} />;

    // //If data is null then return a loading state...
    // if (loading) return <Loading />;


    // const getPagePath = (path) => {
    //     path.replace('/content/dam/content-fragments/staying-sharp/en/challenges-mobile-app/', '');
    //     path = path.split('/');
    //     return path[path.length - 1];
    // }

    // const getTitle = (step) => {
    //     const { title, stepNumber } = step;
    //     if(title.indexOf('Quiz') > -1) {
    //         return getPagePath(step._path)
    //     }
    //     return `step-${stepNumber}`;
    // }

    // const handleNavigate = (e, step) => {
    //     const title = getTitle(step)
    //     let path = data?.challengeByPath?.item.challengePath._path.replace("/content/staying-sharp/en/home/challenges/", '');
    //     history.push(`/challenges/${path}/${title}`, {
    //         pathstep: step._path,
    //         challengePath: challengePath
    //     });
    // }


    // return (
    //     <>
    //         <center>
    //             <h2>Challenge Overview </h2>
    //             <h4>{data?.challengeByPath?.item.challengeTitle} </h4>
    //             <p>{data?.challengeByPath?.item.overviewCopy.plaintext}</p>
    //         </center>
    //         <ul>
    //             {
    //                 data?.challengeByPath?.item.stepsPaths.map((step, index) => {
    //                     return (
    //                         <li key={`${index}-'index`} className="challenges">
    //                             <img style={{ width: '150px', height: '100%' }} className="challenges-item-image" src={step.pageImagePath?._path} alt="" />
    //                             <div>
    //                                 <Heading>{step.title}</Heading>
    //                                 <Paragraph>{step.shortDescription?.html}</Paragraph>
    //                             </div>
    //                             <div>
    //                                 <button onClick={(e) => handleNavigate(e, step)}>start</button>
    //                             </div>
    //                         </li>
    //                     );
    //                 })
    //             }
    //         </ul>
    //     </>
    // )
}

export default ChallengesStep;