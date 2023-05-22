import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError() as { statusText: string; message: string }

  return (
    <div>
      <h1>Página no encontrada</h1>
      <p>
        <i>{Boolean(error.statusText) || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
