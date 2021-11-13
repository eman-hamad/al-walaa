import React from 'react';
import '../../convertion/App.css';
import { BsFacebook } from 'react-icons/bs'
import { ImYoutube } from 'react-icons/im'
import { RiWhatsappFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <div class="footer">
            <Link class="footer__icon"><FiPhoneCall class="footer__icon--call"/></Link>
            <div>
                <Link class="footer__icon"><RiWhatsappFill class="footer__icon--whats"/></Link>
                <Link class="footer__icon"><AiFillTwitterCircle class="footer__icon--twitter"/></Link>
                <Link class="footer__icon"><AiFillInstagram class="footer__icon--instagram"/></Link>
                <Link class="footer__icon"><ImYoutube class="footer__icon--youtube"/></Link>
                <Link class="footer__icon"><BsFacebook class="footer__icon--facebook"/></Link>
            </div>
        </div>
    );
}
 
export default footer;