/**
 * Objeto Obj.
 */
const Obj = {};

/**
 * Clonas objeto sem manter a referencia.
 * 
 * @param {object} obj Objeto a ser clonado
 * @returns {object} Objeto clonado
 */
Obj.clone = (obj) => {

    return JSON.parse(JSON.stringify(obj));
};

/**
 * Fazer merge de objetos.
 * 
 * @param {object} obj1 Objeto origem
 * @param {object} obj2 Objeto que será mesclado no target
 * @returns {object} Objeto mesclado
 */
Obj.merge = (obj1, obj2) => {

    var target = this.clone(obj1);
    var obj    = this.clone(obj2);

    Object.assign(target, obj);

    return target;
};

/**
 * Exports.
 */
module.exports = Obj;