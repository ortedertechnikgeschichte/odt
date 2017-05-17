import includes from 'lodash/includes'

const helpers = {
  validate (state) {
    const errors = {}

    this.inputs.forEach(input => {
      errors[input] = this.validations[input](state[input], state)
    })

    return errors
  },

  hasErrors () {
    return this.inputs.some(input => {
      return this.state.errors[input]
    })
  },

  onChange ({target}) {
    const {name} = target
    let {value} = target

    if (includes(this.trim, name)) value = value.trim()

    const newState = Object.assign({}, this.state, {
      [name]: value
    })

    this.setState(Object.assign(newState, {
      errors: this.validate(newState)
    }))
  }
}

export default (that) => {
  Object.keys(helpers).forEach(helper => {
    that[helper] = helpers[helper].bind(that)
  })
}
