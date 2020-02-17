<<<<<<< HEAD
// import React, {Component} from 'react';



// class Faq extends Component{
//   render(){
//     return(
//       <div className="Faq">
      
//         <h2>Faq</h2>
//       </div>
//     )
//   }
// }

// export default Faq;
=======
import React, { Component } from "react";

class Faq extends Component {
  render() {
    return (
      <div className="Faq">
        <h3 class="faq question">Is This Thing Legit?</h3>
        <p class="faq answer">
          Yes. <br /> <br />
          Social Fixer is a community project, We are the sole programmer,
          designer, tester, documentation-writer, and marketer. You can view our
          personal site or even search Google for our name to see that we have
          been doing this stuff for a long time, and our reputation is solid.{" "}
          <br />
          We build it because we love to create things, and this is our creative
          outlet. We have been working on it in our free time since 2009 and
          there are hundreds of thousands of people who use it every day. <br />{" "}
          <br />
          Social Fixer has been written about on Lifehacker, ComputerWorld,
          Adweek and many other places (sometimes under its previous name,
          Better Facebook) <br /> <br />
          And rest assured - Social Fixer will not compromise your privacy or
          security, and it won't insert ads, spam, porn, or malware. There are
          no viruses or spyware. The code is safe.
        </p>
        <h3 class="faq question">
          Does Social Fixer compromise my privacy or security?
        </h3>
        <p class="faq answer">
          No and No. And it never will!
          <br />
          <br />
          Social Fixer is a javascript program that runs in your browser when
          you are logged into Facebook. It does run as you, and the program has
          access to your information that is displayed on the page - it needs to
          in order to process it all! This is standard for any browser script or
          extension.
          <br />
          <br />
          Requests are made back to the Facebook servers to retrieve your
          personal data like your friends list, groups, etc. This data is stored
          in your browser and nowhere else!. None of your data is ever
          transmitted to any other site, nor stored anywhere but in your
          browser. The only requests made to non-Facebook servers are the
          requests made to socialfixer.com to check for new versions and to
          check for any important messages that need to be displayed. No
          uniquely identifying information is ever sent.
          <br />
          <br />
          None of your Facebook settings or data is ever changed by Social
          Fixer. It does not update your personal information, or your status,
          or your friends lists, or any other information about you or in your
          account. It only processes information - it never changes it.
        </p>
        <h3 class="faq question">
          Does Social Fixer insert ads, spam, porn, or malware?
        </h3>
        <p class="faq answer">
          Absolutely not. And it never will!
          <br />
          <br />
          Some other Facebook scripts do insert these things, and their actions
          are sometimes incorrectly attributed to Social Fixer. Some add-ons
          that are known to cause problems are:
          <br />
          <ul>
            <li>SocialPlus!</li>
            <li>"I Don't Care" button</li>
            <li>Facebook Cleaner</li>
            <li>Faceplus</li>
          </ul>
        </p>
        <h3 class="faq question">
          Something isn't working! What's wrong? How do I debug the problem?
        </h3>
        <p class="faq answer">
          First, understand that Facebook often has glitches and problems on its
          own. Many problems that users think are caused by SFX are actually
          just Facebook screwing up. To check, you can always disable SFX and
          see if the problem persists. You can also view Facebook's Known
          Problems page on Facebook to see if they are reporting any problems at
          the moment.
          <br />
          <br />
          Second, understand that Facebook changes their code and page structure
          seemingly at random. SFX inspects the underlying code that Facebook
          delivers and looks for known structures in order to extract the
          information it needs. If the structure changes, then SFX may no longer
          be able to find the information it needs, and features may stop
          working. In these cases, I work as fast as I can to release a new
          version that takes into account these changes. Sometimes, changes are
          visible to some users and not others. If I don't see the change
          myself, it is very difficult for me to identify the change that
          Facebook has made and update the code accordingly. It may take some
          additional time, and I may need to get assistance from other SFX
          users. Read more at How It Works (and why it sometimes doesn't).
        </p>
        <h3 class="faq question">
          Why does the Chrome extension permissions include "Your tabs and
          browsing activity"?
        </h3>
        <p class="faq answer">
          This is indeed confusing, because Social Fixer does not ever access
          your other tabs or browsing activity.
          <br />
          <br />
          The problem is that Social Fixer needs some special permissions in
          order to make ajax calls back to SocialFixer.com to check for updates,
          messages, etc. Unfortunately, the permission to do this is lumped with
          others under the grouping "Tabs and browsing history".
          <br />
          <br />
          So, it's very misleading, and many extension developers have
          complained about it because it confuses users. They have plans to
          change it.
          <br />
          <br />
          Rest assured, Social Fixer will never access any of your private
          information, browsing history, cookies, stored data, or anything else
          personal. The goal of Social Fixer is to fix annoyances, not create
          them!
        </p>
      </div>
    );
  }
}

export default Faq;
>>>>>>> d68d35b61436a500e09f216264e391cc0b7a51d6
