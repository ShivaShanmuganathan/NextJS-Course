// pages/search.js
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Search () {
  const router = useRouter()
  const { query } = router.query
  const [results, setResults] = useState([])

  useEffect(() => {
    // Fetch search results from an API or perform a search on your data
    // This is a placeholder for actual search functionality
    if (query) {
      setResults([`Result for "${query}"`, 'Result 2', 'Result 3']) // Replace with real search results
    }
  }, [query])

  return (
    <div>
      <h1>Search Results</h1>
      {query && <p>Showing results for: {query}</p>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  )
}
