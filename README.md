## App Details

La prueba consistirá en realizar una mini-webapp en la que se mostrará un listado de películas con su póster, título y fecha de estreno. Una vez que se pinche en la imagen de alguna de ellas se visualizarán todos los datos de esta y además mostrará un pequeño formulario en el que puedas poner puntuación a la misma.

Puedes ver el resto de requerimientos aquí [INSTRUCTIONS.md](/INSTRUCTIONS.md)

## Tech stack

Para el desarrollo de la tarea, se han utilizado algunas librerías para hacerlo más interesante.

- Vite: A todo el mundo le gusta la rapidez en las aplicaciones asi que se ha utilizado Vite para el build tool de la aplicación, es rápido y liviano especialmente diseñado para aplicaciones web modernas con enfoque en velocidad y eficiencia durante el desarrollo.

- React: Se utilizó como el framework principal para la construcción de la interfaz de usuario.

- TypeScript: Se utilizó para añadir características de tipado estático al lenguaje, lo que permite detectar errores en tiempo de compilación y mejorar la calidad y mantenibilidad del código.

- Zustand: Se utilizó para el manejo de estados globales y almacenamiento de la información. Se implementó para guardar las películas valoradas y mantener los datos en el localStorage.

- React Router V6: Se utilizó para el enrutamiento de la aplicación.

- CSS Modules: Para diseñar una UI agradable, se utilizó para el estilo de los componentes, permitiendo un alcance de estilos más localizado y evitando posibles colisiones de estilos entre componentes utilizando variables globales para manejar los estilos desde un solo archivo.

## Code architecture

```
├── src
│   ├── assets
|   ├── components
|      └── atoms
|      └── molecules
│   ├── hooks
│   ├── mocks
│   ├── pages
│   ├── routes
│   └── services
│      └── api
│   ├── store
│   ├── translations
```

- `src/assets`: Elementos multimedia (imágenes).
- `src/components`:se utilizan las carpetas atoms, molecules y organisms para organizar los componentes de acuerdo al diseño atómico. -`src/components/atoms`: Contiene componentes básicos y pequeños. -`src/components/molecules`: Agrupa componentes más complejos que están compuestos por componentes átomos.
- `src/hooks`: Hooks personalizados para la lógica y el estado de los componentes.
- `src/mocks`: Archivos con respuestas simuladas de la API para diseñar la interfaz de usuario.
- `src/pages`: Directorio de páginas de React.js. Utiliza enrutamiento basado en el sistema de archivos. Una página debe estar compuesta por elementos de los directorios "ui" y "modules".
- `src/routes`: Configuración de rutas de la aplicación.
- `src/services/api`: Aquí se encuentran las funciones y utilidades relacionadas con la API de la aplicación .
- `store`: D Aquí se encuentran los archivos relacionados con la configuración y la gestión del estado de la aplicación utilizando Zustand.
- `translations`: Archivos de traducción para internacionalización.

## Run Locally

Es necesario tener instalado Node 16 y añadir el archivo .env con la variable VITE_APP_API_KEY donde pondrás tu API de [`TMDB`](https://www.themoviedb.org/).

Luego, todo lo que tienes que hacer es:

npm install

npm run dev

Y abrir http://127.0.0.1:5173/ en tu navegador.

## Deployment

Se ha desplegado el proyecto usando Netlify, puedes acceder en [https://snazzy-duckanoo-e55136.netlify.app/](https://snazzy-duckanoo-e55136.netlify.app/)

## Pending

Para este desarrollo se han utilizado varias tecnologías nuevas para mi como Vite o Zustand, o tecnologías que no había podido usar en mi día a día como Typescript o React V6, ha sido todo un reto aprender y pelear para que todo funcionase.

#### Testing

Lamentablemente, no pude dedicar suficiente tiempo para intentar implementar pruebas de testing en este proyecto. Sin embargo, es importante la implementación de pruebas en la detección de errores asi que me queda de deberes.

#### Pagination

- Actualizar la lógica de paginación: Actualmente, la paginación solo funciona para las películas más populares sería necesario hacerla funcionar en los resultados de búsqueda.

- Implementar el almacenamiento progresivo de datos: En lugar de hacer una nueva solicitud cada vez que se cambia de página, se puede implementar un mecanismo para almacenar progresivamente los datos a medida que se van cargando. Al cambiar de página, en lugar de realizar una nueva solicitud, se consultará el estado y se mostrarán las películas almacenadas allí.

- Infinity Scroll: Personalmente me gustan mas que los botones de paginación, cuando el usuario llegue al final de una página y se hará una solicitud para cargar más datos.

### Delete Related Films

De la misma manera que se añaden valoraciones, tendrían que poder eliminarse.

### State Loading

Aunque nuestra API es muy rápida, siempre es necesario contemplar el estado inicial mientas se cargan los datos, utilizando un esqueleto de componentes que muestra una vista preliminar del diseño y estructura de la aplicación mientras se cargan los datos.

Además, implementamos Lazy Loading para una transición suave entre páginas. Durante el proceso de carga del JavaScript, es recomendable mostrar un esqueleto que indique que la página se está cargando.

Esto ayuda a evitar una experiencia vacía o sin contenido mientras se espera a que se complete la carga.
