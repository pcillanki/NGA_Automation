Feature: NGA iOS Sample App 

  @iOSPrimaryAuth
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

  @iOSVerifySettings_BeforeLogin
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

  @iOSE2E_PrimaryAuth_Enroll_Logout_SignIn_Authenticate_Unenroll_Reset
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
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @iOSE2E_PrimaryAuth_Enroll_Logout_SignIn_Authenticate_Logout_AirplaneMode_SignIn_Logout_AirplaneMode_Reset
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user authenticates <policy>
    When the user logs out
    When the user changes the Airplane Mode toggle
    When the user authenticates <policy>
    When the user logs out
    When the user changes the Airplane Mode toggle
    When the user authenticates <policy>
    When the user resets the app

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @iOSE2E_PrimaryAuth_Enroll_Logout_SignIn_Authenticate_ChangePolicy
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy1>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy1>
    When the user logs out
    When the user authenticates <policy1>
    When the user clicks on Change Policy
    When the user has selected the <policy2>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy2>
    When the user logs out
    When the user authenticates <policy2>
    When the user has selected the <policy3>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy3>
    When the user logs out
    When the user authenticates <policy3>
    When the user logs out

    Examples:
      |policy1 |policy2 |policy3 | username | password |
      |Fallback |BiometricOnly |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @iOSPrimaryAuth_Enroll_Unenroll_Reset
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

  @iOSPrimaryAuth_Reset
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

  @iOSPrimaryAuth_Enroll_Reset
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

  @iOSVerifySettings_AfterEnroll
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

  @iOSVerifySettings_AfterPrimaryAuth_BeforeEnroll
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

  @iOSVerifySettings_AfterFIDOAuthentication
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

  @iOSNegative_CancelEnroll @Negative
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user cancels enroll with <policy>
    When the user logs out
    When the user clicks on Change Policy

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @iOSNegative_CancelEnrollFallback @Negative
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user cancels enroll with Fallback
    When the user logs out
    When the user clicks on Change Policy

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |

  @iOSNegative_BlankPIN_InvalidPIN @Negative
  Scenario Outline: As a user, I want to test the PIN screen of the NGA Sample application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enters a blank PIN
    When the user validates the blank PIN error message
    When the user enters a invalid PINs
    When the user validates the invalid PIN error messages
    When the user cancels PIN enrollment
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user authenticates <policy>
    When the user enters incorrect PIN
    When the user validates the incorrect PIN error message

    Examples:
      |policy | username | password |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @iOSNegative_CancelFIDOAuthentication @Negative
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user cancels authentication with <policy>
        
    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @iOSNegative_IncorrectFIDOAuthentication @Negative
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user cancels authentication with <policy>
        
    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |