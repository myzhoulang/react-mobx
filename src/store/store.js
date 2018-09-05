import { observable, computed, action, configure } from 'mobx';
configure({enforceActions: 'always'})

class OrderLine {
  @observable price = 1.2;
  @observable mun = 0;

  @computed get total () {
    return this.price * this.mun;
  }

  @action.bound
  tick () {
    this.mun++;
  }
}

const order = new OrderLine();

export default order;