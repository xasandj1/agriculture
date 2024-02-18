import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { main_pages } from './routes/main-router'
import { MainLayout } from './layout/MainLayout'
import { SingleShop } from './Pages/SingleShop'
import { SingleDetailShop } from './detail/components/SingleDetailShop'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {main_pages.map((route, i) => (
          <Route
            index={route.path ? false : true}
            key={i}
            path={route.path}
            element={route.component}
          />
        ))}
        <Route path='/singleshop' element={<SingleShop />}>
          <Route path='/singleshop:id' element={<SingleDetailShop />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App