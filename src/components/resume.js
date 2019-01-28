import React from 'react'

const Resume = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-2 col-xs-offset-5" style={{fontSize: '42px', textAlign: 'center'}}>Zack Adams</div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-2 col-lg-offset-3 text-center">651.206.2992</div>
        <div className="col-lg-2 text-center">adams.z.d@gmail.com</div>
        <div className="col-lg-2 text-center">github: <a href="http://www.github.com/drzackyll">@drzackyll</a></div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <div className="resume-grey"><h4>TECHNICAL EXPERIENCE</h4></div>
          <div>
          I am a software engineer who previously focused on international studies and global development. Then, having developed an interest in programming, I sought to combine my interests with a career as a developer for good. I'm currently working for UNICEF on software that streamlines the way hundreds of country offices work with their partner organizations. More broadly, I develop software that simplifies, accelerates, and organizes business processes at UNICEF.
          </div>
          <br />
          <div>
            <div className="resume-grey"><h4>SKILLS AND LANGUAGES</h4></div>
            + JavaScript, Polymer, ReactJS, Redux, TypeScript, Python, Ruby on Rails, SQL, HTML/CSS, jQuery, Bootstrap<br />
            </div>
          <br />
          <div>
            <div className="resume-grey"><h4>EMPLOYMENT HISTORY</h4></div>
            <a href="http://www.unicef.org"><b>UNICEF</b></a>, New York, NY<br />
            Software Engineer, August 2017 - present<br />
            + Upgraded multiple software modules to Polymer 2/3<br />
            + Executed complete rebuilds of several primary dashboard pages<br />
            + Created a reusable custom Polymer component that tracks analytics using Piwik<br />
            + Maintain software with regular bug fixes and feature refinement and development<br />
            + Utilize Agile methodology to collaborate with backend developers and product owners for regular delivery of updates<br />
            + Write tests for many custom components<br />
            + Collaborate with designer to ensure consistency of styling across project areas<br />
          </div>
          <br />
          <div>
            <a href="http://www.episcopalchurch.org"><b>The Episcopal Church</b></a>, New York, NY<br />
            Development Communications Manager, November 2012 - July 2016<br />
            + Managed the donor communications efforts of the nascent Development Office, including extensive work with our fundraising database, social media management, postal and email communications, and event support.<br />
            + Spearheaded the creation of a database of 600+ Episcopalians involved in post-earthquake relief efforts in Haiti, including creating a map of US-Haiti relationships.<br />
          </div>
          <br />
          <div>
            <b>Flattau Associates</b>, Washington, DC<br />
            Researcher, November 2011 - October 2012<br />
            + Monitored in-country news sources via LexisNexis.<br />
            + Prepared reports on governance and democracy in Kenya and Tanzania.<br />
          </div>
          <br />
          <div>
            <a href="http://www.usip.org"><b>United States Institute of Peace</b></a>, Washington, DC<br />
            Research Assistant, August 2010 - September 2011<br />
            + Worked for the Academy for International Conflict Management and Peacebuilding during graduate school.<br />
            + Research and training assistant who prepared course materials for training military and civilian practitioners of conflict resolution.<br />
          </div>
          <br />
          <div>
            <div className="resume-grey"><h4>EDUCATION</h4></div>
            <a href="http://www.flatironschool.com"><b>Flatiron School</b></a> - New York, NY - 2016<br />
            + Full Stack Web Development, Ruby on Rails and JavaScript immersive program<br />
          </div>
          <br />
          <div>
            <a href="http://www.american.edu"><b>American University</b></a> - Washington, DC - 2011<br />
            + Master of Arts: International Peace and Conflict Resolution<br />
          </div>
          <br />
          <div>
            <a href="http://www.macalester.edu"><b>Macalester College</b></a> - St. Paul, MN - 2007<br />
            + Bachelor of Arts: Double Major: International Studies, Political Science<br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
