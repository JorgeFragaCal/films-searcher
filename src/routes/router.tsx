/* eslint-disable react-refresh/only-export-components */
import { HOME, SEARCH, MY_LIST } from './routesConstants'
import { lazy } from 'react'
const App = lazy(async () => await import('../App'))
const MyListPage = lazy(async () => await import('../pages/myList/MyListPage'))
const ErrorPage = lazy(async () => await import('../ErrorPage'))
const SearchPage = lazy(
  async () => await import('../pages/searchPage/SearchPage')
)

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
