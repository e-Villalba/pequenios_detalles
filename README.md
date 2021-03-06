# Peque帽os Detalles

Este proyecto es un Site de Compras de Ropa, remeras y buzos.
En github en la ra铆z de la rama "master" se encuentra el archivo "DEMO_pequenios_detalles.webm", el mismo es un breve video de 3 minutos que muestra el uso de la SPA de "Peque帽os Detalles"

## Comenzando 馃殌

El proyecto est谩 Desarrolla con REACT utilizando la IDE Visual Studio Code. En la secci贸n instalaci贸n se detallan las instrucciones para obtener una copia del proyecto que podr谩 ser utilizada para desarrollo y pruebas.

### Pre-requisitos 馃搵

- Sugiero previamente tener instalado el Visual Studio Code, podr谩 utilizar otra que sea su preferida pero se sugiere la mencionada VSC.
- Se puede descarga VSC desde https://code.visualstudio.com/download
- Instalar Node JS https://nodejs.org/en/
- Luego de instalado Node Ejecutar en la terminal o ventana de comandos "node --version"  debe aparecer el nro de versi贸n para confirmar la correcta instalaci贸n.


### Instalaci贸n 馃敡
A continuac贸n se detallan los pasos para obtener una copia del proyecto.
1 - Nos vamos al perfil de GitHub y seleccionamos el proyecto "pequenios_detalles"

2 - Una vez dentro del proyecto, seleccionamos la opci贸n de Clone or Download y copiamos la URL https://github.com/e-Villalba/pequenios_detalles .

3 - Ya copiada la URL de nuestro proyecto, creamos una carpeta para ejemplifica la llamo "nuevo_proyecto"

4 - Suponiendo que creaste la carpeta del paso 3 en la unidad D de tu equipo, debes ubicarte en esa carpeta y desde la terminal ejecutar
    D:\nuevo_proyecto>git clone https://github.com/e-Villalba/pequenios_detalles.git
Presionamos Enter y de esa forma se procede a descargar el proyecto en la carpeta que indicaste.

4 - El 煤ltimo paso ser铆a corroborar si se descarg贸 correctamente y para eso abrimos el Explorador de Windows (WIN + E), para dirigirnos a la carpeta que elegiste y listo.

## Despliegue 馃摝
Como se trata de una SPA construida con REACT tienes que seguir los siguientes pasos para su despliegue, tomamos como ejemplo el despliegue en "githubpages".
Los pasos enumerados son los descriptos por nuestro QUERIDO Profe Alex Marin Mendez!!

1 - Desde VSC y accediendo a una terminal ejecutar el comando "npm i -D ghpages", el par谩metro "-D" indica que se trata de trabajo en entorno de desarrollo. Se instalar谩n los componentes que permitir谩n el despliegue e integraci贸n en "Git Hub pages"

2 - Finalizada la instalaci贸n del paso 1 dirigirse al archivo "package.json" y agregar en la primer linea lo siguiente: "homepage": "https://e-Villalba.github.io/pequenios_detalles"

3 - En el archivo "package.json" dirigirse a "scripts" y agregar "scripts":  "build": "react-scripts build", y  "deploy": "gh-pages -d build".

4 - En la terminal de VSC ejecutar "npm run build" compila y crea en disco los componentes a desplegar (htlm, css y javascript que pueden ser interpretados y ejecutados en un browser)

5 - Finalizado el paso 4 ejecutar "npm run deploy"

- Con estos pasos queda desplegado el Site del proyecto se puede ejecutar desde GitHubPages.
- Tambien puedes ejecutarlo localmente desde VSC, para ello debes indicar en una "terminal" el comando "npm start" autom谩ticamente en tu browser se levantar谩 la SPA.

## Construido con 馃洜锔?

Herramientas, Frameworks y Recursos utilizados en la construcci贸n del Proyecto.

* Visual Studio Code:   Como IDE para el Desarrollo: "https://code.visualstudio.com"
* GitHub:               para el manejo de Versionado "https://github.com/"
* Bootstrap:            Manejo de Estilos de la SPA  "https://getbootstrap.com/"
* CSS:                  Estilos personalizados de la Aplicaci贸n.
* FontAweson:           Iconos de componentes        "https://fontawesome.com/icons"  
* Ionicons:             Iconos de componentes        "https://ionic.io/ionicons" 
* Firebase-Firestore    Base de Datos no relacional para almacenar las Colecciones de Productos (products)y Ordenes de Compra (orders) utilizados en la SPA. Para cada colecci贸n se generan documentos que guardan los productos que puede comprar el cliente y las ordenes de compra realizadas por el cliente. "https://console.firebase.google.com/"


## Versionado 馃搶

- Para el Versionado se utiliza GitHub, se presentan ramas con las distintas versiones correspondientes a cada entrega
- En la rama "master" de https://github.com/e-Villalba/pequenios_detalles, est谩n los contenidos de la entrega final.

## Autores 鉁掞笍

A continuaci贸n del Detalle de los participantes de Este proyecto

* **Alex Marin Mendez** - Nuestro QUERIDO y ESTIMADO Profe quien nos di贸 todo el conocimiento y apoyo para avanzar y lograr esta entrega final.
* **Rodrigo Collins**   - Mi  QUERIDO y ESTIMADO Tutor que siempre estuvo atento a mis consultas, comparti贸 su conocimiento y me ayudo en momentos dificiles alumbrando con su conocimiento situaciones que no lograba resolver por mi cuenta.
Tambi茅n me aport贸 sugerencias para cada entrega y para la entrega final el plus de "cargar datos del Comprador" para que no est茅n en modo "hardcode".
* **Esteban Villalba**  - Quien escribe este README y tiene el agrado de presentar la Entrega Final. Fui aprendiendo con cada entrega, construyendo cada componente y avanzando en conocimientos para lograr mi primer SPA en REACT.


## Expresiones de Gratitud 馃巵
* Primero que nada Gracias Profe Alex y mi Tutor Rodrigo. Sus conocimientos y aportes hicieron posible este aprendizaje.
* Si alg煤n d铆a est谩n por Argentina, Provincia de C贸rdoba, Localidad La Cumbre ser谩n Bienvenidos y les invitar茅 una cerveza 馃嵑 o un caf茅 鈽? por todo su apoyo! 


---
鈱笍 con 鉂わ笍 por [Esteban Villalba](https://github.com/e-Villalba) 馃槉

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
