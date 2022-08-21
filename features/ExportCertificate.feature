Feature: See and export the course certificate

    As a client
    I want to open a completed course, be able to open it's certficate and export it.

    Scenario: Seeing a completed course's certificate
        Given I am logged in as a "user".
        And  I choose the course "OO Programming" from the list of courses I own
        And  I have already finished the course
        And  I see the option to open the certificate
        When I open the certificate
        Then A new window shows me the certificate

    Scenario: Seeing an unfinished course's certificate
        Given I am logged in as a "user".
        And  I choose the course "OO Programming" from the list of courses I own
        And  I haven't finished the course yet
        When I open the certificate
        Then A new window tells me "You haven't finished this course yet"
        And  I am returned to the course page
    
    Scenario: Exporting a completed course's certificate
        Given I am logged in as a "user".
        And  I am seeing a certificate for a finished course
        When I select Export
        Then I download the certificate as a document

    Scenario: Exporting an unfinished course's certificate
        Given I am logged in as a "user".
        And  I choose the course "OO Programming" from the list of courses I own
        And  I haven't finished the "OO Programming" course yet
        When I try export the certificate
        Then A message is shown saying "You can't emmit a certificate for an unfinished course"
        And  I am returned to the course's page
        