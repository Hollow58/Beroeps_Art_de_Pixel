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
    var characterName = document.getElementById('char-name' + characterNumber).innerHTML;
    document.getElementById('character-name').innerHTML = characterName;
    document.getElementById('character-description').innerHTML = 'This is the description for ' + characterName + '.';

    // Update character model image source and make it visible
    var characterImage = document.getElementById('selected-character-model');
    
    // Log the character selection
    console.log('Character selected:', characterNumber);

    switch (characterNumber) {
        case 1:
            characterImage.src = 'scripts/images/SoraKH2.jpg'; // Adjusted path
            console.log('Image source set to:', characterImage.src); // Log the image source
            break;
        case 2:
            characterImage.src = 'scripts/images/RikuKH2.jpg'; // Adjusted path
            console.log('Image source set to:', characterImage.src); // Log the image source
            break;
        case 3:
            characterImage.src = 'images/characters/Character3.png'; // Adjusted path
            console.log('Image source set to:', characterImage.src); // Log the image source
            break;
        case 4:
            characterImage.src = 'images/characters/Character4.png'; // Adjusted path
            console.log('Image source set to:', characterImage.src); // Log the image source
            break;
    }
    
    characterImage.style.display = 'block'; // Show the image
}
