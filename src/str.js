    class Str
{
    /**
     * Troca todas as ocorrencias da string.
     *
     * @param search
     * @param replacement
     * @param value
     * @returns {XML|string|void}
     */
    static replaceAll(search, replacement, value) {
        return value.replace(new RegExp(search, 'g'), replacement);
    }

    /**
     * Verificar se string contem.
     *
     * @param pattern
     * @param value
     * @returns {boolean}
     */
    static is(pattern, value) {
        if ((pattern == null) || (pattern == undefined) || (pattern == '')) {
            return false;
        }

        pattern = Str.replaceAll('*', '.*', pattern);

        var er = new RegExp("^" + pattern + "$");
        var match = er.exec(value);

        return (match != null);
    }
}

module.exports.Str = Str;