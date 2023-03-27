Feature: The NGA sample application

  @Login @Regression
  Scenario Outline: As a user, I can log into the NGA sample application with APIc Primary Authentication
    
    Given I have launched the NGA sample application
    When I login with <username> and <password>
    Then I should the Dashboard screen <message>

    Examples:
      | username | password             | message                        |
      | DMT-S-W263952560 | Aetna2aetna | Logged in to the NGA Sample app successfully |
      | QA2-BARROWS-2909 | Aetna2aetna | Logged in to the NGA Sample app successfully |
