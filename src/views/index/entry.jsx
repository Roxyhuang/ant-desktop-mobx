import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import DevTools from "mobx-react-devtools";

import 'assets/css/global.less';
import 'assets/css/mod_css/normal.less';

import routers from '../../routes/route';

import CheckModel from "../../models/CheckModel";

const stores = {
  CheckModel,
};

const MOUNT_NODE = document.getElementById('root');

window._____APP_STATE_____ = stores;

configure({ enforceActions: true });

ReactDOM.render(
  <Provider {...stores}>
    <div>
    {process.env.NODE_ENV !== 'production' && process.env.DEBUG ? <DevTools/> : null}
    { routers }
    </div>
  </Provider>, MOUNT_NODE,
);
