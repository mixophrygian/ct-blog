import React from 'react';
import { Link } from 'react-router';
/* eslint max-len: 0 */
/* eslint no-trailing-spaces: 0 */

// Not found page component
export default class Distortions extends React.Component {
  
  currentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  // render
  render() {
    return (
      <div className="page-about">
        <h2> Cognitive Distortions </h2>
        <p><i>Psst, this is a reference page.  For an introduction, see 
         <Link to={'/about'}> What is This?</Link>
        </i></p>
        <br/>
        <ul>
          <li>
            <h4>All-or-Nothing thinking</h4>
            <p>You see things in black-and-white categories.  If your performance falls short of perfect, you see yourself as a total failure.</p>
            <br />
          </li>
          <li>
            <h4>Overgeneralization</h4>
            <p>You see a single negative event as a never-ending pattern of defeat.</p>
            <br />
          </li>
          <li>
            <h4>Mental Filter</h4>
            <p>You pick out a single negative detail in any situation and dwell on it exclusively, thus perceiving that the whole situation is negative.</p>
            <br />
          </li>
          <li>
            <h4>Disqualifying the Positive</h4>
            <p>You reject positive experiences by insisting they "don't count" for some reason.  In this way you can maintain a negative belief.</p>
            <br />
          </li>
          <li>
            <h4>Jumping to Conclusions</h4>
            <p>You make a negative interpretation even thought there are no definite facts that convincingly support your conclusion.</p>
            <ul>
              <li>
                <b>Mind Reading</b>
                <p>You arbitrarily conclude that someone is reacting negatively to you and you don't bother to check this out.</p>
              </li>
              <li>
                <b>Fortune Telling</b>
                <p> You anticipate that things will turn out badly and you feel convinced that your prediction is an already-established fact.</p>
              </li>
            </ul>
            <br />
          </li>
          <li>
            <h4>Magnification and Minimization</h4>
            <p>You exaggerate the importance of things (such as a minor goof-up or someone else's achievement) or you inappropriately shrink things until they appear tiny (your own good qualities or another person's imperfections).</p>
            <br />
          </li>
          <li>
            <h4>Emotional Reasoning</h4>
            <p>You take your emotions as evidence for the truth.  "I feel like a dud, therefore I am a dud."</p>
            <br />
          </li>
          <li>
            <h4>"Should" Statements</h4>
            <p> You try to motivate yourself by saying "I should do this" or "I must do that." causing you to feel pressured or resentful. When the reality of your own behavior falls short of your standards, your shoulds and shouldn'ts create self-loathing, shame, and guilt.</p>
            <br />
          </li>
          <li>
            <h4>Labeling</h4>
            <p>Personal labeling means creating a completely negative self-image based on your mistakes.  It's an extreme form of overgeneralization.  If you describe your mistakes with sentences beginning with "I'm a ..." you are probably labeling.  "I'm a born loser." "I'm a failure."</p>
            <br />
          </li>
          <li>
            <h4>Personalization</h4>
            <p>You assume responsibility for a negative incident, even when there is no basis for doing so.  You arbitrarily conclude that what happened was your fault or reflects your inadequacy even when you were not responsible for it.  Personalization can cause crippling guilt and a paralyzing sense of responsibility.  It confuses influence over others with control over others. </p>
            <br />
          </li>
        </ul>
        
        <hr /> 
      </div>
    );
  }
}
