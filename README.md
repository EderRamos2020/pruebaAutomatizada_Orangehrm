# pruebaAutomatizada_Orangehrm
Desarrollo de un proyecto de automatización de pruebas en Cypress y javascript para la plataforma Orange HRM

Pasos para la ejecucion del proyecto de automatizacion
1.Descargar todos los archivos del repositorio
2.Ingresar desde visual studio code a la ruta cypress/e2e/orange_test.cy.js
3.En el visual studio code abrir una nueva terminal para la ruta anterior (cypress/e2e/orange_test.cy.js)
4.Ejecutar en la nueva terminal el comando "npm run orange_test" sin comillas, para iniciar la prueba automatizada
5.Se abrira la interfaz de Cypress, seleccionar continuar, luego seleccionar  "E2E Testing"
6.Luego escoger el navegador web para reproducir la prueba y presionar el boton "Start E2E Testing in..."
7.Luego seleccionar el nombre del archivo "orange_test"

Estructura del Repositorio
cypress :               Estructura del proyecto de automatizacion
evidencia de pruebas :  Documento con las imagenes de la prueba automatizada
historias_usuario :     Documentos de las historias de usuario
node_modules  :         Paquete de archivos del entorno de ejecucion de node.js
package-lock.json :     Estructura de objetos para inicializar del entorno de ejecucion de node.js 
package.json  :         Inicializacion del package principal y del proyecto