import { observable, action } from 'mobx';
class HomeStore {
  @observable homeNum = 10;
  @action addNum() {
    this.homeNum += 1;
  }
  @action lessNum() {
    this.homeNum -= 1;
  }
}
export default HomeStore;
