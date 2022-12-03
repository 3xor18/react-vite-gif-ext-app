## Repo de React con Vite

## crear app

#### 1-  npm create vite
#### 2-  navegar a la carpeta
#### 3-  npm i
#### 4-  npm run dev

## Ambiente de Desarrollo

### 1- Instalaciones
#### yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
#### yarn add --dev @testing-library/react @types/jest jest-environment-jsdom

### Opcional: Si usamos Fetch API en el proyecto:
#### yarn add --dev whatwg-fetch

### 2- Actualizar los scripts del package.json
#### "scripts: {
#### ...
#### "test": "jest --watchAll"

### 3- Crear la configuración de babel babel.config.cjs
#### module.exports = {
####  presets: [
####    [ '@babel/preset-env', { targets: { esmodules: true } } ],
####    [ '@babel/preset-react', { runtime: 'automatic' } ],
#### ],
#### };

### 4- Opcional, pero eventualmente necesario, crear Jest config y setup:

### jest.config.cjs
#### module.exports = {
#### testEnvironment: 'jest-environment-jsdom',
#### setupFiles: ['./jest.setup.js']
#### }

### jest.setup.js
#### En caso de necesitar la implementación del FetchAPI
#### import 'whatwg-fetch'; // <-- yarn add whatwg-fetch


## PropsType
### 1- npm i prop-types
### 2- import PropTypes from 'prop-types'
### 3- #componente.propTypes = { url: PropTypes.string.isRequired,  doAlgo: PropTypes.func.isRequired }


## W -> P para buscar un test en especifico
## u -> actualizar el Snaapshot
## ocupar -> aria-label="form" para que encuentre el elemento
## mock funcion -> GifGrid.test.jsx
## test fech useFetchGifs.test.jsx