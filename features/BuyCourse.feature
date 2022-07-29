Feature: Buying course

    As a client
    I want to choose a course, be able to add it to the shopping
    cart or buy it directly and select the payment method

    Scenario: Buying a course with a credit card
        Given I am logged in as a "user".
        And  I choose a course from the list of courses
        Then I am redirected to the payment section
        When I select the discount coupon
        And Coupon is availabel
        And I select credit card as payment method
        And I fill all my card information
        Then The course will become available to me

    Scenario: Buying a couse with bank slip
        Given I am logged in as a "user".
        And  I choose a course from the list of courses
        Then I am redirected to the payment section
        When I select the discount coupon
        And Coupon is availabel
        And I select bank slip as payment method
        And I view the ticket and its information
        And The payment is approved
        Then The course will become available to me
    
    Scenario: Buying courses from the shooping cart
        Given I am logged in as a "user".
        And  I choose course from shopping cart list
        Then I am redirected to the payment section
        When I select the discount coupon
        And Coupon is availabel
        And I select the payment method
        And The payment is approved
        Then The course will become available to me

    Scenario: Coupon is invalid
        Given I am logged in as a "user".
        And  I choose a course from shopping cart list or from the list of courses
        Then I am redirected to the payment section
        When I select the discount coupon
        And Coupon is invalid
        Then I recive an "invalid coupon" message
        And I remain in the payment section

    Scenario: Purchase danied
        Given I am logged in as a "user".
        And I choose
        And  I choose a course from shopping cart list or from the list of courses
        Then I am redirected to the payment section
        When I select the discount coupon
        And Coupon is invalid
        And I select the payment method
        And The payment is not approved
        Then I recive an "payment is not approved" message
        And I remain in the payment section
        