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
      "npm run dev" o quizá "npm start" o alguna otra cosa que el archivo "package.json" nos diga que es necesario
    - Una vez hecho nos moveremos al navegador de internet que querramos, simplemente tendremos que copiar el enlace que nos arrojará la misma terminal donde escribimos previamente el comando que nos dice que nuestra aplicación ya está corriendo.


/* Observaciones generales, notas personales, reconocimiento de áreas de oportunidad */


/*

La necesidad de no utilizar Redux, básicamente planteó el poder utilizar un par de custom hooks situacionales, estos se pueden encontrar en fecthData.js y useFetch.js.
# Fetch con Suspense, fallback, objeto promesa:
fetchData.js <= Es una manera muy especial de hacer el fetch, ya que investigando encontre de un componente custom llamado "Suspense" que ofrece React, pero este funciona únicamente cuando conocemos la ruta exacta que cargará el componente que utilizaremos, y lo interesante es que suspense recibe un prop llamado "fallback"
que sin necesidad de usar ifs condicionales, renderizará lo que encerremos en el, una vez que la promesa que esta atrapada en el componente, sea resuelta.
Como dije, es una manera pero no es del todo reutilizable, sin embargo, siempre que conozcamos las rutas fijas, similar a un loader, podremos utilizar "Suspense" para no tener ifs condicionales. Puede reutilizarse en toda la aplicación, eso sí.
# Fetch con Custom Hook, AbortController, Signal, useEffect, useState 
useFetch.js <= Para esta manera que es la segunda en que hago fetch a la api de Pokemon, aqui tenemos una definición pura de un customHook. Dentro de este archivo reutilizable, hacemos un fetch totalmente dinamico, reutilizable que recibe una URL y atrapa errores y además permite, con uno de los conceptos que investigué abortar la petición de la API por medio de un signal, esto es excelente ya que no pediremos recursos del servidor de no ser necesarios, y la cantidad de recursos ahorrados lo vale totalmente. Aqui si retornamos el data directo de la respuesta fetch.
# Estilos en el componente y cuando no los utilicé
Nota: utilice Bootstrap directo, lo instalé para no depender de una ruta en internet, aunque es también una manera de hacerlo.
Platicando de la aproximación a los proyectos en mi encuentro con Gobierno Digital, se me habló de que la manera en que estaban buscando darle estilos a los componentes, es que estos se mantuvieran dentro de los componentes, como elementos totalmente independientes de cualquier otro archivo, así que con eso en mente, me aproximé de varias maneras a los estilos de los componentes.
Como prop: la constante stylesMainCardsContainer que se puede encontrar en Main.jsx es una aproximación sumamente mejorable, de hecho, esta más ahí como ejemplo de una de las aproximaciones, ya que se que componentes compartirán estilos, y lo envío directo como props. Esto, básicamente es porque aunque las paginaciones de la carpeta ROUTES pueden variar, en base, son muy iguales, una para la paginación de apenas 20 Pokemon, y la otra para el Pokedex entero de Kanto. La cuestión es que, no quería crear un archivo module.css que tendría que importar en dos lugares. 
Inline styles: Para los demás componentes, utilicé la aproximación de "inline styles", estos, se incrustan directamente como una prop, que es un objecto que debe llevar el formato adecuado para que las propiedades de los estilos se puedan leer adecuadamente, un 'max-width' se tiene que escribir como maxWidth, ahora, es importante hacer notar que si podemos escribir "clases", como es mi aproximación en ModalPokemon.jsx, que simulo clases al hacer un nivel más de objeto en por ejemplo ".pokemonModalContainer" y para utilizarlo nos podemos referir a la propiedad de la siguiente manera: componentStyles[".pokemonModalContainer"] es importantisimo decir que esto no es añadir clases, simplemente es una manera más clara de separar los estilos en la misma, pero la intención es que los estilos estén dentro del componente y no dependan de nada más. 
Como archivo: Index.css solo tiene un estilo para una animación, realmente me interesaba no repetir codigo y para presencia global del Modal de React.
Como archivo 'module': Aquí nos aproximamos a una manera de poner los estilos que me gusta bastante, porqué por estructura, queda claro que el componente viene acompañado de una hoja de estilos, pero además, en classname de los componentes y elementos html, hacemos una manera muy elegante de declararlo como prop, así como podemos ver en PokemonDetails.jsx en la linea //import classes from './PokemonDetails.module.css'// y posteriormente en su implementación por nombre:className={ classes.modalStyles } //
Como he dicho, tenemos bootstrap como base, y todo el diseño es absolutamente mejorable, quizá, es la parte que considero más precaria en estos momentos, ya que hay muchas cosas que se pueden diseñar de mejor manera, pero la prioridad para mi fue la obtencion y lectura de datos además del funcionamiento por rutas. El diseño es totalmente desplazable, pero, si quiero decir que el enfoque es minimalista, y que lo responsivo sea de fácil implementación (como el archivo de PokeInfo.css) que solo esta hecho para un ajuste en mobile.
# Router-Dom, carpeta Routes, Loaders, ContextProvider, Header y Footer, useNavigate, useLoaderData, async Function
Como todo lo demás, me gustaría comenzar diciendo que todas las aproximaciones son absolutamente mejorables, de hecho, en muchos casos, los dejé así para que esta prueba contenga varias maneras de hacer las cosas y que funcionen.
Main.jsx contiene las rutas, eliminé el component App, ya que sentía que era un paso extra para llegar al RootLayout, que a final de cuentas, es nuestro lobby principal, rodeado por supuesto de el Header y el Footer, de un estilo completamente mejorable, también.Aquí mismo utilizamos por primera vez el createContext, únicamente para "setear" la modalidad de nuestro modal de los detalles del Pokemon, en false. 
En la ruta inicial, la que tenemos con "/" tenemos la carga del Api que, después de investigar, es una paginación de únicamente 20 Pokemon, y de ahí tenemos la opción de utilizar la siguiente paginación con la respuesta del objeto Api que se llama next. En este caso lo dejamos como ventana principal y de hecho, aquí tenemos una manera en que podemos utilizar el interesante componente Suspense, para ello, utilizamos nuestro custom hook de fetchData, y ya que sabemos que la primer página será siempre la petición por default de pokeApi, es decir: // "https://pokeapi.co/api/v2/pokemon/", podemos guardarlo en objeto promesa y encerrarlo alrededor de nuestro componente Suspense con un fallback muy sencillo como prop.
Para la siguiente ruta, es practicamente una prueba sencilla de utilización de rutas, tanto como de la utilización de un loader, donde básicamente podríamos recibir como parametro la región y hacer una búsqueda con cualquier otra región que no sea Kanto, por propositos del ejercicio y el tiempo, lo dejé limitado a 151, como prueba de la investigación de la Api, también es mejorable, pero tenía muchas ganas de demostrar la utilización de Loaders. 
PokemonDetails.jsx, sin embargo, es uno de mis componentes favoritos, ya que recibe directamente cualquier número de Pokemon en la ruta, hace la petición API fetch con un loader y nos envía directamente un modal muy bonito con imagenes diferentes del Pokemon, este si es un gran ejemplo de lo util que es la utilización de loaders para asegurar una carga buena de los componentes en la ruta, y además me parece muy elegante que solo se escriba el número del Pokemon.
Otro componente que me gusta bastante y que nos encontramos en esta línea del modal, es el carrusel de imágenes, pero quiero hacer notar que puede ser aún más dinámico, la intención era demostrar que me documenté de manera adecuada sobre que datos nos arroja la Api de Pokemon, respecto a los sprites, y la verdad es que es un carrusel que podría fácilmente recibir cualquier cantidad de imagenes, desplegarlas con un //.map pero aquí es una demostración controlada porque estoy familiarizado con los sprites. 

#Finalmente,
  toda la aplicación es absolutamente mejorable, sobre todo en como carga algunos elementos y mejorar el enrutado de algunos elementos, pero el potencial base, considero esta ahí, y sobre todo, una reutilización y estructura de carpetas bastante entendible, un buen reto fue no utilizar librerías que hicieran el trabajo de hacer fetch, por eso mismo, reconozco que estas aproximaciones son sumamente mejorables, mi familiaridad con React sigue creciendo, así como mi entusiasmo por participar en proyectos de este estilo y encontrarme con colegas que me guíen para el mejor camino de la programación. Gracias por leerme.  

*/

