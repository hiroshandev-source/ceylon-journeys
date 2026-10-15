import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

// Google Translate replaces text nodes on the page, which can make React
// crash when it later updates them. Ignore those harmless DOM mismatches.
if (typeof Node === 'function' && Node.prototype) {
  const removeChild = Node.prototype.removeChild
  Node.prototype.removeChild = function (child) {
    if (child.parentNode !== this) return child
    return removeChild.call(this, child)
  }
  const insertBefore = Node.prototype.insertBefore
  Node.prototype.insertBefore = function (node, ref) {
    if (ref && ref.parentNode !== this) return node
    return insertBefore.call(this, node, ref)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
