import React, { useRef, useEffect, useState, Suspense } from 'react'

import axios from 'axios'
import doitac from '../assets/image/doitac1.png'
import doitac2 from '../assets/image/doitac2.png'
import Slide from '../components/Slide'
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollMenu from 'react-horizontal-scrolling-menu';


const MenuItem = ({ text, selected }) => {
    return <div key={text}
      
    > <img style={{ height: 100,marginLeft:10,marginRight:10 }}  src={text}></img></div>;
};

// All items component
// Important! add unique key
const Menu = (list, selected) =>
    list.map(el => {
        const { imagecustomer } = el;

        return <MenuItem text={imagecustomer}  selected={selected} />;
    });


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });


function Body(props) {
    const [customer, setCustomer] = useState([])
    const [selected, setSelected] = useState('item1')

    async function getCustomer() {
        const result = await axios('/getCustomer')
        //  console.log(result.data)
        setCustomer(result.data)
    }
    const onSelect = key => {
        setSelected(key)
    }

    useEffect(() => {
        getCustomer()
    }, [])


const menu=Menu(customer,selected);
    return (
        <div ref={props.refs} className='body'>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <ScrollAnimation animateIn='flipInY'
                    animateOut='flipOutY'>
                    <p style={{ marginTop: 20 }}>CÁC ĐỐI TÁC CỦA CHÚNG TÔI</p>
                </ScrollAnimation>

        
                
            <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={onSelect}
          alignCenter={true}
          transition={0.5}
          alignOnResize={true}
       
        />
        

            </ScrollAnimation>

        </div>
    )
}
export default Body