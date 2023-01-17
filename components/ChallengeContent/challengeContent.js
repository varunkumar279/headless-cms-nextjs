// import EmbededVideoPlayer from "../embededVideoPlayer/videoPlayer";
// import ModelLayout from "../ModalLayout/modelLayout";
// import Quiz from "../Quiz/quiz";
import aemHeadlessClient from "../../lib/aem-headless-client";
import { useState, useEffect } from "react";
import Quiz from "../Quiz/quiz";


function ChallengeContent(props) {
  const { challengePath, path } = props.data;
  let stepChildQuery;

  // const data = {"stepChildByPath":{"item":{"_path":"/content/dam/content-fragments/staying-sharp/en/challenges-mobile-app/digital-declutter/step-1/quiz","stepNumber":"1","contentType":"PREQUIZ","quiz":[{"question":{"plaintext":"Our digital devices can suck up a lot of our time. How often are you on your devices in a typical day?"},"answers":["Never","1 to 2 hours a day","3 to 5 hours a day","I check my device about every 5 minutes"],"scores":["4","3","2","1"]},{"question":{"plaintext":"You start to check Facebook or surf the net and before you know it, an hour or more has gone by. How often do you lose track of time when using your devices?"},"answers":["Never ","Sometimes","Fairly Often","Always"],"scores":["4","2","1","0"]},{"question":{"plaintext":"When you hear the ding of a new text, email or other notification, how often are you able to ignore it and continue on the task at hand?"},"answers":["Never","Sometimes","Fairly Often","Always"],"scores":["4","3","2","1"]},{"question":{"plaintext":"When you don’t respond to notifications or messages immediately, do you feel anxious or distracted until you do?"},"answers":["Never","Sometimes","Fairly Often","Always"],"scores":["4","3","2","1"]},{"question":{"plaintext":"To fill the time while you wait or because you’re bored, how often do you mindlessly scroll through news or social media sites?"},"answers":["Never","Sometimes","Fairly Often","Always"],"scores":["4","3","2","1"]},{"question":{"plaintext":"You’re out to dinner with friends, but you’re still checking your phone. How often are you looking at a screen while doing other things that require your attention?"},"answers":["Never","Sometimes","Fairly Often","Always"],"scores":["4","3","2","1"]}]}}};

	if (path.indexOf("quiz") > -1) {
		stepChildQuery = `StayingSharpContentFragments/find-quiz-by-step-child-path${encodeURIComponent(
		`;fragmentPath=${path}`
		)}`;
	} else {
		stepChildQuery = `StayingSharpContentFragments/find-step-child-by-path${encodeURIComponent(
		`;fragmentPath=${path}`
		)}`;
	}
	console.log(stepChildQuery, 'asf')

	const getChallenge = () => {
		const response = aemHeadlessClient.getChallengesChildStepContent(stepChildQuery);
		console.log(response, 'content');
	}


  // If there is an error with the GraphQL query
//   if (error) return <Error errorMessage={error} />;

//   if (loading) return <Loading />;

//   const contentType = data?.stepChildByPath?.item?.contentType

  return (
    <>
      <section style={{ padding: "20px" }}>
        Test
		<button onClick={() => getChallenge()}></button>
        {/* <center>
			<h2>test</h2>
			{contentType === "VIDEO" && (<EmbededVideoPlayer videoId={data.stepChildByPath.item.videoId}/>)}
			{contentType === "MODEL" && (<ModelLayout data={data.stepChildByPath.item}/>)}
		</center>
		{contentType === "PREQUIZ" && (<Quiz data={data.stepChildByPath.item} path={challengePath}/>)} */}
      </section>
    </>
  );
}

export default ChallengeContent;
