import React, { Component } from "react";
import FilterTheNewsYouNeed from "../images/filterthenewsyouneed.png";
import FilterSubscription from "../images/filtersubscriptions.png";
import HideAds from "../images/hideads.png";
import HidePolitics from "../images/hidepolitics.png";
import HidePostsYouveSeen from "../images/hidepostsyouveseen.png";
import ShowPhotoTags from "../images/showphototags.png";
import ExposeHiddenMessages from "../images/exposehiddenmessages.png";
import DisplayTweaks from "../images/displaytweaks.png";
import MostRecentFeed from "../images/mostrecentfeed.png";
import EnhanceTrendingStories from "../images/enhancetrendingstories.png";
import StealthMode from "../images/stealthmode.png";
import AnonymizeForSS from "../images/anonymizeforss.png";
import DataExpImp from "../images/dataexpimp.png";

class Features extends Component {
  render() {
    return (
      <div className="Features">
        <p>
          Social Fixer has a wide range of features to make your Facebook
          experience better. Here are some of the popular ones:
        </p>
        <h2 className="feature">Filter Your News Feed</h2>
        <div className="feature-grid">
          <img src={FilterTheNewsYouNeed} alt="filter the news you need" />
          <p>
            Powerful filtering capabilities allow you to create rules that
            process the posts in your feed. Hide stories by keyword, author,
            application, etc. Organize your feed into tabs to group posts into
            categories. Advanced users can even apply HTML classes to posts that
            match rules, and add CSS styles to customize how they appear. You're
            in control.
          </p>
        </div>
        <h2 className="feature">Filter Subscriptions</h2>
        <div className="feature-grid">
          <img src={FilterSubscription} alt="filter subscriptions" />
          <p>
            Filters are powerful, but not everyone will understand how to create
            them. Luckily you don't have to! Social Fixer supplies a number of
            pre-made Filter Subscriptions for you that you can simply add with
            one click. As Facebook changes, Filter Subscriptions are
            automatically updated for you in the background, so you never have
            to tweak them to keep them working correctly.
          </p>
        </div>
        <h2 className="feature">
          Hide "Sponsored" Stories (Ads) <span class="red">(Featured)</span>
        </h2>
        <div className="feature-grid">
          <img src={HideAds} alt="hide ads" />
          <p>
            One of the pre-made filters you can simply select is to hide
            "Sponsored" stories in your news feed, aka ads. Since Social Fixer
            works at the code level, it can see and hide posts that other tools
            like AdBlock can't.
          </p>
        </div>
        <h2 className="feature">
          Hide Politics <span class="red">(Featured)</span>
        </h2>
        <div className="feature-grid">
          <img src={HidePolitics} alt="hide politics" />
          <p>
            Another pre-made filter you can click to add filters posts related
            to the 2016 U.S. Election and Politics. One click removes all the
            political junk from your news feed, so you can stay friends with
            people without seeing their political opinions.
          </p>
        </div>
        <h2 className="feature">
          Hide Posts You've Already Read <span class="red">(Featured)</span>
        </h2>
        <div className="feature-grid">
          <img src={HidePostsYouveSeen} alt="hide the posts you've seen" />
          <p>
            With Social Fixer, you can hide posts in your news feed once you've
            read them. It's like email - you don't want to continue seeing
            emails in your Inbox after you're done with them, do you? No - you
            archive them. Now you can do the same thing in Facebook - "mark as
            read" the posts you've seen, and next time you load Facebook, you
            won't have to see them again. This way you can focus only on the new
            content.
          </p>
        </div>
        <h2 className="feature">Show Photo Tags</h2>
        <div className="feature-grid">
          <img src={ShowPhotoTags} alt="show tags" />
          <p>
            When photos are posted, Facebook automatically runs its AI to
            identify keywords in the photo. Social Fixer can expose these tags
            and show them to you when you hover over photos.
          </p>
        </div>
        <h2 className="feature">Expose Hidden Messages</h2>
        <div className="feature-grid">
          <img src={ExposeHiddenMessages} alt="expose hidden messages" />
          <p>
            Facebook hides Messages sent to you if they aren't from a friend
            they recognize. Social Fixer alerts you to these unseen Messages so
            you can read them.
          </p>
        </div>
        <h2 className="feature">
          Display Tweaks <span class="red">(Featured)</span>
        </h2>
        <div className="feature-grid">
          <img src={DisplayTweaks} alt="display tweaks" />
          <p>
            Change the User Interface of Facebook, from colors to fonts to sizes
            or anything else you want to do using custom CSS rules. If you don't
            know how to do this, don't worry - there's a list of tweaks to pick
            from, and it will keep growing as new customization options are
            added to Social Fixer.
          </p>
        </div>
        <h2 className="feature">
          Stay On The Most Recent Feed <span class="red">(Featured)</span>
        </h2>
        <div className="feature-grid">
          <img src={MostRecentFeed} alt="most recent feed" />
          <p>
            Facebook has a terrible habit of switching you back to the "Top
            Stories" view of your news feed, even after you've chosen to view
            the "Most Recent" view. Social Fixer will automatically switch you
            back to the Most Recent view if Facebook decides to switch you
            without asking.
          </p>
        </div>
        <h2 className="feature">Enhance Trending Stories</h2>
        <div className="feature-grid">
          <img src={EnhanceTrendingStories} alt="enhance trending stories" />
          <p>
            Add more functionality to the Trending box by displaying summary
            headlines (without hovering) and adding bars that show the relative
            popularity of each story.
          </p>
        </div>
        <h2 className="feature">
          Stealth Mode <span class="red">(Featured)</span>
        </h2>
        <div className="feature-grid">
          <img src={StealthMode} alt="stealth mode" />
          <p>
            Have you ever wanted to browse peoples' profiles or look at Groups
            or Pages without the fear of accidentally clicking "Like" or adding
            someone as a friend? Stealth Mode removes all of those actions, so
            there is no way to accidentally click and do something you don't
            mean to.
          </p>
        </div>
        <h2 className="feature">Anonymize For Screenshots</h2>
        <div className="feature-grid">
          <img src={AnonymizeForSS} alt="anonymize for screenshots" />
          <p>
            If you want to post a screenshot of your screen somewhere like
            Reddit but you don't want to reveal your name, your friends' names,
            their pictures, etc, then the "Anonymize Screen" function will help.
            It replaces all names, profile pictures, and other identifiers with
            generated text, making it a one-step process to scrub your screen
            before taking a screenshot.
          </p>
        </div>
        <h2 className="feature">
          Data Export/Import <span class="red">(Featured)</span>
        </h2>
        <div className="feature-grid">
          <img src={DataExpImp} alt="data export and import" />
          <p>
            Backup all your settings, filters, tweaks, and data at any time by
            exporting your user preferences. Import all or part of your data
            later, in a new browser, or for a friend who wants to start with all
            your settings.
          </p>
        </div>
      </div>
    );
  }
}

export default Features;
