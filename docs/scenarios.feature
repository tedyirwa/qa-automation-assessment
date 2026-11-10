Feature: SauceDemo UI Tests

  Scenario: Login with valid credentials
    Given user is on the login page
    When user logs in with valid credentials
    Then user should see the products page

  Scenario: Sort products from A to Z
    Given user is on the products page
    When user sorts products by name from A to Z
    Then products should appear in alphabetical order

  Scenario: Sort products from Z to A
    Given user is on the products page
    When user sorts products by name from Z to A
    Then products should appear in reverse alphabetical order

  Scenario: Sort products by lowest price
    Given user is on the products page
    When user sorts products by price from low to high
    Then the lowest-priced product should appear first

  Scenario: Sort products by highest price
    Given user is on the products page
    When user sorts products by price from high to low
    Then the highest-priced product should appear first

  Scenario: Complete product checkout
    Given user is on the products page
    When user adds a product to the cart
    And user proceeds to checkout
    And user fills in the checkout information
    And user completes the order
    Then user should see the order confirmation message