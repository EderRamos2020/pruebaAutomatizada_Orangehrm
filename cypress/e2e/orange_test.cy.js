///<reference types="Cypress" />

describe('Test Orange', () => {

  it('Test login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    //ingresando usuario
    //cy.get('div:nth-child(2) > input[name="username"]').type('admin') 
    cy.get(' input[name="username"] ').type('admin')
    //ingresando clave
    //cy.get(' div:nth-child(2)  input[type="password"] ').type('admin123')
    cy.get(' input[type="password"] ').type('admin123')
    //click en el boton
    cy.get('button').click()
    //espera de 2 segundos
    cy.wait(2000)



    //se selecciona la seccion Recruitment
    cy.get('ul > li:nth-child(5) > a > span ').click()
    cy.wait(2000)
    //seleccion del boton agregar
    cy.get('.orangehrm-header-container > button').click()
    cy.wait(2000)
    //ingreso de primer nombre, segundo nomgre y apellido
    cy.get('input[name="firstName"]').type('juan')
    cy.get('input[name="middleName"]').type('jose')
    cy.get('[name="lastName"]').type('rojas')
    //seleccionando vacante
    cy.get('.oxd-select-text-input').click()
    cy.get('.oxd-select-text-input').type('test{enter}')
    cy.wait(2000)
    //invoke('show')   ingreso de email
    cy.get('.oxd-form-row div div:nth-child(1) div div:nth-child(2) input[placeholder="Type here"]').type('juanj@gmail.com')
    //ingreso de telefono
    cy.get('.oxd-form-row div div:nth-child(2) div div:nth-child(2) input[placeholder="Type here"]').type('654987')
    //cargar curriculo
    //const imageFile= 'cv.txt';
    cy.get('.oxd-file-button').click({force:true}).attachFile('cv1.txt')
    //,{timeout:10000} click({force:true}).attachFile('ima.JPG')
    //ingreso de palabras clave
    cy.get('.oxd-form-row div div div:nth-child(2) input[placeholder="Enter comma seperated words..."]').type('tecnología, software, testing ')
    /* cy.get('.oxd-date-input > input').click() */
    //ingreso de fecha de aplicacion     
    cy.get('.oxd-date-input > input').then(option =>{
      cy.wrap(option).click()  
      cy.get('.oxd-calendar-date').contains('1').click()
    })
    //Notas
    cy.get('textarea[placeholder="Type here"]').type('comienza en el año 1891, cuando un instructor de deporte del YMCA')
    //Marcar checkbox 
    cy.get('.oxd-checkbox-wrapper label span i').click()
    //guardar
    cy.get('button[type="submit"]').click()
    cy.wait(5000)



    //ejecuta el boton shorlist
    cy.get('.orangehrm-recruitment-actions button:nth-child(2)').click()



    //Ingreso de Notas
    cy.get('textarea[placeholder="Type here"] ').type('El deporte es una actividad que pone a prueba las capacidades físicas')
    //seleccionar boton guardar
    cy.get('button[type="submit"] ').click()
    cy.wait(5000)



    cy.get('.orangehrm-recruitment-actions button:nth-child(2)').click()
    //ingreso del titulo de la entrevista
    cy.get('form div:nth-child(2) div div:nth-child(1) div div+div input:nth-child(1)').type('Barticciotto')
    //ingreso del entrevistador
    //cy.get('form div:nth-child(2) div div:nth-child(1) div div+div input:nth-child(2)').click().type('joseph Evans')
    cy.get('form div:nth-child(2) div div:nth-child(1) div div+div input:nth-child(2)').then(option =>{
      cy.wrap(option).type('joseph')
      cy.wait(2000)  
      cy.get('.oxd-autocomplete-wrapper div[role="listbox"]').click()
    })
    cy.get(5000)
    //ingreso de la fecha
    cy.get('input[placeholder="yyyy-dd-mm"]').click()
    cy.get('input[placeholder="yyyy-dd-mm"]').then(option =>{
      cy.wrap(option).invoke('show')
      cy.get('.oxd-calendar-date').contains('15').click({force:true})
    })
    cy.get(5000)
    //Ingreso de la hora
    cy.get('input[placeholder="hh:mm"]').click()
    cy.get('input[placeholder="hh:mm"]').then(option =>{
      cy.wrap(option).invoke('show')
      cy.get('.oxd-time-picker div:nth-child(1) i:nth-child(1)').click()
      cy.get('.oxd-time-picker div:nth-child(3) i:nth-child(1)').click()
      cy.get('input[name="pm"]').click()
      cy.get('input[placeholder="hh:mm"]').click()
    })
    cy.get(5000)
    //ingreso de NOtas
    cy.get('textarea[placeholder="Type here"]').type('son las herramientas de cálculo más eficientes jamás inventadas')
    //seleccionar boton guardar
    cy.get('button[type="submit"]').click()
    cy.get(5000)



    //Marcar entrevista pasada
    cy.get('.orangehrm-recruitment-actions button[type="button"]:nth-child(3)').click()



    //ingresar Nota
    cy.get('textarea[placeholder="Type here"]').type('A lo largo de casi 100 años de historia, el teléfono evolucionó mucho hasta ahora')
    //seleccionar guardar
    cy.get('button[type="submit"]').click()
    cy.get(5000)



    //selecciona el boton oferta de empleo
    cy.get('.orangehrm-recruitment-actions button[type="button"]:nth-child(3)').click()
    cy.get(5000)


    //se agrega la nota en el campo y se guarda 
    cy.get('textarea[placeholder="Type here"]').type('surge a partir de un navegador que actualmente no existe: NetScape. En 1995')
    cy.get('button[type="submit"]').click()
    cy.wait(5000)


    //selecciona el boton contratacion
    cy.get('.orangehrm-recruitment-actions button[type="button"]:nth-child(3)').click()
    cy.get(5000)


    //Al campo Nota se le agrega un texto y se guarda presionando el boton 
    cy.get('textarea[placeholder="Type here"]').type('es un dispositivo electrónico portátil de mayor tamaño que un teléfono inteligente')
    cy.get('button[type="submit"]').click()



    
 
    
    
    
  })
})