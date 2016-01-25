export default function postsReducer (posts = {}, action) {

  switch(action.type) {
    case 'PostAdded':
    case 'PostUpdated':
      return { ...posts, [action.id]: action.data }
    case 'PostRemoved':
      const newPosts = { ...posts }
      delete newPosts[action.id]
      return newPosts
    default:
      return posts;
  }
}
