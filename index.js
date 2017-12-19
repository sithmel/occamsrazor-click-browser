var delegate = require('delegate')

function getPayload (str) {
  if (!str) return
  try {
    return JSON.parse(str)
  } catch (e) {
    return undefined
  }
}

function registerClick (events, w) {
  w = w || window

  delegate(w.document.body, '[data-event-onclick]', 'click', function (e) {
    var node = e.delegateTarget
    var eventNames = node.getAttribute('data-event-onclick').split(' ')
    var payloads
    if (eventNames.length === 1) {
      payloads.push(getPayload(node.getAttribute('data-event-onclick-payload')))
    } else {
      payloads = eventNames.map(function (eventName, i) {
        var index = i + 1
        return getPayload(node.getAttribute('data-event-onclick-payload-' + index))
      })
    }
    eventNames.forEach(function (eventName, i) {
      events.trigger(eventName, payloads[i])
    })
    e.preventDefault()
  })

  return events
}

module.exports = registerClick
