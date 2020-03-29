import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject('homeStore')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>首页数据源的number为: {(this.props as any).homeStore.homeNum}</h1>
        <button
          onClick={() => {
            (this.props as any).homeStore.addNum();
          }}
        >
          点击添加
        </button>
        <button
          onClick={() => {
            (this.props as any).homeStore.lessNum();
          }}
        >
          点击删除
        </button>
        <button
          onClick={() => {
            (this.props as any).history.push('/one');
          }}
        >
          跳转到one
        </button>
      </div>
    );
  }
}
export default Home;
// export default withRouter(Home);
