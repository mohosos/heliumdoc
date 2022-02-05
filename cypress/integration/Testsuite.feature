Feature: HeliumDoc TestSuite

  
  Scenario: The user must be able to search for a clinic or a doctor
    Given The user open HeliumDoc page
    When  The user type the searchWord "Mohamed"
    Then  The user will get the first result contain clinic "Mohamed"
    Then  The user will get the first result contain doctor "Mohamed"

  Scenario: The user should be able to search for a doctor by specialty and area
    Given The user choose the speciality and the area then click search
    Then  The user will get a list of of doctors having button "Book Now"

  Scenario: The user should be able to view Blog links and visit them
    Given The user will scroll down and click Blog link
    Then The user should see all blog links 

    When The User click on blog link children 
    Then The user will see that the page contain title "Children"

    When The User click on blog link dentistry 
    Then The user will see that the page contain title "Dentistry"

    When The User click on blog link dermatology 
    Then The user will see that the page contain title "Dermatology"

    When The User click on blog link hair 
    Then The user will see that the page contain title "Hair"

    When The User click on blog link food 
    Then The user will see that the page contain title "Food"

    When The User click on blog link New In Science 
    Then The user will see that the page contain title "New in Science"

    When The User click on blog link Lifestyle 
    Then The user will see that the page contain title "Lifestyle"

    When The User click on blog link Hakeem Hacks 
    Then The user will see that the page contain title "Hakeem Hacks"

    When The User click on blog link Doc A Talk 
    Then The user will see that the page contain title "Doc' A Talk"

  Scenario: The user should be able to switch countries
    Given The user open HeliumDoc page
    When  The user switch the country to UAE
    Then  The user will see statment: Find best Docotrs in country "UAE"  

  Scenario: The user should be able to click on popular specialty links
    Given The user scroll down to the popular speciality links
    Then  The Obstetricians & Gynecologists link should has attribure href path and onlclick not empty 
     
    Then  The Pediatricians link should has attribure href path and onlclick not empty 

    Then  The General Doctors link should has attribure href path and onlclick not empty

    Then  The Dentists link should has attribure href path and onlclick not empty

    Then  The Skin Doctors link should has attribure href path and onlclick not empty

    Then  The Eye Doctors link should has attribure href path and onlclick not empty

  Scenario: The user should be able to visit our Facebook page using the Facebook icon in our footer
    Given The user scroll down to the end of the page
    When  The user click Facebbook Icon
    Then  The facebook open page will open to "HeliumDoc Qatar" facebook page 