const categoriesModel = require('./categories-schema')

class CategoriesCollection {
  constructor() { }

  read(_id) {
    const query = _id ? {"_id": _id} : {};
    return categoriesModel.find(query);
  }

  create(record) {
    const newRecord = new categoriesModel(record);
    return newRecord.save();
  }

  update(_id, record) {
    return categoriesModel.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return categoriesModel.findByIdAndDelete({"_id": _id})
  }

}

module.exports = new CategoriesCollection();