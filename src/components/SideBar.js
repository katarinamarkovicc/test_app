import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', position: 'fixed'}}>
          <CDBSidebar textColor="#fff" backgroundColor="#e28743">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <NavLink to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Pharmacy Products
              </NavLink>
            </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/products" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/about-application" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">About application</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/statistics" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Statistics</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
    
       
          </CDBSidebar>
        </div>
      );
};

export default SideBar;