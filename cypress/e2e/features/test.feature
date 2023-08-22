Feature: Login page
    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at Accounts

    Scenario: Login success
        When We login with username "ccastedo@mymoid.com" and password "mymoid!h5G3uiC8"
        Then We are in the Accounts main page