import React, { useEffect, useState } from 'react';
import Error from "../Error";
import Loading from '../Loading';
import styles from './quiz.module.scss'


const Quiz = (props) => {
    const {_path} = props.data
    const [counter, setCounter] = useState(0)
    let stepChildQuery =  `StayingSharpContentFragments/find-quiz-by-step-child-path${(encodeURIComponent(`;fragmentPath=${_path}`))}`
    const { loading, error, data } = useGraphQL('', stepChildQuery);

    // If there is an error with the GraphQL query
    if (error) return <Error errorMessage={error} />;

    // If data is null then return a loading state...
    if (loading) return <Loading />;


    const handleNextQus = () => {
        setCounter(counter + 1);
    }

    const handlePrevQus = () => {
        setCounter(counter - 1);
    }

    const getChallengeName = () => {
        let urlPath = props.path.replace('/content/dam/content-fragments/staying-sharp/en/challenges-mobile-app/', '');
        urlPath = urlPath.split('/');
        return urlPath[0]
    }


    return (
        <React.Fragment>
            <ul>
                {data.stepChildByPath.item.quiz.map((item, index) => {
                    return (
                        <div className={index === counter ? 'active' : 'not-active'}>
                            <label className='question-title'>{item.question.plaintext}</label>
                            <li className='question-list'>
                                <ul>
                                    {item.answers.map((ans, index) => {
                                        return (
                                            <li className='question-answer' data-score={item.scores[index]}>
                                                {ans}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        </div>
                    )
                })}
            </ul>
            <center>
            {(counter > 0) && (<button onClick={handlePrevQus}>Prev Question</button>)}
            {(counter < data.stepChildByPath.item.quiz.length ) && (<button onClick={handleNextQus}>Next Question</button>)}
            {(counter === data.stepChildByPath.item.quiz.length) && (<Link to={`/challenges/${getChallengeName()}`}><button >Submit</button></Link>)}
            </center>
        </React.Fragment>
    )
}

export default Quiz;