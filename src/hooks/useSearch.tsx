import { useRef, useState } from 'react'

function useSearch() {
  const [search, setSearch] = useState<string>('')
  const previousSearch = useRef(search)

  return { search, setSearch, previousSearch }
}
export default useSearch
