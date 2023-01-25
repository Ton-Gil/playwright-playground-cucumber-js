Feature: Dummmy Feature

Scenario: Successful Login when using valid user and valid password
    Given I am "standard_user" valid user
    When I login with user "valid" password
    Then I see "Products" page


