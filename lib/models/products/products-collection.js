const productModel = require('./products-schema.js');

class productsCollection{
    constructor(){}

    read(_id){
        const query = _id ? {"_id": _id} : {};
        return productModel.find(query);
    }

    create(record){
        const newRecord = new productModel(record);
        return newRecord.save()
    }

    update(_id, record){
        return productModel.findByIdAndUpdate({"_id": _id}, record, {new : true})
    }

    delete(_id){
        return productModel.findByIdAndDelete({"_id": _id})
    }
}

module.exports = new productsCollection();