import React from 'react';
import '../../convertion/App.css'
import Logo from '../Logo/Logo'
import { BiSearch } from 'react-icons/bi';
import { BsFillBellFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'; 

const header = () => {
    return (
        <div class="header">
            <Logo/>
            <div class="header__content">
                <ul class="header__content__items">
                    <div></div>
                    <li><a class="header__content__items__item" href="/callus">اتصل بنا</a></li>
                    <li><a class="header__content__items__item" href="/jobs">الوظائف</a></li>
                    <li><a class="header__content__items__item" href="/products">المنتجات</a></li>
                    <li><a class="header__content__items__item" href="/" >الرئيسية</a></li>
                </ul>
                <div class="header__content__search-sign">
                    <div class="header__content__sign">
                        <a href="/" class="header__content__bell"><BsFillBellFill/></a>
                        <Link  to="/auth-vendor" class="header__content__sign__link">Vendor تسجيل</Link>
                        <Link to="/auth-client" class="header__content__sign__link">مستخدم جديد</Link>
                    </div>
                    <div class="header__content__search">
                        <input type="text" class="header__content__search-input" placeholder="بحث"/>
                        <button class="header__content__search-button">
                            <BiSearch class="header__content__search-icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default header;