/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import EventHandler from './dom/event-handler'
import SelectorEngine from './dom/selector-engine'

const NAME = 'inputlabel'
const DATA_KEY = 'bs.inputlabel'
const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const EVENT_FOCUS = `focus${EVENT_KEY}`
const EVENT_BLUR = `blur${EVENT_KEY}`
const EVENT_CHANGE = `change${EVENT_KEY}`

const CLASS_NAME_ACTIVE = 'active'

class InputLabel {
  constructor(element) {
    this._element = element

    this._init()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  static getInputFromLabel = (labelElement) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      return document.querySelector('#' + CSS.escape(labelElement.getAttribute('for')))
    }
  }

  // Public

  // Private
  _init() {
    const label = this._getLabel()
    if (label && !label.classList.contains(CLASS_NAME_ACTIVE)) {
      //script disabled if active on init
      this._labelOut()
      this._labelOver()
    }

    if (label && label.getAttribute('it-bs-static') === null) {
      this._bindEvents()
    }
  }

  _bindEvents() {
    if (['date', 'time'].includes(this._element.getAttribute('type'))) {
      return
    }
    if (this._element.getAttribute('type') === 'file') {
      EventHandler.on(this._element, EVENT_BLUR, () => {
        this._labelOut()
      })
    } else {
      EventHandler.on(this._element, EVENT_FOCUS, () => {
        this._labelOut()
      })
      EventHandler.on(this._element, EVENT_BLUR, () => {
        this._labelOver()
      })
      EventHandler.on(this._element, EVENT_CHANGE, () => {
        this._labelToggle()
      })
    }
  }

  _getLabel() {
    return SelectorEngine.findOne('label[for="' + this._element.getAttribute('id') + '"]')
  }

  _isEmpty() {
    if (this._element.getAttribute('type') === 'number') {
      return !this._element.value && !this._element.getAttribute('placeholder') && !this._element.validity.badInput
    } else {
      return !this._element.value && !this._element.getAttribute('placeholder')
    }
  }

  _labelOut() {
    const label = this._getLabel()
    if (label) {
      label.classList.add(CLASS_NAME_ACTIVE)
    }
  }
  _labelOver() {
    if (this._isEmpty()) {
      const label = this._getLabel()
      if (label) {
        label.classList.remove(CLASS_NAME_ACTIVE)
      }
    }
  }
  _labelToggle() {
    if (!this._isEmpty()) {
      this._labelOut()
    } else {
      this._labelOver()
    }
  }
}

export default InputLabel
