import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()

  return (
    <div>
      <h1>Pagina no encontrada</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
