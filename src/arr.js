class Arr {
    /**
     * Exists key name in object.
     *
     * @param obj
     * @param key
     * @returns {boolean}
     */
    static exists(obj, key) {
        const keys = Object.keys(obj);
        return (keys.indexOf(key) >= 0);
    }

    /**
     * Get an item from an array using "dot" notation.
     *
     * @param obj
     * @param key
     * @param def
     * @returns {*}
     */
    static get(obj, key, def) {
        // Verificar se eh um objeto
        if (!(typeof obj === 'object')) {
            return def;
        }

        // Verificar se key foi nulo ou nao definido
        if ((key == undefined) || (key == null)) {
            return obj;
        }

        // Verificar se key existe
        if (Arr.exists(obj, key)) {
            return obj[key];
        }

        // Verificar se foi informado mult-niveis
        var levels = key.split('.');
        for (var i = 0; i < levels.length; i++) {
            var seg = levels[i];
            // Verificar se eh um objeto
            if ((typeof obj === 'object') && Arr.exists(obj, seg)) {
                obj = obj[seg];
            } else {
                return def;
            }
        }

        return obj;
    }
}

module.exports.Arr = Arr;