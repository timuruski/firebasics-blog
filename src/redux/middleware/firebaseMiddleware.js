import Firebase from 'firebase'

const url = 'https://fiery-heat-9192.firebaseio.com'
const subscriptions = {}

function addSubscriber (channel, dispatch) {
  if(subscriptions[channel]) return;

  const ref = new Firebase(url + '/' + channel)
  ref.on('child_added', function (snapshot) {
    const action = {
      type: 'PostAdded',
      data: snapshot.val()
    }
    dispatch(action)
  })
  ref.on('child_removed', function (snapshot) {
    const action = {
      type: 'PostRemoved',
      data: snapshot.val()
    }
    dispatch(action)
  })
  ref.on('child_changed', function (snapshot) {
    const action = {
      type: 'PostUpdated',
      data: snapshot.val()
    }
    dispatch(action)
  })

  subscriptions[channel] = ref
}

function removeSubscriber (subscriptions, channel, subscriberId) {
  if(!subscriptions[channel]) return;
  const subscription = subscriptions[channel]
  subscription.off()

  delete subsc[channel]
}

export default function firebaseMiddleware({dispatch, getState}) {
  return next => action => {
    const { type, channel } = action

    switch(type) {
      case 'AddSubscriber':
        addSubscriber(channel, dispatch)
      case 'RemoveSubscriber':
        removeSubscriber(channel)
    }

    return next(action)
  }
}
