// JavaScript to toggle game info on click
function displayGameInfo(gameId) {
    // First, remove the 'active' class from all game logos and reset game names visibility
    const gameLogos = document.querySelectorAll('.game-logo');
    gameLogos.forEach((logo) => {
        logo.classList.remove('active');
        const gameName = logo.querySelector('p');
        if (gameName) {
            gameName.style.display = 'block'; // Show game name for all
        }
    });

    // Then, find the clicked game and add the 'active' class
    const selectedGame = document.getElementById('game' + gameId);
    selectedGame.classList.add('active');

    // Hide the game name of the clicked game
    const selectedGameName = selectedGame.querySelector('p');
    if (selectedGameName) {
        selectedGameName.style.display = 'none'; // Hide the game name of the selected game
    }

    // Populate the game info inside the selected logo
    const gameInfo = selectedGame.querySelector('.game-info');

    // Replace with actual game data
    const gameData = {
        1: {
            title: "Kingdom Hearts",
            releaseDate: "March 28, 2002",
            genre: "Action RPG",
            platforms: "PS2, PS3, PS4, PS5, Xbox One, Nintendo Switch"
        },
        2: {
            title: "Kingdom Hearts II",
            releaseDate: "December 22, 2005",
            genre: "Action RPG",
            platforms: "PS2, PS3, PS4, PS5, Xbox One, Nintendo Switch"
        },
        3: {
            title: "Kingdom Hearts III",
            releaseDate: "January 25, 2019",
            genre: "Action RPG",
            platforms: "PS4, Xbox One, Nintendo Switch"
        },
        4: {
            title: "Kingdom Hearts: Chain of Memories",
            releaseDate: "December 2, 2004",
            genre: "Card-based RPG",
            platforms: "GBA, PS2, PS3, PS4, Xbox One"
        },
        5: {
            title: "Kingdom Hearts 358/2 Days",
            releaseDate: "May 30, 2009",
            genre: "Action RPG",
            platforms: "Nintendo DS"
        },
        6: {
            title: "Kingdom Hearts: Birth by Sleep",
            releaseDate: "January 9, 2010",
            genre: "Action RPG",
            platforms: "PSP, PS3, PS4, Xbox One"
        },
        7: {
            title: "Kingdom Hearts: Dream Drop Distance",
            releaseDate: "March 29, 2012",
            genre: "Action RPG",
            platforms: "3DS, PS4, Xbox One"
        },
        8: {
            title: "Kingdom Hearts 0.2 Birth by Sleep",
            releaseDate: "January 12, 2017",
            genre: "Action RPG",
            platforms: "PS4, Xbox One"
        },
        9: {
            title: "Kingdom Hearts: Coded",
            releaseDate: "January 11, 2011",
            genre: "Action RPG",
            platforms: "Nintendo DS, mobile devices"
        }
    };

    // Populate the selected game logo with its respective info
    const gameDetails = gameData[gameId];
    gameInfo.innerHTML = `
        <h3>${gameDetails.title}</h3>
        <p>Release Date: ${gameDetails.releaseDate}</p>
        <p>Genre: ${gameDetails.genre}</p>
        <p>Platforms: ${gameDetails.platforms}</p>
    `;
}
