Feature: User Autentification

        As a client i want to guarantee that the access to my acount is protected

Scenario: the client login on his account successfully
        Given i am on the initial page 
        When i click on the login buttom
        And i fill my username "julio"
        And my password "@12345"
        Then i press the confirm buttom 
        And i am redirected to the initial page

Scenario: attmpting to login with the wrong password
        Given i am on the initial page 
        When i click on the login buttom
        And i fill my username "julio"
        And a wrong password "54321@"
        Then i press the confirm buttom
        And a "wrong password" message appears

Scenario: the client wants to change his password
        Given i am at the login page
        And i click on teh "forgot password" buttom
        When i see a message asking for my email
        And i write my email used to create my account
        And i click on the link that was sent to my email 
        And i am redirected to a page asking for my new password
        And i fill my new password
        Then i click the "confirm" buttom
        And a "password redefined successfully" message appears


Scenario: the client wants to login on his account using a mobile device
        Given i am logged in on my phone as "julio"
        And i am at the login page on my computer
        When i press the "login with your phone" buttom
        And a QR code appears on the screen
        Then i point the phone's camera to the code trhoug the app
        And a message of successfull login appear on the computer
        And i am redirected to the initial page
