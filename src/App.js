import './App.css'

import Menu from './components/Menu'
import Categories from './components/Categories'
import items from './components/data'
import logo from './components/logo.jpg'
import React, { useState } from 'react'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [activeCategory, setActiveCategory] = useState('')
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    setActiveCategory(category)
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
