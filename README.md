La prueba consistirá en realizar una mini-webapp en la que se mostrará un listado de
películas con su póster, título y fecha de estreno. Una vez que se pinche en la imagen
de alguna de ellas se visualizarán todos los datos de esta y además mostrará un
pequeño formulario en el que puedas poner puntuación a la misma.

API
- API KEY: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Podemos obtener una lista de películas populares:
https://developers.themoviedb.org/3/movies/get-popular-movies

Se podrá utilizar la query de consulta para buscar la película:
https://developers.themoviedb.org/3/search/search-movies

Para puntuar / valorar la película se usará el siguiente endpoint:
https://developers.themoviedb.org/3/movies/rate-movie

Para ello tendremos que crear y usar una “guest session” y usarla en el paso anterior:
https://developers.themoviedb.org/3/authentication/create-guest-session

Condiciones:
- Desarrollar usando React 18
- Usar Typescript.
- Buscador + listado de películas en una ruta principal o /search
- Otra ruta con las películas que se han valorado, en /mylist
- El guardado de información debería hacerse con redux-toolkit o los hooks
useContext + useReducer.

Opcional (suma puntos):
- Se puede utilizar cualquier librería de componentes, sea pública o propia.
- Los tests unitarios / funcionales con la librería React Testing Library
- Code splitting, lazy loading.
- Buena estructura del proyecto
