Feature: Smoke

  @PrimaryAuth
  Scenario Outline: As a user, I want to log into the NGA sample application with APIc Primary Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    Then the user should be able to view the Dashboard screen <message>

    Examples:
      |policy | username | password             | message                        |
      |Fallback| DMT-S-W263952560 | Aetna2aetna | Logged in to the NGA Sample app successfully |
      |BiometricOnly| QA2-BARROWS-2909 | Aetna2aetna | Logged in to the NGA Sample app successfully |
      |PINOnly| DMT-S-W263952560 | Aetna2aetna | Logged in to the NGA Sample app successfully |

  @VerifySettings_BeforeLogin
  Scenario Outline: As a user, I want to verify the Settings screen details before Primary Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user navigates to the Settings screen
    Then the user should be able to verify all the setting details before login

    Examples:
      |policy | message |
      |Fallback | Validated Settings Screen details before Login with Fallback policy |
      |BiometricOnly| Validated Settings Screen details before Login with Biometric only policy |
      |PINOnly| Validated Settings Screen details before Login with PIN only policy |

  @E2E_PrimaryAuth_Enroll_Logout_SignIn_Authenticate_Unenroll_Reset
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user authenticates <policy>
    When the user unenrolls
    When the user resets the app

    Examples:
      |policy | username | password | PrimaryAuthenticator |
      |Fallback | DMT-S-W263952560 | Aetna2aetna | PIN |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna | |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna | |

  @PrimaryAuth_Enroll_Unenroll_Reset
  Scenario Outline: As a user, I can log into the NGA sample application with APIc Primary Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user unenrolls
    When the user resets the app

    Examples:
    |policy | username | password |
    |Fallback | DMT-S-W263952560 | Aetna2aetna |
    |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
    |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @PrimaryAuth_Reset
  Scenario Outline: As a user, I can log into the NGA sample application with APIc Primary Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user resets the app

    Examples:
    |policy | username | password |
    |Fallback | DMT-S-W263952560 | Aetna2aetna |
    |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
    |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @PrimaryAuth_Enroll_Reset
  Scenario Outline: As a user, I can log into the NGA sample application with APIc Primary Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user resets the app

    Examples:
    |policy | username | password |
    |Fallback | DMT-S-W263952560 | Aetna2aetna |
    |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
    |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @VerifySettings_AfterEnroll
  Scenario Outline: As a user, I can log into the NGA sample application with APIc Primary Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user should be able to verify all the setting details after enroll
    When the user resets the app

    Examples:
    |policy | username | password |
    |Fallback | DMT-S-W263952560 | Aetna2aetna |
    |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
    |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @VerifySettings_AfterPrimaryAuth_BeforeEnroll
  Scenario Outline: As a user, I can log into the NGA sample application with APIc Primary Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user should be able to verify all the setting details before Enroll
    When the user resets the app

    Examples:
    |policy | username | password |
    |Fallback | DMT-S-W263952560 | Aetna2aetna |
    |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
    |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @VerifySettings_AfterFIDOAuthentication
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user authenticates <policy>
    When the user should be able to verify all the setting details after FIDO Authentication
    When the user unenrolls
    When the user resets the app

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |