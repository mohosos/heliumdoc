/// <reference types="cypress"/>

import { Given } from "cypress-cucumber-preprocessor/steps";

Given('The user open HeliumDoc page', () => {
  cy.visit('/')
})

When('The user type the searchWord {string}', (searchWord) => {
  cy.get('#search-text-desk').type(searchWord)
})

Then('The user will get the first result contain clinic {string}',(clinic)=>{
  cy.get('#search-text-desk-item-0 > .result-info > .result-header-wrapper > .result-header > .result-highlight').should('contain',clinic)
})

Then('The user will get the first result contain doctor {string}',(doctor)=>{
  cy.get('#search-text-desk-item-5 > .result-info > .result-header-wrapper > .result-header > .result-highlight').should('contain',doctor)
})
/////////////////////////////////////////////////
Given('The user choose the speciality and the area then click search', () => {
  cy.get('#specTrigger').click()
  cy.get('#specOverlay > .generic-overlay > .overlay-options-container > [tabindex="2"]').click()
  cy.get('#areaTrigger').click()
  cy.get('#areaOverlay > .generic-overlay > .overlay-options-container > [tabindex="3"]').click()
  cy.get('#homepageSearchButton').click()
})



Then('The user will get a list of of doctors having button {string}',(button)=>{
  cy.get('.listings-book-now').should('contain',button)
})
/////////////////////////////////////////////////
Given('The user will scroll down and click Blog link', () => {
  //const url = "https://hakeem.heliumdoc.com/"
  cy.scrollTo(0,2500)
  cy.get('[href="http://hakeem.heliumdoc.com/"]').invoke('attr', 'href').then(href => {
    cy.visit(href);
})
})
Then('The user should see all blog links', () => {
  cy.get('.nav-children > a').should('contain', "Children")
  cy.get('.nav-dentistry > a').should('contain', "Dentistry")
  cy.get('.nav-dermatology > a').should('contain', "Dermatology")
  cy.get('.nav-hair > a').should('contain', "Hair")
  cy.get('.nav-food > a').should('contain', "Food")
  cy.get('.nav-new-in-science > a').should('contain', "New in Science")
  cy.get('.nav-lifestyle > a').should('contain', "Lifestyle")
  cy.get('.nav-hakeem-hacks > a').should('contain', "Hakeem Hacks")
  cy.get('.nav-doc-a-talk > a').should('contain', "Doc' a Talk")
})


When('The User click on blog link children', () => {
  cy.get('body > div.site-wrapper > nav > div > div.site-nav-left > ul > li.nav-children > a').invoke('attr', 'href').then(href => {
      cy.visit(href);
  })
})
Then('The user will see that the page contain title {string}', (title) => {
  cy.get('.site-title').should('contain', title)
  cy.go('back')
})



When('The User click on blog link dentistry', () => {
  cy.get('body > div.site-wrapper > nav.site-nav > div > div.site-nav-left > ul > li.nav-dentistry > a').invoke('attr', 'href').then(href => {
      cy.visit(href);
  })
})
Then('The user will see that the page contain title {string}', (title) => {
  cy.get('.site-title').should('contain', title)
  cy.go('back')
})


When('The User click on blog link dermatology', () => {
  cy.get('body > div.site-wrapper > nav > div > div.site-nav-left > ul > li.nav-dermatology > a').invoke('attr', 'href').then(href => {
      cy.visit(href);
  })
})
Then('The user will see that the page contain title {string}', (title) => {
  cy.get('.site-title').should('contain', title)
  cy.go('back')
})


When('The User click on blog link hair', () => {
  cy.get('body > div.site-wrapper > nav > div > div.site-nav-left > ul > li.nav-hair > a').invoke('attr', 'href').then(href => {
      cy.visit(href);
  })
})
Then('The user will see that the page contain title {string}', (title) => {
  cy.get('.site-title').should('contain', title)
  cy.go('back')
})


When('The User click on blog link food', () => {
  cy.get('body > div.site-wrapper > nav > div > div.site-nav-left > ul > li.nav-food > a').invoke('attr', 'href').then(href => {
      cy.visit(href);
  })
})
Then('The user will see that the page contain title {string}', (title) => {
  cy.get('.site-title').should('contain', title)
  cy.go('back')
})


When('The User click on blog link New In Science', () => {
  cy.get('body > div.site-wrapper > nav > div > div.site-nav-left > ul > li.nav-new-in-science > a').invoke('attr', 'href').then(href => {
      cy.visit(href);
  })
})
Then('The user will see that the page contain title {string}', (title) => {
  cy.get('.site-title').should('contain', title)
  cy.go('back')
})


When('The User click on blog link Lifestyle', () => {
  cy.get('body > div.site-wrapper > nav > div > div.site-nav-left > ul > li.nav-lifestyle > a').invoke('attr', 'href').then(href => {
      cy.visit(href);
  })
})
Then('The user will see that the page contain title {string}', (title) => {
  cy.get('.site-title').should('contain', title)
  cy.go('back')
})


When('The User click on blog link Hakeem Hacks', () => {
  cy.get('body > div.site-wrapper > nav > div > div.site-nav-left > ul > li.nav-hakeem-hacks > a').invoke('attr', 'href').then(href => {
      cy.visit(href);
  })
})
Then('The user will see that the page contain title {string}', (title) => {
  cy.get('.site-title').should('contain', title)
  cy.go('back')
})


When('The User click on blog link Doc A Talk', () => {
  cy.get('body > div.site-wrapper > nav > div > div.site-nav-left > ul > li.nav-doc-a-talk > a').invoke('attr', 'href').then(href => {
      cy.visit(href);
  })
})
Then('The user will see that the page contain title {string}', (title) => {
  cy.get('.site-title').should('contain', title)
  cy.go('back')
})
////////////////////////////////////////////////////
Given('The user open HeliumDoc page', () => {
  cy.visit('/')
})
When('The user switch the country to UAE', () => {
  cy.wait(1000)
  cy.get('#languageDropdownDivSpan').click()
  cy.get(':nth-child(2) > .dropdown-item').click()
  })
  Then('The user will see statment: Find best Docotrs in country {string}',(country)=>{
    cy.get(':nth-child(2) > .dropdown-item').should('contain',country)
  })


