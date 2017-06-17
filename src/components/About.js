import React from 'react';
import { Link } from 'react-router';
/* eslint max-len: 0 */
/* eslint no-trailing-spaces: 0 */

// Not found page component
export default class About extends React.Component {
  
  currentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  // render
  render() {
    return (
      <div className="page-about">
        <h1>What is this?</h1>
        <blockquote>
          <i>
            "Your thoughts create your emotions; therefore, your emotions cannot prove
          that your thoughts are accurate."
          </i>
          <br/>
          -David Burns
        </blockquote>

        <p>
          The Automatic Thought Journal is a tool designed to assist you in talking
           back to your own internal critic.  It is a short exercise that helps you
           to overcome the bad habit of negative self-talk.  Sometimes this self-talk
           can be so habitual and ingrained that these thoughts seem almost automatic;
           by consciously responding them, you can a) teach yourself to recognize
           these critical thoughts, b) learn why these thoughts may be distorted and
           c) develop a more realistic internal dialog for self-evaluation.
           One such way of responding is by stepping through the thought and
           systematically breaking it down into discrete sections.
           Doing so can make it easier to identify distortions that may be
            occurring and, as a result, consider a new reaction to a potentially
             upsetting situation. This is the essence of the automatic thought journal.
        </p>
        <h2>How it works</h2>
        <p>
          In the original triple-column version<a href="#firstAsterix">*</a>, there are only three steps: identify the self-critical thought, identify the cognitive distortion, and then try to respond to the thought rationally.  For instance, suppose you are late for an important meeting.  You are panicked and nervous. Ask yourself, "What thoughts are going through my mind right now?"  You might have been thinking "I never do anything right.  I'm always late." Write these down as part of the first step. You may have also thought "Everyone will look down on me.  This shows what a jerk I am." These are the MOST important thoughts to write down.  Second, identify the cognitive distortion(s) that could apply to these thoughts. (What's a cognitive distortion? <Link to={'/distortions'}>See below</Link>) Lastly, the most critical step in the exercise, is to substitute a more rational, less upsetting response. You cannot try to cheer yourself up by rationalizing or saying things you don't believe.  Instead, try to recognize the truth.  For example, in response to "I never do anything right" you could write: "Forget that! I do some things right and some wrong, just like everybody else.  I messed up on my meeting but let's not blow this up out of proportion." 
        </p> 
        
        <h3>What if I can't think of a rational response?</h3>
        <p>
          Forget about it for a few days and come back to it later.  The more you practice breaking down thoughts, the easier it will get.  Don't be afraid to ask other people how they would respond to an upsetting thought if you can't figure out the rational response on your own. 
        </p>
        
        <h3>Why not just use the original version?</h3>
        <p>
        In the three column version it's easy to intermingle emotional responses with both the situation and the cognitive distortion. By breaking down the first step into three sections, you can clearly separate the three to better identify a) the situation itself, e.g. "I forgot my friend's birthday", b) the thoughts that are simply emotional reactions, such as "I feel terrible", and c) the thoughts that are distorted conclusions "I'm no good."
        </p>
        
        <hr />
        
        <h2><Link to={'/distortions'}>Cognitive Distortions</Link></h2>
        <p>
        At the heart of this exercise is the ability to identify distorted conclusions that you may have been drawing about yourself or your life.* <Link to={'/distortions'}>Read over these distortions </Link> to get a feel for them and refer back to them when you are feeling upset.  This list is the key to clearing the fog of distorted thinking. 
        </p>
        <hr /> 
        <h2>Sources</h2>
        <p>
        Burns, David. Feeling Good (year)
        <br />
        <br />
        Beck, A. T., Rush, A. J., Shaw, B. F., & Emery, G. (1979). Cognitive therapy of depression. 1979. New York: Guilford Press
        </p>
        <p><span id="firstAsterix">*</span>This method was originally created by David Burns and termed the "triple-column technique" in his book "Feeling Good" (year), and later developed into a more elaborate version called the "Daily Record of Dysfunctional Thoughts" by Aaron Beck and his colleagues (Beck, Rush, Shaw & Emery, 1979).  This is the version that inspired this web application.  Because it's {this.currentYear()} and who has time for an elaborate work sheet on paper?<a href="#twoAsterixes">**</a>  For the best possible explanation of this exercise I highly recommend reading the original source - Feeling Good by David Burns.  
        </p> 
        <p><span id="twoAsterixes">**</span> Of course, if you prefer an analog version, many are available 
        <a href="https://psychologytools.com/daily-record-of-dysfunctional-thoughts.html"> here</a>.
        </p>
        <p>I try my best to correctly attribute all sources of original work and will gratefully welcome any corrections.</p>
        <h2>Disclaimer</h2>
        <p>
        I'm not a doctor and the explanation of this exercise is meant more as a refresher for those who have already been introduced rather than a complete, stand-alone explanation.  
        </p>
      </div>
    );
  }
}
