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
    switch (characterNumber) {
        case 1:
            characterImage.src = '../images/characters/SoraKH2.png'; // Path for Character 1
            break;
        case 2:
            characterImage.src = '../images/characters/RikuKH2.png'; // Path for Character 2
            break;
        case 3:
            characterImage.src = 'images/characters/Character3.png'; // Path for Character 3
            break;
        case 4:
            characterImage.src = 'images/characters/Character4.png'; // Path for Character 4
            break;
    }
    characterImage.style.display = 'block'; // Show the image
}
