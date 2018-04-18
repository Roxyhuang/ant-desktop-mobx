import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import styles from './layout.less';

const { Content } = Layout;

const MainLayout = (props) => {
  return (
    <Layout>
      <Content className={styles.content}>
        <div className={styles.layoutBox}>
          {props.children}
        </div>
      </Content>
    </Layout>
  );
};

Layout.defaultProps = {
  className: '',
  backgroundColor: '',
};

Layout.PropTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default MainLayout;
