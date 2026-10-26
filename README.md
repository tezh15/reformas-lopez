# Reformas López

Web de Reformas López, creada con React. Presenta los servicios de reforma, una selección de proyectos, el proceso de trabajo de la empresa y vías de contacto.

## Requisitos

- Node.js y npm.

## Instalación y desarrollo

Desde la carpeta del proyecto, instala las dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm start
```

La web estará disponible en [http://localhost:3000](http://localhost:3000). El servidor recarga los cambios al guardar los archivos.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo. |
| `npm test` | Ejecuta las pruebas de Create React App en modo interactivo. |
| `npm run build` | Genera la versión optimizada para producción en `build/`. |
| `npm run eject` | Expone la configuración interna de Create React App. Es una operación irreversible. |

## Publicación en GitHub Pages

El repositorio incluye un workflow de GitHub Actions que construye y publica la web al hacer push a la rama `master` o al ejecutarlo manualmente.

1. Sube el proyecto al repositorio de GitHub.
2. En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como origen de despliegue.
3. En la pestaña **Actions**, espera a que termine correctamente el workflow **Deploy to GitHub Pages**.
4. La web se publicará en [https://tezh15.github.io/reformas-lopez/](https://tezh15.github.io/reformas-lopez/).

El workflow configura automáticamente la ruta base del repositorio para los recursos estáticos y genera una página de respaldo para permitir recargas en las rutas internas. No subas credenciales ni secretos al repositorio; los archivos `.env` están excluidos por `.gitignore`.

## Secciones de la web

- **Inicio (`/`)**: hero, proyectos destacados, resumen de cómo trabajamos y formulario de contacto.
- **Servicios (`/servicios`)**: reformas de cocina, suelos, baños, puertas y otros trabajos. Cada servicio presenta proyectos con carrusel de imágenes.
- **Nosotros (`/nosotros`)**: información de la empresa, proceso de trabajo y motivos para elegirla.
- **Contacto (`/contacto`)**: información y formulario para consultas.

## Estructura del proyecto

```text
src/
├── components/       # Componentes reutilizables y sus estilos SCSS
├── pages/            # Páginas y datos de cada sección
├── styles/           # Variables y breakpoints compartidos
├── App.jsx           # Rutas y estructura general
└── index.jsx         # Punto de entrada de React
public/
└── assets/           # Imágenes y recursos estáticos
```

Los datos de los servicios y sus galerías están en `src/pages/services/Data.js`. Las imágenes de reformas se organizan en `public/assets/assets/reformas/<servicio>/<proyecto>/` y se nombran en orden, por ejemplo `image1.jpeg`, `image2.jpeg`. Algunos suelos usan imágenes `.webp`.

Los proyectos destacados de la página de inicio se configuran en `src/components/featured-works/index.jsx`. Al añadir o cambiar imágenes, comprueba que las rutas coincidan con los nombres y extensiones reales de los archivos en `public/`.

El proceso de trabajo mostrado en la página de inicio reutiliza los datos de `src/pages/about-us/Data.js`.

## Tecnologías principales

- React 17 y React Router 5
- Create React App (`react-scripts`)
- Sass/SCSS
- React Icons
