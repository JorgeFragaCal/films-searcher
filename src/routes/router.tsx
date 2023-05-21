import App from '../App'
import ErrorPage from '../ErrorPage'
import MyListPage from '../pages/myList/MyListPage'
import SearchPage from '../pages/searchPage/SearchPage'
import { HOME, SEARCH, MY_LIST } from './routesConstants'


export const routes = [
  {
    path: HOME,
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: SEARCH,
    element: <SearchPage />,
  },
  {
    path: MY_LIST,
    element: <MyListPage />,
  },
]


