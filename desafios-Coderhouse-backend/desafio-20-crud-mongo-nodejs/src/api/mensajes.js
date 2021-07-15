const Message = require('../models/mensaje');
const MongoCRUDs = require('../repository/crud');

class MessageController extends MongoCRUDs {

    constructor() {
        super(Message);
    }
}

module.exports = new MessageController();