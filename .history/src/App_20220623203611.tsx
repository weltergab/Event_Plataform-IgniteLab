import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'


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
    <div className="App">
      <div className="title text-violet-600"> ta funcionando</div>
    </div>
  )
}

export default App
