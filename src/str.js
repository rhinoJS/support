var randomStr = require("randomstring");

/**
 * Objeto Str.
 */
const Str = {};

/**
 * Verificar se string contem.
 *
 * @param pattern Pedaço da string a ser procurada.
 * @param value String origem onde será buscado
 * @returns {boolean}
 */
Str.is = (pattern, value) => {
    if ((pattern == null) || (pattern == undefined) || (pattern == '')) {
        return false;
    }

    pattern = Str.replaceAll('\\*', '.*', pattern);

    var er = new RegExp("^" + pattern + "$");
    var match = er.exec(value);

    return (match != null);
}

/**
 * Gerar string aleatória com um tamanho especifico.
 * 
 * @param len Tamanho da string que precisa ser gerada
 * @returns {string} Retorna uma string aleatória no tamanho especificado
 */
Str.randomStr = (len = 16) => {
    return randomStr.generate(len);    
};

/**
 * Troca todas as ocorrencias da string.
 *
 * @param search
 * @param replacement
 * @param value
 * @returns {string}
 */
Str.replaceAll = (search, replacement, value) => {
    return value.replace(new RegExp(search, 'g'), replacement);
}

/**
 * Exports.
 */
module.exports = Str;