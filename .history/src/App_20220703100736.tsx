import { ApolloProvider, gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { client } from './lib/apollo'

import { Event } from './pages/Event'

import React from 'react'
import ReactDOM from 'react-dom/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }

  }
`




function App() {
  const { data } = useQuery(GET_LESSONS_QUERY)

  console.log(data);





  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
