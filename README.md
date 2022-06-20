# Pequeños Detalles

Este proyecto es un Site de Compras de Ropa, remeras y buzos.
En github en la raíz de la rama "master" se encuentra el archivo "DEMO_pequenios_detalles.webm", el mismo es un breve video de 3 minutos que muestra el uso de la SPA de "Pequeños Detalles"

## Comenzando 🚀

El proyecto está Desarrolla con REACT utilizando la IDE Visual Studio Code. En la sección instalación se detallan las instrucciones para obtener una copia del proyecto que podrá ser utilizada para desarrollo y pruebas.


### Pre-requisitos 📋

- Sugiero previamente tener instalado el Visual Studio Code, podrá utilizar otra que sea su preferida pero se sugiere la mencionada VSC.
- Se puede descarga VSC desde https://code.visualstudio.com/download
- Instalar Node JS https://nodejs.org/en/
- Luego de instalado Node Ejecutar en la terminal o ventana de comandos "node --version"  debe aparecer el nro de versión para confirmar la correcta instalación.


### Instalación 🔧
A continuacón se detallan los pasos para obtener una copia del proyecto.
1 - Nos vamos a nuestro perfil de GitHub y seleccionamos el proyecto "pequenios_detalles"

2 - Una vez dentro del proyecto, seleccionamos la opción de Clone or Download y copiamos la URL https://github.com/e-Villalba/pequenios_detalles .

3 - Ya copiada la URL de nuestro proyecto, creamos una carpeta para ejemplifica la llamo "nuevo_proyecto"

4 - Suponiendo que creaste la carpeta del paso 3 en la unidad D de tu equipo, debes ubicarte en esa carpeta y desde la terminal ejecutar
    D:\nuevo_proyecto>git clone https://github.com/e-Villalba/pequenios_detalles.git
Presionamos Enter y de esa forma se procede a descargar el proyecto en la carpeta que indicaste.

4 - El último paso sería corroborar si se descargó correctamente y para eso abrimos el Explorador de Windows (WIN + E), para dirigirnos a la carpeta que elegiste y listo.

## Despliegue 📦
Como se trata de una SPA construida con REACT tienes que seguir los siguientes pasos para su despliegue, tomamos como ejemplo el despliegue en "githubpages".
Los pasos enumerados son los descriptos por nuestro QUERIDO Profe Alex Marin Mendez!!
    1 - Desde VSC y accediendo a una terminal ejecutar el comando "npm i -D ghpages", el parámetro "-D" indica que se trata de trabajo en entorno de desarrollo. Se instalarán los componentes que permitirán el despliegue e integración en "Git Hub pages"
    2 - Finalizada la instalación del paso 1 dirigirse al archivo "package.json" y agregar en la primer linea lo siguiente: "homepage": "https://e-Villalba.github.io/pequenios_detalles"
    3 - En el archivo "package.json" dirigirse a "scripts" y agregar "scripts":  "build": "react-scripts build", y  "deploy": "gh-pages -d build".
    4 - En la terminal de VSC ejecutar "npm run build" compila y crea en disco los componentes a desplegar (htlm, css y javascript que pueden ser interpretados y ejecutados en un browser)
    5 - Finalizado el paso 4 ejecutar "npm run deploy"

- Con estos pasos queda desplegado el Site del proyecto se puede ejecutar desde GitHubPages.
- Tambien puedes ejecutarlo localmente desde VSC, para ello debes indicar en una "terminal" el comando "npm start" automáticamente en tu browser se levantará la SPA.

## Construido con 🛠️

Herramientas, Frameworks y Recursos utilizados en la construcción del Proyecto.

* Visual Studio Code:   Como IDE para el Desarrollo: "https://code.visualstudio.com"
* GitHub:               para el manejo de Versionado "https://github.com/"
* Bootstrap:            Manejo de Estilos de la SPA  "https://getbootstrap.com/"
* CSS:                  Estilos personalizados de la Aplicación.
* FontAweson:           Iconos de componentes        "https://fontawesome.com/icons"  
* Ionicons:             Iconos de componentes        "https://ionic.io/ionicons" 
* Firebase-Firestore    Base de Datos no relacional para almacenar las Colecciones de Productos (products)y Ordenes de Compra (orders) utilizados en la SPA. Para cada colección se generan documentos que guardan los productos que puede comprar el cliente y las ordenes de compra realizadas por el cliente. "https://console.firebase.google.com/"


## Versionado 📌

- Para el Versionado se utiliza GitHub, se presentan ramas con las distintas versiones correspondientes a cada entrega
- En la rama "master" de https://github.com/e-Villalba/pequenios_detalles, están los contenidos de la entrega final.

## Autores ✒️

A continuación del Detalle de los participantes de Este proyecto

* **Alex Marin Mendez** - Nuestro QUERIDO y ESTIMADO Profe quien nos dió todo el conocimiento y apoyo para avanzar y lograr esta entrega final.
* **Rodrigo Collins**   - Mi  QUERIDO y ESTIMADO Tutor que siempre estuvo atento a mis consultas, compartió su conocimiento y me ayudo en momentos dificiles alumbrando con su conocimiento situaciones que no lograba resolver por mi cuenta.
También me aportó sugerencias para cada entrega y para la entrega final el plus de "cargar datos del Comprador" para que no estén en modo "hardcode".
* **Esteban Villalba**  - Quien escribe este README y tiene el agrado de presentar la Entrega Final. Fui aprendiendo con cada entrega, construyendo cada componente y avanzando en conocimientos para lograr mi primer SPA en REACT.


## Expresiones de Gratitud 🎁
* Primero que nada Gracias Profe Alex y mi Tutor Rodrigo. Sus conocimientos y aportes hicieron posible este aprendizaje.
* Si te atreves, Comenta a otros sobre este proyecto 📢
* Si algún día están por Argentina, Provincia de Córdoba, Localidad La Cumbre serán Bienvenidos y les invitaré una cerveza 🍺 o un café ☕ por todo su apoyo! 


---
⌨️ con ❤️ por [Esteban Villalba](https://github.com/e-Villalba) 😊
