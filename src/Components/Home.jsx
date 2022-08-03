import React, { useEffect, useState } from 'react'


import ContentTop from './ContentTop'
import PizzaBlock from './PizzaBlock'


const Home = ({ post }) => {

    return (
        <div className="content">
            <div className="container">
                <ContentTop
                    things={["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые",]}
                    popupItems={["популярности", "цене", "алфавиту"]}
                />

                <h2 className="content__title">Все пиццы</h2>

                <div className="content__items">
                    {post.map((items) =>
                        <PizzaBlock
                            key={items.id}
                            {...items}
                        />

                    )}
                </div>
            </div>
        </div>
    )
}

export default Home