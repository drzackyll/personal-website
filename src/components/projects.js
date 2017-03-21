import React from 'react'

const Projects = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-4 col-xs-offset-1">
          <a href="https://crisis-visualizer.herokuapp.com/" target="_blank">
            <img className="img-thumbnail" src="../../images/crisis-screen-shot.png" alt="Crisis Project Screen Shot" />
          </a>
        </div>
        <div className="col-xs-6">
          <h4>crisis visualizer</h4>
          see how the size of the population where you live compares to the scale of crises around the world. we need a strong international development budget now more than ever. please make your voice heard.<br /><br />
          <b>built with:</b> javascript, reactjs, jquery
        </div>
      </div>
      <div><br /></div>

      <div className="row">
        <div className="col-xs-4 col-xs-offset-1">
          <a href="https://giphtionary.herokuapp.com/" target="_blank">
            <img className="img-thumbnail" src="../../images/giphtionary-screen-shot.png" alt="Giphtionary Project Screen Shot" />
          </a>
        </div>
        <div className="col-xs-6">
          <h4>giphtionary</h4>
          enter a search term or phrase and see an Urban Dictionary definition matched with a gif.<br /><br />
          <b>built with:</b> javascript, jquery
        </div>
      </div>
      <div><br /></div>

      <div className="row">
        <div className="col-xs-4 col-xs-offset-1">
          <a href="https://pears-beans-peas.herokuapp.com/" target="_blank">
            <img className="img-thumbnail" src="../../images/pbp-screen-shot.png" alt="PBP Project Screen Shot" />
          </a>
        </div>
        <div className="col-xs-6">
          <h4>pears, beans, & peas</h4>
          organize a potluck with strangers or attend someone else’s.<br /><br />
          <b>built with:</b> ruby on rails, postgresql
        </div>
      </div>
      <div><br /></div>

      <div className="row">
        <div className="col-xs-4 col-xs-offset-1">
          <a href="https://z-tag.herokuapp.com/" target="_blank">
            <img className="img-thumbnail" src="../../images/ztag-screen-shot.png" alt="Z-Tag Project Screen Shot" />
          </a>
        </div>
        <div className="col-xs-6">
          <h4>z-tag</h4>
          geolocation-based augmented reality game.<br /><br />
          <b>built with:</b> javascript, reactjs, jquery, ruby on rails, postgresql
        </div>
      </div>
    </div>
  )
}

export default Projects
