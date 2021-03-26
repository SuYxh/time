/*
 * @Autor: 时光@
 * @Date: 2021-03-26 16:05:49
 * @LastEditTime: 2021-03-26 16:11:00
 * @Description:
 */
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Version = () => {
  const { siteConfig } = useDocusaurusContext();
  const { title, tagline } = siteConfig;

  return <div>{`${title} · ${tagline}`}</div>;
};


function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '50vh',
          fontSize: '20px',
        }}>

        <p> <Version /> </p>
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Hello;