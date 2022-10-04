Feature: Upload course as a professor

    As a professor
    I want to upload a course 

    Scenario: Seeing upload course option
        Given I am logged in as a "professor".
        And  I see the option to upload a course
        When I open the upload course option
        Then A new window show me the course upload menu
        
    Scenario: I try to to edit my course before upload but with without a name
        Given I am logged in as a "professor"
        And  I am at the couse upload menu
        And  I see the option to edit the name and link for the course
        When I finish editing but left the name empty 
        Then I get a error mensage say I can not upload a course without a name 
        
    Scenario: I try to to edit my course before upload but without a video link 
        Given I am logged in as a "professor"
        And  I am at the couse upload menu
        And  I see the option to edit the link for the course
        When I finish editing but left the link empty 
        Then I get a error mensage say I can not upload a course without a video link 
        
