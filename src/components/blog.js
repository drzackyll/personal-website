import React, { Component } from 'react'
import $ from 'jquery'

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = { posts: ""}
  }

  getBlogPosts = () => {
    $.ajax({
      url: 'http://localhost:3000/posts',
      type: 'GET'
    }).then(
      response => console.log(response)
    )
  }

  render() {
    return (
      <div>
        {this.state.posts}
        Coming soon!
      </div>
    )
  }

  componentWillMount() {
    this.getBlogPosts()
  }
}

export default Blog
