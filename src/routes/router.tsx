import App from '../App'
import ErrorPage from '../ErrorPage'
import SearchPage from '../pages/searchPage/SearchPage'
import { HOME, SEARCH, MY_LIST } from './routesConstants'


async function loader() {
  return { contacts }
}

export const routes = [
  {
    path: HOME,
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: SEARCH,
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
]


