import React from 'react';
import '../../convertion/App.css'
const sidebar = () => {
    const sidebarItems = ["صيدليات", "مطاعم", "ملابس أطفال", "ملابس رجالي", "عيادات", "مستشفيات", "اكسسوارات",
     "هدايا", "حلويات", "بقالة", "الكترونيات", "العاب أطفال", "عربيات", "صالةنات رجالي", "كورسات", "رياضه",
     "وظائف", "خدمات يقدمها الأعضاء"];

    return ( 
        <div class="sidebar">
            {sidebarItems.map(item=>(
                <div class="sidebar__item-border">
                    <a href="/" class="sidebar__item">{item}</a>
                    <div class="sidebar__border"></div>
                </div> 
            ))}
        </div>
    );
}
 
export default sidebar;