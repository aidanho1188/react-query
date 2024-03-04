import {useQuery} from 'react-query'

function Posts(props) {
  const endpoint = 'posts'

  async function fetchData() {
    const posts = await fetch(`${props.apiUrl}/${endpoint}`)
    console.log(`${props.apiUrl}/${endpoint}`)
    const data = await posts.json()
    return data
  }

  const {isLoading, isError, data, error} = useQuery(endpoint, fetchData)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div className="Posts">
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

export default Posts
