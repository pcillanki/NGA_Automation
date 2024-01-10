Feature: NGA Android Sample App 

  @PrimaryAuth  @Regression
  Scenario Outline: As a user, I want to log into the NGA sample application with Primary Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    Then the user should be able to verify all the setting details before Enroll

    Examples:
      |policy | username | password             | message                        |
      |Fallback| DMT-S-W263952560 | Aetna2aetna | Logged in to the NGA Sample app successfully |
      |BiometricOnly| QA2-BARROWS-2909 | Aetna2aetna | Logged in to the NGA Sample app successfully |
      |PINOnly| DMT-S-W263952560 | Aetna2aetna | Logged in to the NGA Sample app successfully |

  @VerifySettings_BeforePrimaryAuth @Regression
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

  @VerifySettings_AfterPrimaryAuth_BeforeEnroll @Regression
  Scenario Outline: As a user, I want to verify the Settings screen details after Primary Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user navigates to the Settings screen
    When the user should be able to verify all the setting details before Enroll
    When the user resets the app

    Examples:
    |policy | username | password |
    |Fallback | DMT-S-W263952560 | Aetna2aetna |
    |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
    |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @VerifySettings_AfterEnroll @Regression
  Scenario Outline: As a user, I want to verify the Settings screen details after Enroll
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user navigates to the Settings screen
    When the user should be able to verify all the setting details after enroll
    When the user resets the app

    Examples:
    |policy | username | password |
    |Fallback | DMT-S-W263952560 | Aetna2aetna |
    |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
    |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @VerifySettings_AfterFIDOAuthentication @Regression
  Scenario Outline: As a user, I want to verify the Settings screen details after FIDO Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user authenticates <policy>
    When the user navigates to the Settings screen
    When the user should be able to verify all the setting details after FIDO Authentication
    When the user unenrolls
    When the user resets the app

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @VerifySettings_AfterFIDOAuthentication_AfterUnenroll @Regression
  Scenario Outline: As a user, I want to verify the Settings screen details post unenrolling a FIDO Authenticated user
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user authenticates <policy>
    When the user unenrolls
    When the user should be able to verify all the setting details after FIDO Authentication
    When the user resets the app

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @E2E_PrimaryAuth_Enroll_Logout_SignIn_Authenticate_Unenroll_Reset @Regression
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user authenticates <policy>
    When the user navigates to the Settings screen
    When the user unenrolls
    When the user resets the app

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @E2E_PrimaryAuth_Enroll_Logout_SignIn_Authenticate_Logout_AirplaneMode_SignIn_Logout_AirplaneMode_Reset
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user navigates to the Settings screen
    When the user logs out
    When the user authenticates <policy>
    When the user navigates to the Settings screen
    When the user logs out
    When the user changes the Airplane Mode toggle
    When the user authenticates <policy>
    When the user navigates to the Settings screen
    When the user logs out
    When the user changes the Airplane Mode toggle
    When the user authenticates <policy>
    When the user navigates to the Settings screen
    When the user resets the app

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @E2E_PrimaryAuth_Enroll_Logout_SignIn_Authenticate_ChangePolicy @Regression
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy1>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy1>
    When the user navigates to the Settings screen
    When the user logs out
    When the user authenticates <policy1>
    When the user navigates to the Settings screen
    When the user clicks on Change Policy
    When the user has selected the <policy2>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy2>
    When the user navigates to the Settings screen
    When the user logs out
    When the user authenticates <policy2>
    When the user navigates to the Settings screen
    When the user has selected the <policy3>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy3>
    When the user navigates to the Settings screen
    When the user logs out
    When the user authenticates <policy3>
    When the user navigates to the Settings screen
    When the user resets the app

    Examples:
      |policy1 |policy2 |policy3 | username | password |
      |Fallback |BiometricOnly |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @E2E_PrimaryAuth_Enroll_ChangePolicy @Regression
  Scenario Outline: As a user, I want to do an End to End test of the NGA application
    
    Given the user launches the NGA sample application
    When the user has selected the <policy1>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy1>
    When the user navigates to the Settings screen
    When the user clicks on Change Policy
    When the user has selected the <policy2>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy2>
    When the user navigates to the Settings screen
    When the user has selected the <policy3>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy3>
    When the user navigates to the Settings screen
    When the user resets the app

    Examples:
      |policy1 |policy2 |policy3 | username | password |
      |Fallback |BiometricOnly |PINOnly | DMT-S-W263952560 | Aetna2aetna |
      |Fallback |PINOnly |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly |Fallback |PINOnly | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly |PINOnly |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly |BiometricOnly |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly |Fallback |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |

  @PrimaryAuth_Enroll_Unenroll_Reset @Regression
  Scenario Outline: As a user, I want to test Unenroll after enroll without any FIDO Authentication
    
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

  @PrimaryAuth_Reset @Regression
  Scenario Outline: As a user, I want to test the App Reset functionality before Enroll
  
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

  @PrimaryAuth_Enroll_Reset @Regression
  Scenario Outline: As a user, I want to test the App Reset functionality after Enroll
    
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

  @PrimaryAuth_Enroll_Auth_Reset @Regression
  Scenario Outline: As a user, I want to test the App Reset functionality after FIDO Authentication
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user authenticates <policy1>
    When the user resets the app

    Examples:
    |policy | username | password |
    |Fallback | DMT-S-W263952560 | Aetna2aetna |
    |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
    |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @Negative_CancelEnroll @Negative @Regression
  Scenario Outline: As a user, I want to test cancelling Enroll
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user cancels enrollment
    When the user logs out
    When the user clicks on Change Policy

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @Negative_BackgroundAppduringEnroll @Negative @Regression
  Scenario Outline: As a user, I want to test cancelling Enroll by backgrounding the app
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user cancels enrollment
    When the user logs out
    When the user clicks on Change Policy

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |
      |BiometricOnly | DMT-S-W263952560 | Aetna2aetna |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @Negative_BackgroundAppduringPIN_Cancel_EnrollFallbackwithPINPrimary @Negative @Regression
  Scenario Outline: As a user, I want to test cancelling PIN Enroll by banckgrounding the app 
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user cancels enrollment
    When the user logs out
    When the user clicks on Change Policy

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |

  @Negative_BackgroundAppduringBiometric_CancelEnrollFallbackwithBiometricPrimary @Negative @Regression
  Scenario Outline: As a user, I want to test cancelling Biometric Enroll by banckgrounding the app 
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user cancels enrollment
    When the user logs out
    When the user clicks on Change Policy

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |

  @Negative_BackgroundAppduringPIN_CancelEnrollFallbackwithBiometricPrimary @Negative @Regression
  Scenario Outline: As a user, I want to test cancelling PIN Enroll by banckgrounding the app when the policy has Biometric as primary authenticator
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user cancels enrollment
    When the user logs out
    When the user clicks on Change Policy

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |

  @Negative_BackgroundAppduringBiometric_CancelEnrollFallbackwithPINPrimary @Negative @Regression
  Scenario Outline: As a user, I want to test cancelling Biometric Enroll by banckgrounding the app when the policy has PIN as primary authenticator
    
    Given the user launches the NGA sample application
    When the user has selected the <policy>
    When the user clicks on Sign In
    When the user logs in with <username> and <password>
    When the user clicks on Enroll
    When the user cancels enrollment
    When the user logs out
    When the user clicks on Change Policy

    Examples:
      |policy | username | password |
      |Fallback | DMT-S-W263952560 | Aetna2aetna |

  @Negative_BlankPIN_InvalidPIN @Negative @Regression
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
    When the user cancels enrollment
    When the user clicks on Enroll
    When the user enrolls with <policy>
    When the user logs out
    When the user authenticates with incorrect PIN

    Examples:
      |policy | username | password |
      |PINOnly | DMT-S-W263952560 | Aetna2aetna |

  @Negative_BackgroundAppduringFIDOAuthentication @Negative @Regression
  Scenario Outline: As a user, I want to test cancelling FIDO Authentication by backgrounding the application
    
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

  @Negative_BackgroundAppduringSecondAuthenticatorFIDOAuthentication @Negative @Regression
  Scenario Outline: As a user, I want to test cancelling FIDO Authentication by backgrounding the application when authenticating with the second authenticator
    
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

  @Negative_IncorrectFIDOAuthentication @Negative @Regression
  Scenario Outline: As a user, I want to test the negative scenarios of FIDO Authentication when authenticating with the Primary Authenticator
    
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

  @Negative_IncorrectSecondAuthenticatorFIDOAuthentication @Negative @Regression
  Scenario Outline: As a user, I want to test the negative scenarios of FIDO Authentication when authenticating with the Second Authenticator
    
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