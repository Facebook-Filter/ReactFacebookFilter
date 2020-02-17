import React, {Component} from 'react';
import Image1 from "../../assets/image/f-1.png";
import Image2 from '../../assets/image/f-2.png';
import Image3 from "../../assets/image/f-3.png";
import Image4 from "../../assets/image/f-4.png";
import Image5 from "../../assets/image/f-5.png";
import Image6 from "../../assets/image/f-6.png";
import Image7 from "../../assets/image/f-7.png";
import Image8 from "../../assets/image/f-8.png";
import Image9 from "../../assets/image/f-9.png";
import Image10 from "../../assets/image/f-10.png";
import Image11 from "../../assets/image/f-11.png";
import Image12 from "../../assets/image/f-12.png";
import Image13 from "../../assets/image/f-13.png";
import './Features.css';



class Features extends Component{

  render(){
    return(    <>
      <div className="Features">
        <h2>Features</h2>
        <div>
        <div className="features-intro">
          <h1 id="features-h1">Features</h1>
          <div id="features-defn"><p>" Social Fixer has a wide range of features to make your Facebook experience better "</p><br />
            <p>Here are some of the popular ones:</p></div>
        </div>
        <div className="grid-feature-1">
          <div>
            <p>
            </p><h2 id="f1-h2">Filter Your News Feed</h2>
            Powerful filtering capabilities allow you to create rules that process the posts in your feed. Hide stories by keyword, author, application, etc. Organize your feed into tabs to group posts into categories. Advanced users can even apply HTML classes to posts that match rules, and add CSS styles to customize how they appear. You're in control.
            <p />
          </div>
          <div>
          <img src={Image1} id="f1-pic-size" alt="whatever"/>          </div>
        </div>
        <div className="grid-feature-2">
          <div>
            <img src={Image2} id="f2-pic-size" alt="whatever"/>
          </div>
          <div>
            <p>
            </p><h2 id="f2-h2">Filter Subscriptions</h2>
            Filters are powerful, but not everyone will understand how to create them. Luckily you don't have to! Social Fixer supplies a number of pre-made Filter Subscriptions for you that you can simply add with one click. As Facebook changes, Filter Subscriptions are automatically updated for you in the background, so you never have to tweak them to keep them working correctly.
            <p />
          </div>
        </div>
        <div className="grid-feature-3">
          <div className="feature-p3">
            <p id="p3-size">
            </p><h2 id="f3-h2">Hide "Sponsored" Stories (Ads) (Featured)</h2>
            One of the pre-made filters you can simply select is to hide "Sponsored" stories in your news feed, aka ads. Since Social Fixer works at the code level, it can see and hide posts that other tools like AdBlock can't.
            <p />
          </div>
          <div>
            <img src={Image3} id="ads-f3-size" alt="whatever"/>
          </div>
        </div>
        <div className="grid-feature-4">
          <div>
            <img src={Image4} id="hidePolitics-f4-size" alt="whatever"/>
          </div>
          <div className="feature-p4">
            <p id="p4-size">
            </p><h2 id="f4-h2">Hide Politics (Featured)</h2> 
            Another pre-made filter you can click to add filters posts related to the 2016 U.S. Election and Politics. One click removes all the political junk from your news feed, so you can stay friends with people without seeing their political opinions.
            <p />
          </div>
        </div>
        <div className="grid-feature-5">
          <div>
            <p id="p5-size">
            </p><h2 id="f5-h2">Hide Posts You've Already Read (Featured)</h2>
            With Social Fixer, you can hide posts in your news feed once you've read them. It's like email - you don't want to continue seeing emails in your Inbox after you're done with them, do you? No - you archive them. Now you can do the same thing in Facebook - "mark as read" the posts you've seen, and next time you load Facebook, you won't have to see them again. This way you can focus only on the new content.
            <p />
          </div>
          <div>
            <img src={Image5} id="f5-pic-size" alt="whatever"/>
          </div>
        </div>
        <div className="grid-feature-6">
          <div>
            <img src={Image6} id="f6-pic-size" alt="whatever"/>
          </div>
          <div className="feature-p6">
            <p id="p6-size">
            </p><h2 id="f6-h2">Show Photo Tags</h2> 
            When photos are posted, Facebook automatically runs its AI to identify keywords in the photo. Social Fixer can expose these tags and show them to you when you hover over photos.
            <p />
          </div>
        </div>
        <div className="grid-feature-7">
          <div>
            <p id="p7-size">
            </p><h2 id="f7-h2">Expose Hidden Messages</h2>
            Facebook hides Messages sent to you if they aren't from a friend they recognize. Social Fixer alerts you to these unseen Messages so you can read them.
            <p />
          </div>
          <div>
            <img src={Image7} id="f7-pic-size"alt="whatever" />
          </div>
        </div>
        <div className="grid-feature-8">
          <div>
            <img src={Image8} id="f8-pic-size"alt="whatever" />
          </div>
          <div className="feature-p8">
            <p id="p8-size">
            </p><h2 id="f8-h2">Display Tweaks (Featured)</h2> 
            Change the User Interface of Facebook, from colors to fonts to sizes or anything else you want to do using custom CSS rules. If you don't know how to do this, don't worry - there's a list of tweaks to pick from, and it will keep growing as new customization options are added to Social Fixer.
            <p />
          </div>
        </div>
        <div className="grid-feature-9">
          <div>
            <p id="p9-size">
            </p><h2 id="f9-h2">Stay On The Most Recent Feed (Featured)</h2>
            Facebook has a terrible habit of switching you back to the "Top Stories" view of your news feed, even after you've chosen to view the "Most Recent" view. Social Fixer will automatically switch you back to the Most Recent view if Facebook decides to switch you without asking.                    <p />
          </div>
          <div>
            <img src={Image9}id="f9-pic-size"alt="whatever" />
          </div>
        </div>
        <div className="grid-feature-10">
          <div>
            <img src={Image10} id="f10-pic-size"alt="whatever" />
          </div>
          <div className="feature-p10">
            <p id="p10-size">
            </p><h2 id="f10-h2">Enhance Trending Stories</h2> 
            Add more functionality to the Trending box by displaying summary headlines (without hovering) and adding bars that show the relative popularity of each story.                    <p />
          </div>
        </div>
        <div className="grid-feature-11">
          <div>
            <p id="p11-size">
            </p><h2 id="f11-h2">Stay On The Most Recent Feed (Featured)</h2>
            Facebook has a terrible habit of switching you back to the "Top Stories" view of your news feed, even after you've chosen to view the "Most Recent" view. Social Fixer will automatically switch you back to the Most Recent view if Facebook decides to switch you without asking.                    <p />
          </div>
          <div>
            <img src={Image11} id="f11-pic-size" alt="whatever"/>
          </div>
        </div>
        <div className="grid-feature-12">
          <div>
            <img src={Image12} id="f12-pic-size" alt="whatever"/>
          </div>
          <div className="feature-p12">
            <p id="p12-size">
            </p><h2 id="f12-h2">Anonymize For Screenshots</h2> 
            If you want to post a screenshot of your screen somewhere like Reddit but you don't want to reveal your name, your friends' names, their pictures, etc, then the "Anonymize Screen" function will help. It replaces all names, profile pictures, and other identifiers with generated text, making it a one-step process to scrub your screen before taking a screenshot.
            <p />
          </div>
        </div>
        <div className="grid-feature-13">
          <div>
            <p id="p13-size">
            </p><h2 id="f13-h2">Data Export/Import (Featured)</h2>
            Backup all your settings, filters, tweaks, and data at any time by exporting your user preferences. Import all or part of your data later, in a new browser, or for a friend who wants to start with all your settings.
            <p />
          </div>
          <div>
            <img src={Image13} id="f13-pic-size" alt="whatever"/>
          </div>
        </div>
      </div>
      </div></>
    )
  }
}

export default Features;