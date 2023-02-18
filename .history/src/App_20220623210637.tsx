import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

import { Event } from './pages/Event'


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
    <div className="All">
      
      <Event />
    </div>
    
  )
}

export default App
