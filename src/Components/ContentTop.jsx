import React from 'react'
import { useState } from 'react';

import { v4 as uuid } from 'uuid';
const unique_id = uuid();

const ContentTop = ({ things, popupItems }) => {
    const [ChangeThisColor, setChangeThisColor] = useState(0)
    const [ChangeThisPopupColor, setChangeThisPopupColor] = useState(0)
    const [popupiSItOpen, setPopupiSItOpen] = useState(false)

    const ChangeColorFunc = (index) => {
        setChangeThisColor(index);
        console.log(`shu ${index} songa ega bosildi `);
    }
    const PopupItems = (index) => {
        
        setChangeThisPopupColor(index);
        setPopupiSItOpen(false)
    }

    const PopupOpened = () => {
        setPopupiSItOpen(!popupiSItOpen)
    }
    const PopupResults = popupItems[ChangeThisPopupColor]

    return (
        <div className="content__top">
            <div className="categories">
                <ul>
                    {things.map((itemsThings, index) =>
                        <li
                            onClick={() => ChangeColorFunc(index)}
                            className={index === ChangeThisColor ? "active" : ""}
                            key={unique_id + Math.random()}
                        >
                            {itemsThings}
                        </li>)}
                </ul>
            </div>
            <div className="sort">
                <div className="sort__label">
                    <svg className={popupiSItOpen ? "rotate" : ''}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <b >
                        Сортировка по:
                    </b>
                    <span onClick={PopupOpened}
                    >
                        {PopupResults}
                    </span>
                </div>
                {popupiSItOpen ? (
                    <div className="sort__popup">
                        <ul>
                            {popupItems.map((itemsPopup, index) =>
                                <li
                                    key={unique_id + Math.random()}
                                    onClick={() => PopupItems(index)}
                                    className={ChangeThisPopupColor === index ? "active" : ""}
                                >
                                    {itemsPopup}
                                </li>)}
                        </ul>
                    </div>
                )
                    :
                    null
                }

            </div>
        </div >
    )
}

export default ContentTop