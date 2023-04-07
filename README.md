# js-password-rnd-gen-

## Purpose of Assignment
in this challenge i was given this acceptence criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Steps I Took to Met this
First i added variables to contain all possible characters and letters that could be generated.
I then connected them to an Array to be pulled from.
I then added prompt truthy and falsey prompt messages that said if the password length was valid or invalid and asked which characters they would like to add or remove.
After i added a for loop to randomly generate those characters pulled from the pool and return with the final generated password.

