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
    document.getElementById('character-image').innerHTML = 'Character ' + characterNumber + ' Model';
}
