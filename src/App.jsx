import React from 'react'

import { QueryClientProvider, QueryClient } from 'react-query'
import CharactersComponent from './assets/components/CharactersComponent/CharactersComponent'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client ={queryClient}>
    <CharactersComponent />
    </QueryClientProvider>
  )
}

export default App