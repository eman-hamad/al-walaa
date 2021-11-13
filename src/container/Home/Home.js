import React, { useEffect, useState } from 'react';
import '../../convertion/App.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar';
import Contact from '../../components/Contact/Contact';
import { BsArrowRightShort } from 'react-icons/bs'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
import axios from 'axios';

const home = () => {
    const [images, setImages] = useState(null)
    const [start, setStart] = useState(1)
    const [end, setEnd] = useState(15)

    useEffect(()=>{
        axios.get('https://el-wlaa.uc.r.appspot.com/sponsored/')
            .then(res=> {
                setImages(res.data)
            });
    }, [])
    
    const nextPage=()=>{
        if(end !== images.length){
            setStart(start + 15)
            setEnd(end + 15)
            console.log(start, end)
        }
    }
    const prevPage=()=>{
        if(start !== 1){
            setStart(start - 15)
            setEnd(end - 15)
            console.log(start, end)
        }
    }

    return ( 
    <div class="home">
        <Header/>
        <div class="home__mainContent">
            <section class="home__mainContent__gallery">
                {images && images.slice(start, end).map((image, index)=>(
        
                    <figure class={"home__mainContent__gallery__item home__mainContent__gallery__item--" + (index + 1)} key={index + 1}>
                        <img src={image.image} alt={"Gallery image " + (index + 1)} class="home__mainContent__gallery__img"/>
                    </figure>

                ))}
                <div class="home__mainContent__gallery__pagination">
                    <button class="pagination" onClick={prevPage}>
                        <Link class="pagination__arrow"> 
                            <BsArrowLeftShort/>
                            <b class="pagination__num">Previous</b>
                        </Link>
                    </button>
                    <button class="pagination" onClick={nextPage}>
                        <Link class="pagination__arrow">
                            <b class="pagination__num">Next</b>
                            <BsArrowRightShort/>
                        </Link>
                    </button>
                </div>
                
        
            </section>
            <Sidebar/>
        </div>
        <Contact/>
        <Footer/>
    </div> 
); 
}
 
export default connect()(home);