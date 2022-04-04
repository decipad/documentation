import React from 'react';
import  { Redirect } from 'react-router-dom';
import Config from '../../docusaurus.config'

export default function Home()  {
  const redirectPath = '/docs/' + 
  Config.themeConfig.navbar.items[0].docId;
  return <Redirect to={redirectPath} />;
}
