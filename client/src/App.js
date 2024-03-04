import * as React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import Posts from './Posts/Posts'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/posts',
    element: <Posts apiUrl={'http://localhost:8080/api/'} />,
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        {/* navigation and main content goes here */}
      </RouterProvider>
    </QueryClientProvider>
  )
}

export default App
