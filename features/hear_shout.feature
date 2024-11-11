Feature: Hear shout
    Scenario: Listener is within range
        Given Customer is located within 15 meters
        When Shopkeeper shouts "Free bagels at Mantri Cafe!"
        Then Customer hears Shopkeeper's message