# Gobierno-Digital
Una pokedex Api con React.

#Nombre:
Ivan Madrigal Pérez

# Despliegue
  # Previo: React es una librería de vistas de JavaScript, es decir, funciona con Java.
  Para que cualquier equipo pueda ejecutarlo, necesitamos Node.js
  Node.js esta construido en lenguaje C, y dentro, contienen un motor que ejecuta Java.
  Esa es la magia, desde ahí, podremos ejecutar comandos de Java y así es como instalaremos lo siguiente.
  # Instalaremos
    - Instalar Node Package Manager, esto hará que podamos ejecutar sin problema el ambiente para ejecutar: https://nodejs.org/en/download
    - Una vez instalado, nos tendremos que mover a la carpeta donde tenemos los archivos de este proyecto, sea Windows o Mac, a través de la terminal:
      Windows: http://www.falconmasters.com/offtopic/como-utilizar-consola-de-windows/
      Mac: https://www.solvetic.com/tutoriales/article/8585-cambiar-de-directorio-en-terminal-mac-comandos-pwd-ls-cd/
    - Una vez ubicados en el directorio de la carpeta que contiene el proyecto, bastará con que escribamos:
      "npm run dev"
      y en el navegador que querramos, simplemente tendremos que copiar el enlace que nos arrojará la misma terminal donde escribimos previamente el comando.


/* Observaciones generales */


/*

La necesidad de no utilizar Redux, básicamente planteó el poder utilizar un par de custom hooks situacionales, estos se pueden encontrar en fecthData.js y useFetch.js.
# Fetch con Suspense, fallback, objeto promesa:
fetchData.js <= Es una manera muy especial de hacer el fetch, ya que investigando encontre de un componente custom llamado "Suspense" que ofrece React, pero este funciona únicamente cuando conocemos la ruta exacta que cargará el componente que utilizaremos, y lo interesante es que suspense recibe un prop llamado "fallback"
que sin necesidad de usar ifs condicionales, renderizará lo que encerremos en el, una vez que la promesa que esta atrapada en el componente, sea resuelta.
Como dije, es una manera pero no es del todo reutilizable, sin embargo, siempre que conozcamos las rutas fijas, similar a un loader, podremos utilizar "Suspense" para no tener ifs condicionales. Puede reutilizarse en toda la aplicación, eso sí.
# Fetch con Custom Hook, AbortController, Signal 
useFetch.js <= Para esta manera que es la segunda en que hago fetch a la api de Pokemon, aqui tenemos una definición pura de un customHook. Dentro de este archivo reutilizable, hacemos un fetch totalmente dinamico, reutilizable que recibe una URL y atrapa errores y además permite, con uno de los conceptos que investigué abortar la petición de la API por medio de un signal, esto es excelente ya que no pediremos recursos del servidor de no ser necesarios, y la cantidad de recursos ahorrados lo vale totalmente. Aqui si retornamos el data directo de la respuesta fetch.
# Estilos en el componente y cuando no los utilicé
La constante stylesMainCardsContainer que se puede encontrar en Main.jsx es una aproximación sumamente mejorable, de hecho, esta más ahí como ejemplo de una de las aproximaciones, ya que se que componentes compartirán estilos, y lo envío directo como props. Esto, básicamente es porque aunque las paginaciones de la carpeta ROUTES pueden variar, pero en base, son muy iguales, una para la paginación de apenas 20 Pokemon, y la otra para el Pokedex entero de Kanto.
Index.css solo tiene un estilo para una animación, realmente me interesaba no repetir codigo y para presencia global del Modal de React. 


*/

