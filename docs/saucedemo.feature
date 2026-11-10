Feature: SauceDemo UI Automation

  Scenario: Login with valid credentials
    Given user is on the SauceDemo login page
    When user logs in with valid credentials
    Then user should be redirected to the products page

  Scenario: Sort products from A to Z
    Given user is logged in and on the products page
    When user sorts products by name from A to Z
    Then products should be displayed in alphabetical order

  Scenario: Sort products from Z to A
    Given user is logged in and on the products page
    When user sorts products by name from Z to A
    Then products should be displayed in reverse alphabetical order

  Scenario: Sort products by lowest price
    Given user is logged in and on the products page
    When user sorts products by price from low to high
    Then products should be displayed from lowest to highest price

  Scenario: Sort products by highest price
    Given user is logged in and on the products page
    When user sorts products by price from high to low
    Then products should be displayed from highest to lowest price

  Scenario: Complete product checkout
    Given user is logged in and on the products page
    When user adds a product to the cart
    And user proceeds to checkout
    And user enters valid checkout information
    And user completes the order
    Then user should see the order confirmation message