import React from 'react';
import '../../convertion/App.css'

const contact = () => {
    return (
        <div class="contact">
            <h1 class="contact__header">تواصل معنا</h1>
            <textarea class="contact__input" type="text" placeholder="اترك تعليقك"></textarea>   
            <button class="contact__button">ارسال</button>     
        </div>
    );
}
 
export default contact;