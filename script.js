document.getElementById('generateBtn').addEventListener('click', function() {
    const numBlue = parseInt(document.getElementById('numBlueTokens').value);
    const bluePrefix = document.getElementById('bluePrefix').value;
    const bluePerRow = parseInt(document.getElementById('blueTokensPerRow').value);
    
    const numRed = parseInt(document.getElementById('numRedTokens').value);
    const redPrefix = document.getElementById('redPrefix').value;
    const redPerRow = parseInt(document.getElementById('redTokensPerRow').value);
    
    let tokensDisplay = '';

    // Generate Blue Tokens
    tokensDisplay += '<h2 class="font-bold">Blue Tokens</h2>';
    for (let i = 1; i <= numBlue; i++) {
        tokensDisplay += `<span class="text-blue-500">${bluePrefix}${i}</span> `;
        if (i % bluePerRow === 0) {
            tokensDisplay += '<br>';
        }
    }

    // Generate Red Tokens
    tokensDisplay += '<h2 class="font-bold">Red Tokens</h2>';
    for (let i = 1; i <= numRed; i++) {
        tokensDisplay += `<span class="text-red-500">${redPrefix}${i}</span> `;
        if (i % redPerRow === 0) {
            tokensDisplay += '<br>';
        }
    }

    document.getElementById('tokensDisplay').innerHTML = tokensDisplay;
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('tokenForm').reset();
    document.getElementById('tokensDisplay').innerHTML = '';
});
