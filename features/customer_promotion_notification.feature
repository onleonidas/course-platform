Feature: Client promotion notification 

	As a client I want to receive notifications when promotions are available  

Scenario: The client can turn notifications on and off
	Given I am logged in as client “jose”
	And I am at the configurations page
	When I chose to turn on/off my push notifications 
	Then I receive a confirmation that my preferences where saved 

Scenario: Then client receives a notification when logged as a client
    Given I have just logged in as client "maria"
    When I have "Python course 40% off" course promotion available for "maria"
    Then I see a notification indicating that I have "Python course 40% off" promotion avalible 
    And clicking that notification leads me to the promotion page 

Scenario: The client can visualize his notification history 
    Given I am logged in as client "joão"
    And I am at the configurations page
    And I see a notifications history button
    When I click the click the notifications history button
    Then I go to the notifications history page 
    And I see all my notification ever sent to "joão"

Scenario: The client can use the notifications in notifications history
    Given I logged in as client "Alberto"
    And I am at the notifications history page 
    And I see my promotions notifications
    When I click promotion notification "Docker course 20% off"
    And that promotion still active
    Then I go to the promotion page "Docker course 20% off"

