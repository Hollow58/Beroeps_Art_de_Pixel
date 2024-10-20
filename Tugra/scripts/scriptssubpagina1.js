let soraSelectCount = 0; // Counter for Sora selections
let isRoxas = false; // Track if current character is Roxas

function selectCharacter(characterNumber) {
    // Reset all character options
    var characterOptions = document.getElementsByClassName('character-option');
    for (var i = 0; i < characterOptions.length; i++) {
        characterOptions[i].classList.remove('selected');
    }

    // Select the clicked character
    var selectedOption = document.getElementById('option' + characterNumber);
    selectedOption.classList.add('selected');

    // Update character display
    var characterName;
    var characterImage = document.getElementById('selected-character-model');
    var characterIcon = selectedOption.querySelector('.icon'); // Get the selected icon

    switch (characterNumber) {
        case 1: // Sora
            // Check if currently in Roxas form
            if (isRoxas) {
                // If currently Roxas, switch back to Sora
                characterImage.src = './images/characters/SoraKH2.png'; // Sora's image
                characterName = 'Sora'; // Reset name to Sora
                document.getElementById('char-name1').innerHTML = 'Sora'; // Reset name in the select bar

                // Change the icon back to Sora
                var soraOption = document.getElementById('option1'); // Sora's option
                var soraIcon = soraOption.querySelector('.icon'); // Get the icon element
                soraIcon.src = './images/characters/SoraIcon.png'; // Change back to Sora's icon

                isRoxas = false; // Reset Roxas state
            } else {
                characterImage.src = './images/characters/SoraKH2.png'; // Sora's image
                soraSelectCount++; // Increment the Sora counter
                characterName = 'Sora';
            }
            break;
        case 2: // Riku
            // Reset to Sora's state if currently in Roxas form
            if (isRoxas) {
                characterImage.src = './images/characters/SoraKH2.png'; // Sora's image
                characterName = 'Sora'; // Reset name to Sora
                document.getElementById('char-name1').innerHTML = 'Sora'; // Reset name in the select bar
                
                // Change the icon back to Sora
                var soraOption = document.getElementById('option1'); // Sora's option
                var soraIcon = soraOption.querySelector('.icon'); // Get the icon element
                soraIcon.src = './images/characters/SoraIcon.png'; // Change back to Sora's icon
                
                isRoxas = false; // Reset Roxas state
            }
            characterImage.src = './images/characters/RikuKH2.png'; // Riku's image
            soraSelectCount = 0; // Reset counter if a different character is selected
            characterName = 'Riku';
            break;
        case 3: // Character 3
            characterImage.src = './images/characters/KairiKH2.png'; // Character 3's image
            soraSelectCount = 0; // Reset counter if a different character is selected
            characterName = 'Kairi';
            isRoxas = false; // Reset Roxas state
            break;
        case 4: // Character 4
            characterImage.src = './images/characters/GoofyKH2.png'; // Character 4's image
            soraSelectCount = 0; // Reset counter if a different character is selected
            characterName = 'Goofy';
            isRoxas = false; // Reset Roxas state
            break;
    }

    // Update character info display
    // Check for Easter egg condition
    if (soraSelectCount === 4 && !isRoxas) {
        // Change to Roxas
        characterImage.src = './images/characters/RoxasKH2.png'; // Roxas's image
        characterName = 'Roxas'; // Change name to Roxas
        document.getElementById('character-description').innerHTML = 'This is Roxas, the Keyblade wielder of Organization XIII.';

        // Change Sora's icon to Roxas's icon in the character select bar
        var soraOption = document.getElementById('option1'); // Sora's option
        var soraIcon = soraOption.querySelector('.icon'); // Get the icon element
        soraIcon.src = './images/characters/RoxasIcon.png'; // Change to Roxas icon
        
        // Change the character name in the character select bar
        document.getElementById('char-name1').innerHTML = 'Roxas'; // Change Sora's name to Roxas

        isRoxas = true; // Set state to Roxas
        soraSelectCount = 0; // Reset counter after the Easter egg is triggered
    }

    // Update character name and description
    document.getElementById('character-name').innerHTML = characterName;

    // Update character description
    if (!isRoxas) {
        document.getElementById('character-description').innerHTML = 'This is ' + characterName + '.';
    } else {
        document.getElementById('character-description').innerHTML = 'This is Roxas, the Keyblade wielder of Organization XIII.';
    }

    characterImage.style.display = 'block'; // Show the image
    document.querySelector('.character-image').style.display = 'flex'; // Make the container visible
}
