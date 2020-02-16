import React, {Component} from 'react';
import './About.css'


class About extends Component{
  render(){
    return(
      <div className="About">
        <h2>About Social Fixer</h2>
        <p>Social Fixer is a personal project lead by the community of peeps of attacking corporations. This is where I tell you a little bit about the project and out group... <br/><br/>
          We started working on Social Fixer (formerly known as Better Facebook) in 2009 as a Greasemonkey script for Firefox, because we were annoyed that we couldn't get rid of posts that we have already read and only see the new stuff. We often wrote utilities and programs to make my online easier, so this was just a tool for ourself to remove the annoyances of Facebook.<br/><br/>
          From there it grew as I added more options and functionality, and eventually released it for public use. We got a lot of feedback and more ideas, and kept building. As we learned about user script and extension support in Chrome, Safari, and Opera, we added support for those browsers also.<br/><br/>
          In July of 2010, Apple featured the Social Fixer extension in its Safari Extension Gallery and the number of users doubled in under two weeks! Since then it has enjoyed sustained growth which I think is pretty cool. It's been featured on a number of sites and in published articles. We even had an article about us written in Ars Technica that gave a little more view into who we are and what makes this project work.<br/><br/>
          We have been coding javascript since it was released to the public, back in 1995. We enjoy it because it's kind of a niche that many people don't understand, and it allows us to be creative by creating cool gadgets and scripts. Though it's a bit outdated now, I have maintained The Javascript Toolbox as a place where we offer a bunch of my libraries and scripts for free. We have messed around with PHP a bit, and created the free PHP Excel Reader which many people find useful. We have had other projects in the past, including a web site statistics program called MKStats (acquired by WebTrends), and a Perl CGI calendar program called CalendarScript. We always have multiple projects going, and more ideas that we can even begin to develop. We like to build things!<br/><br/>
          In 2014, Facebook underwent a number of internal technical challenges, and browsers became much more strict in how they dealt with security and browser extensions. For these reasons, Social Fixer went on a bit of a hiatus. It was becoming a nightmare to maintain in its current form, and features were continually broken by Facebook code changes. We decided to rewreite the entire app from the ground up, based on a new cross-browser extension framework that We created by ourselves. This took over a year of thinking, designing, testing, and coding. In August 2016, Social Fixer came back to life with a whole new design. It is now much more robust and maintainable for the future.<br/><br/>
          Right now, Social Fixer is hosted in a private repository on github, but it is not Open Source. This is for a number of reasons, most importantly because we don't want forked versions being distributed by people with bad intentions, who might inject malware or tracking code without users knowing. Our primary focus is always the security of privacy of our users. However, We do have a small team of developers and supporters who have access to the code and help with the development and maintenance. Our goal is to grow this team and eventually make the code available to the community to assist in development. We will do whatever we can to benefit users.<br/><br/>
          We have created this application in our (limited) free time and we make it free to the Facebook user community. However, we also accept donations to help offset the development time, server expense, etc. Though we certainly don't expect everyone to donate, we are very appreciative of those that do.
        </p>
      </div>
    )
  }
}

export default About;