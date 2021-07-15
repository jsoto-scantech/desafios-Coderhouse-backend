const Producto = require('../models/producto');
const MongoCRUD = require('../repository/crud');


class ProductoController extends MongoCRUD {

    constructor() {
        super(Producto);
    }
}

module.exports = new ProductoController();