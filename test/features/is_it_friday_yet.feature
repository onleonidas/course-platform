Feature: Client promotion notification 

	As a client I want to receive notifications when promotions are available  


Scenario: The client can visualize his notification history 
    Given I am at the configurations page
    And I see a notifications history button
    When I click the click the notifications history button
    Then I go to the notifications history page 
    And I see all my notification ever sent 