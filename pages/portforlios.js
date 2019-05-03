import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { Link } from '../routes'

import axios from 'axios'

class Portforlios extends Component {
  static async getInitialProps() {
    let portforlios = []
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      portforlios = response.data
    } catch (err) {
      console.error(err)
    }

    return { portforlios: portforlios.splice(0, 10) }
  }

  renderPortforlios = portforlios =>
    portforlios.map(portforlio => (
      <li key={portforlio.id}>
        <Link route={`/portforlio/${portforlio.id}`}>
          <a>{portforlio.title}</a>
        </Link>
      </li>
    ))

  render() {
    const { portforlios } = this.props
    return (
      <BaseLayout>
        <h1>Portforlios</h1>
        <ul>{this.renderPortforlios(portforlios)}</ul>
      </BaseLayout>
    )
  }
}

export default Portforlios
