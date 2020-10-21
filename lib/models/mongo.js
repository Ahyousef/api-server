'use strict'

class Collection{
    constructor(model){
        this.model = model;
    }

    read(_id){
        const query = _id ? {"_id": _id} : {};
        return this.model.find(query);
    }

    create(record){
        const newRecord = new this.model(record);
        return newRecord.save()
    }

    update(_id, record){
        return this.model.findByIdAndUpdate({"_id": _id}, record, {new : true})
    }

    delete(_id){
        return this.model.findByIdAndDelete({"_id": _id})
    }
}

module.exports = Collection;