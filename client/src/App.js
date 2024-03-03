import React from 'react'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'

const queryClient = new QueryClient()

function App() {
  async function fetchData() {
    const posts = await fetch('http://localhost:8080/api/posts')
    const data = await posts.json()
    return data
  }

  const {isLoading, isError, data, error} = useQuery('posts', fetchData)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div className="App">
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// need a wrapper for it to work
function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

export default AppWrapper
