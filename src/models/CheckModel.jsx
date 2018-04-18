import { observable, action, computed } from 'mobx';

class CheckModel {
  @observable number = 1;
  @computed get total() {
    return this.number * 300;
  }
  @action addNumber(num) {
    this.number += num;
  }

}

export default new CheckModel();
