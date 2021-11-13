import React, { useState, useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import '../../convertion/App.css';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select  } from '@material-ui/core';
import userStyles from './Styles'; 
import Input from '../../components/Input/Input';
import * as actions from '../../store/index';
import { connect } from  'react-redux';
import { FiLock } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import Dropdown from '../../components/Input/Dropdown';
import axios from 'axios';

const initialState = {username: '', email: '', password: '', 
    confirmPassword: '', user_gender: '', userType: 'client',
    age:'', phone:'', country: '', gov: '', region:'',
    interests: '', social_status: '', child_num: '',
    working_field: '', job: '',  
    }

navigator.geolocation.getCurrentPosition((position) => {
    initialState.latitude = position.coords.latitude
    initialState.longitude = position.coords.longitude
})

const getData = function(url, setData){
    axios.get(url)
        .then(res=> {
             setData(res.data)
        })
}

const auth = props => {
    const classes = userStyles();

    const [isSignUp, setSignUp] = useState(true)
    const [formData, setFormData] = useState(initialState)

    const [countries, setCountries] = useState(null)
    const [country, setCountry] = useState('')

    const [cities, setCities] = useState(null)
    const [city, setCity] = useState()

    const [regions, setRegions] = useState(null)
    const [region, setRegion] = useState()

    const [fields, setFields] = useState(null)
    const [field, setField] = useState('')


    const [interests, setInterests] = useState(null)
    const [interest, setInterest] = useState('')
    
    const [socialStatus, setSocialStatus] = useState('')
    const [gender, setGender] = useState('')
    
    const [images, setImages] = useState(null)

    useEffect(()=>{
        getData('https://el-wlaa.uc.r.appspot.com/accounts/countries/', setCountries)
        getData('https://el-wlaa.uc.r.appspot.com/accounts/cities/', setCities)
        getData('https://el-wlaa.uc.r.appspot.com/accounts/regions/', setRegions)
        getData('https://el-wlaa.uc.r.appspot.com/accounts/fields/', setFields)
        getData('https://el-wlaa.uc.r.appspot.com/accounts/interests/', setInterests)

        
        axios.get('https://el-wlaa.uc.r.appspot.com/sponsored/?show_in_register=True')
            .then(res=> setImages(res.data))
        
        }, [])
    
    // images && (console.log(images))

    const countryChange =(e)=>{
        setCountry(e.target.value)
        formData.country = e.target.value
        setFormData({ ...formData})
    }

    const cityChange =(e)=>{
        setCity(e.target.value)
        formData.gov = e.target.value
        setFormData({...formData})
    }
    const regionChange =(e)=>{
        setRegion(e.target.value)
        formData.region = e.target.value
        setFormData({...formData})
    }
    const fieldChange =(e)=>{
        setField(e.target.value)
        formData.working_field = e.target.value
        setFormData({...formData})
    }
    const interestChange =(e)=>{
        setInterest(e.target.value)
        formData.interests = e.target.value
        setFormData({...formData})
    }
    const socialChange =(e)=>{
        setSocialStatus(e.target.value)
        formData.social_status = e.target.value
        setFormData({...formData})
    }
    const genderChange =(e)=>{
        setGender(e.target.value)
        formData.user_gender = e.target.value
        setFormData({...formData})
    }
    
    const switchMode = () => {
        setSignUp((previsSignUp) => !previsSignUp)
        console.log(formData)
    }
        
    const styles = { style: { fontSize: '17px'} }
        

    const handleSubmit = (e) =>{
        e.preventDefault();
                
        props.onAuth(formData, isSignUp)
    }


    const handleChange = (e) =>{
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    let form = isSignUp ? (
        <form class="auth__form" onSubmit={handleSubmit} autoComplete={false}  style={{"margin-top": "2rem"}}> 
            <Input name="username" label="الاسم" handleChange={handleChange}   type="text"/>
            <Input name="email" label="الايميل" handleChange={handleChange} type="email"/>
            <Input name="password" label="الرقم السري" handleChange={handleChange} type="password"/>
            <Input name="confirmPassword" label="تأكيد الرقم السري" handleChange={handleChange} type="password"/>

            <Input name="phone" label="رقم التليفون" handleChange={handleChange} type='text'/>
                                                          
            <div class="auth__form__row3">

                <Dropdown label="المركز" valueChange={regionChange}>
                    {regions && (
                        regions.map(region => {
                            return region.city == formData.gov &&(
                                <MenuItem name="region" value={region.id} style={styles.style}>{region.name_ar}</MenuItem>
                            )
                        })
                    )}
                </Dropdown>
                <Dropdown label="المحافظة"  valueChange={cityChange}> 
                    {cities &&(
                        cities.map(city=>{
                            return city.country == formData.country &&(
                                <MenuItem name ="gov" value={city.id} style={styles.style}>{city.name_ar}</MenuItem>
                            )
                        })

                    )}
                </Dropdown>

                <Dropdown label="البلد" valueChange={countryChange}>   
                    {countries &&(
                        countries.map(country => <MenuItem name ="country" value={country.id} style={styles.style}>{country.name_ar}</MenuItem>)  
                    )}
                </Dropdown>

            </div>
            <Dropdown label="الاهتمامات" valueChange={interestChange}> 
                {interests && (
                    interests.map(interest=> <MenuItem name="interests" value={interest.id} style={styles.style}>{interest.name_ar}</MenuItem>)
                )}
            </Dropdown>

            <div class="auth__form__row">
                <Dropdown label="الحاله الاجتماعية" valueChange={socialChange}> 
                    <MenuItem name ="social_status" value={"single"} style={styles.style}>أعزب</MenuItem>
                    <MenuItem name ="social_status" value={"married"} style={styles.style}>متزوج</MenuItem>       
                    <MenuItem name ="social_status" value={"divorced"} style={styles.style}>مطلق</MenuItem>                    
                    <MenuItem name ="social_status" value={"widow"} style={styles.style}>ارملة</MenuItem>                    
                </Dropdown>
                <Input name="child_num" label="عدد الاولاد" handleChange={handleChange} type='number'/>
            </div>
            <div class="auth__form__row">
                <Dropdown label="النوع" valueChange={genderChange}> 
                    <MenuItem name ="user_gender" value={"male"} style={styles.style}>ذكر</MenuItem>
                    <MenuItem name ="user_gender" value={"female"} style={styles.style}>انثى</MenuItem>                    
                </Dropdown>
                <Input name="age" label="السن" handleChange={handleChange} type='text'/>
            </div>
            <div class="auth__form__row">
                <Dropdown label="مجال العمل" valueChange={fieldChange}>      
                    {fields && (
                        fields.map(field => <MenuItem name ="working_field" value={field.id} style={styles.style}>{field.name_ar}</MenuItem>)
                    )}
                </Dropdown>
                <Input name="job" label="الوظيفة" handleChange={handleChange} type='text' className={classes.halfInput} style={{width: '50%'}}/>
            </div>

            <Button type="submit" fullWidth variant="contained" color="white" style={ {"border": "5px solid transparent"
                            ,"borderRadius":"1.5rem" ,"fontWeight":"bold" }  }  className={classes.submit}>
                    {isSignUp ? 'أنشاء حساب' : 'تسجيل دخول'}
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    {isSignUp ? <Button onClick={switchMode} style={{color:"white" ,"fontSize":"2rem"}} className={classes.text}>لديك حساب بالفعل؟ قم بالتسجيل</Button>:  <Button onClick={switchMode} style={{color:"white"}} className={classes.text}>ليس لديك حساب؟ أنشئ حسابك الان</Button>}
                </Grid>
            </Grid>
        </form>
    ) : (
        <form class="auth__form" onSubmit={handleSubmit} autoComplete={false}> 
            <Input name="username" label="User name" handleChange={handleChange} type="text" icon={<BiUserCircle class="auth__icon"/>}/>
            <Input name="password" label="Password" handleChange={handleChange} type="password" icon={<FiLock class="auth__icon"/>}/>        
            <Button type="submit" fullWidth style={{"backgroundColor":"white" , "border": "5px solid transparent" ,"borderRadius":"1.5rem" , "fontWeight":"bold" }} variant="contained" color="white" className={classes.submit}>
                    {isSignUp ? 'أنشاء حساب' : 'تسجيل دخول'}
            </Button>
            <Grid container justify="flex-end" >
                <Grid item style={{color:"white"}}>
                    {isSignUp ? <Button onClick={switchMode} style={{color:"white" ,"fontSize":"2rem"}} className={classes.text}>لديك حساب بالفعل؟ قم بالتسجيل</Button>:  <Button onClick={switchMode} style={{color:"white"}} className={classes.text}>ليس لديك حساب؟ أنشئ حسابك الان</Button>}
                </Grid>
            </Grid>
        </form>
    )

    return (
        <div class="auth">
            <div class="auth__logo">
                <Logo/>     
            </div>
            <div class="auth__secRow">
                <div class="auth__images">
                    {images && images.map(image=><img src={image.image} key={image.id} class="auth__image"/> )}
                </div>
                <div class="auth__content">
                    {form}
                </div>
            </div>
        </div>
    );
}
 
const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (data, isSignup)=> dispatch(actions.authClient(data, isSignup))
    }
};

export default connect(null, mapDispatchToProps)(auth);