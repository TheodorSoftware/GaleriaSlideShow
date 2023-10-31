import React from 'react';
import MainPage from '../src/pages/mainPage/mainPage';
import DetailPage from './pages/detailPage/detailPage';
import RootPage from './pages/rootPage/rootPage';
import StartPage from './pages/StartPage/StartPage';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <StartPage> </StartPage>
    }, 
    {
        path: '/galeria',
        element: <RootPage> </RootPage>,
        children: [
            {index: true , element: <MainPage> </MainPage>},
            {path: 'picture/:id', element: <DetailPage> </DetailPage>}
        ]
    },
    // not found path
])

function App() {
    return (
        <React.Fragment>
            <RouterProvider router={routes}>
            </RouterProvider>
        </React.Fragment>
    ) 
}

export default App;
