import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ========= PAGES =========
import HomePage from '../pages/homepages'


// =========== COMP ==========
import MediaS from '../components/body/right/mediasosial'
import Home from '../components/body/right/form'
import Lainnya from '../components/body/right/lainnya'
import UndanganPage from '../pages/undanganpage'


const RoutesPage = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/media" element={<MediaS />} />
                        <Route path="/lainnya" element={<Lainnya />} />
                    </Route>
                    <Route path='/undangan' element={<UndanganPage />}>

                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}


export default RoutesPage