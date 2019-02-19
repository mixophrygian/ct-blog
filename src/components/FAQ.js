import React from "react";
/* eslint max-len: 0 */
/* eslint no-trailing-spaces: 0 */

// Not found page component
export default class FAQ extends React.Component {
  // render
  render() {
    return (
      <div className="page-faq page">
        <h2>Do you collect my data?</h2>
        <p>
          Not at all. You can use the Automatic Thought Journal without creating an account or
          logging in. Entries are saved in local storage, which means that it gets saved on THIS
          browser on THIS device only. Don't believe me? Try opening up this same page in a
          different browser or a private browser. The entries will not be there!
        </p>
        <p>If you would like to save your entries across devices you can create a free account</p>
        <h2>Why was this made?</h2>
        <p>To make life easier. Complex, multi-step exercizes are just better in digital form.</p>
        <h2>How was this made?</h2>
        <p>
          Automatic Thought Journal is a mobile-first web app built using{" "}
          <a className="link" href="https://github.com/catalin-luntraru/redux-minimal">
            React Redux minimal starter kit
          </a>{" "}
          as the boilerplate.
        </p>

        <h2>Who made this</h2>
        <p>
          The "triple column technique" was coined by David Burns in his book "Feeling Good". The
          website was made by Eleanor. [add protected email]
        </p>

        <h2>Can I download my entries?</h2>
        <p>Soon! This is the feature I plan to add next.</p>
      </div>
    );
  }
}
