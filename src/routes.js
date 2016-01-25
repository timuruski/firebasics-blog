import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App';

import PostIndex from './containers/PostIndex'

// class Post extends Component {
//   render () {
//     return (
//       <div class="post">
//         <h2>{ this.props.title }</h2>
//         <h3>By { this.props.author }</h3>
//       </div>
//     )
//   }
// }

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={PostIndex}/>
    </Route>
  );
};
