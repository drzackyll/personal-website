import React from 'react'


const Resume = () => {
  return (
    <div className="container-fluid">
      <br />
      <div className="row">
        <div className="col-sm-3 text-center">651.206.2992</div>
        <div className="col-sm-3 text-center">adams.z.d@gmail.com</div>
        <div className="col-sm-3 text-center">github: <a href="http://www.github.com/drzackyll">@drzackyll</a></div>
        <div className="col-sm-3 text-center"><a href="http://www.medium.com/drzackyll">medium.com/drzackyll</a></div>
      </div>
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <div className="resume-grey"><h4>TECHNICAL EXPERIENCE</h4></div>
          <div>
            <a href="http://crisis-visualizer.herokuapp.com">Crisis Visualizer</a> - see how the scale of world crises compare to the size of your town<br />
            + ReactJS project utilizing US Census and ProPublica Congress APIs.<br />
            + Renders visual representation of comparative population sizes.<br />
            + Offers opportunity to contact user’s Congressional Representatives about the issue.<br />
          </div>
          <br />
          <div>
            <a href="http://z-tag.herokuapp.com">Z-Tag</a> - geolocation-based augmented reality game<br />
            + JavaScript and Ruby-on-Rails project utilizing Google Maps Geolocation API<br />
            + Implemented React.js front end makes API calls to Rails server, which handles SQL calls and game logic<br />
            + Debugged asynchronous API requests to ensure proper user experience.<br />
          </div>
          <br />
          <div>
            <a href="http://giphtionary.herokuapp.com">G i p h t i o n a r y</a> - Enter a search term or phrase and see an Urban Dictionary definition matched with a gif<br />
            + JavaScript project utilizing jQuery and 3 APIs.<br />
            + Set up Urban Dictionary and Giphy API calls.<br />
            + Enacted MVC pattern for project.<br />
          </div>
          <br />
          <div>
            <a href="http://pears-beans-peas.herokuapp.com">Pears, Beans, & Peas</a> - Organize a potluck with strangers or attend someone else’s<br />
            + Ruby on Rails project loosely based on the AirBnB model.<br />
            + Allows “hosts” to create events, control what types of food are welcome, and approve/disapprove dishes from guests.<br />
            + Enabled the events show page, validations, and host approval functionality.<br />
          </div>
          <br />
          <div>
            <div className="resume-grey"><h4>SKILLS AND LANGUAGES</h4></div>
            + Ruby on Rails, JavaScript, ReactJS, Redux, SQL, ActiveRecord, HTML/CSS, jQuery<br />
            </div>
          <br />
          <div>
            <div className="resume-grey"><h4>EMPLOYMENT HISTORY</h4></div>
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
            <a href="http://www.flatironschool.com"><b>Flatiron School</b></a> - New York, NY 2016<br />
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
