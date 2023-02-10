import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ContactList from '../components/ContactList/ContactList';
import AddContact from '../components/AddContact/AddContact';
import ViewContact from '../components/ViewContactList/ViewContactList';
import EditContact from '../components/EditContactList/EditContactList';
import NavBar from '../components/NavBar/NavBar';

function router() {
  return (
    <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
            <Route path={'/contacts/list'} element={<ContactList/>}/>
            <Route path={'/contacts/add'}  element={<AddContact/>}/>
            <Route path={'/contacts/view/:contactId'} element={<ViewContact/>} />
            <Route path={'/contacts/edit/:contactedit'} element={<EditContact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default router