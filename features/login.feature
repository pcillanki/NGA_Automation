Feature: The NGA sample application

  @Login @Regression
  Scenario Outline: As a user, I can log into the NGA sample application with APIc Primary Authentication
    
    Given User has launched the NGA sample application
    And User has selected the <policy>
    When I login with <username> and <password>
    Then I should the Dashboard screen <message>

    Examples:
      |policy | username | password             | message                        |
      |Fallback| DMT-S-W263952560 | Aetna2aetna | Logged in to the NGA Sample app successfully |
      |Biometric only| QA2-BARROWS-2909 | Aetna2aetna | Logged in to the NGA Sample app successfully |
      |PIN only| DMT-S-W263952560 | Aetna2aetna | Logged in to the NGA Sample app successfully |
