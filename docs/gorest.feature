Feature: GoRest API Automation

  Scenario: Create a new user
    Given a valid and unique user payload
    When user sends a POST request to create a new user
    Then the API should return status code 201
    And the response should contain the newly created user details
    And the response should include a user ID

  Scenario: Get user details
    Given an existing user ID
    When user sends a GET request to retrieve the user details
    Then the API should return status code 200
    And the response should contain the correct user details

  Scenario: Update user details
    Given an existing user ID
    And valid updated user data
    When user sends a PUT request to update the user
    Then the API should return status code 200
    And the response should contain the updated user details