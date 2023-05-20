import { useRef, useState } from 'react'

function useSearch() {
  const [search, setSearch] = useState('')
  const previousSearch = useRef(search)

  return { search, setSearch, previousSearch }
}
export default useSearch
