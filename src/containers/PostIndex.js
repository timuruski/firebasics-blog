import React, { Component } from 'react'
import lodash from 'lodash'
import { connect } from 'react-redux'

// import { PostSubscription } from '../somewhere'
// componentWillMount () {
//   const action = {
//     type: 'AddSubscriber',
//     subscription: ['posts', PostSubscription]
//   }
//   this.props.dispatch(action)
// }

// Posts is a container, it holds the reference to Firebase for listening to
// changes in posts?
class PostIndex extends Component {
  // https://fiery-heat-9192.firebaseio.com/posts
  componentWillMount () {
    // ref: $FIREBASE/posts
    // child_added -> addPost
    // child_removed -> removePost
    // child_changed -> updatePost
    const action = {
      type: 'AddSubscriber',
      channel: 'posts',
      subscriberId: 'post-index'
    }
    this.props.dispatch(action)
  }

  componentWillUnmount () {
    const action = {
      type: 'RemoveSubscriber',
      channel: 'posts',
      subscriberId: 'post-index'
    }
    // this.props.dispatch(action)
  }

  render () {
    const toPostLink = (data) => {
      return (<li>{ data.title }</li>)
    }

    return (
      <ul>
        { lodash.map(this.props.posts, toPostLink) }
      </ul>
    );
  }
}

function mapStateToProps (state) {
  return {
   posts: state.posts
  }
}

export default connect(mapStateToProps)(PostIndex)
