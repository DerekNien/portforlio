import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'

import axios from 'axios'

class Portforlio extends Component {
  static async getInitialProps({ query }) {
    const portforlioId = query.id
    let portforlio = {}
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${portforlioId}`
      )
      portforlio = response.data
    } catch (err) {
      console.error(err)
    }

    return { portforlio }
  }

  render() {
    return (
      <BaseLayout>
        <h1>Portforlio</h1>
        <h2>{this.props.portforlio.title}</h2>
      </BaseLayout>
    )
  }
}

export default withRouter(Portforlio)
