class APIFeature {
  operators = ['sort', 'limit', 'page', 'fields'];

  constructor(queryModel, queryRequested) {
    this.queryModel = queryModel;
    this.queryRequested = queryRequested;
  }

  filter() {
    this.operators.forEach(operator => {
      if (operator in this.queryRequested) {
        delete this.queryModel[operator];
      }
    });
    return this;
  }

  sort() {
    if ('sort' in this.queryRequested) {
      this.queryModel = this.queryModel.sort(this.queryRequested.sort);
    }
    return this;
  }

  exclude() {
    if ('fields' in this.queryRequested) {
      const fields = this.queryRequested.fields.split(',').join(' ');
      this.queryModel = this.queryModel.select(fields);
    }
    return this;
  }

  paginate() {
    const { page = 1, limit = 100 } = this.queryRequested;
    const skipAmount = (page - 1) * limit;
    this.queryModel = this.queryModel.skip(skipAmount).limit(limit);
    return this;
  }
}

module.exports = { APIFeature };
