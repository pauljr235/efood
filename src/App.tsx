import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from '../src/styles'
import Hero from './components/Hero'
import ProductList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <ProductList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
