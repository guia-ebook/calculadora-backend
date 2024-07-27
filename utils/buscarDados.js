const fs = require('fs');
const path = require('path');

/**
 * Lê um arquivo JSON e retorna seu conteúdo.
 * @returns {Promise<Object>} - Conteúdo do arquivo JSON.
 */
async function buscarDados() {
    const filePath = path.join(__dirname, '../dadosFormatados/dados.json'); // Ajuste o caminho conforme necessário

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            try {
                const parsedData = JSON.parse(data);
                resolve(parsedData);
            } catch (parseError) {
                reject(parseError);
            }
        });
    });
}

module.exports = {
    buscarDados
};
