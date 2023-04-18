import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ShowData from '../ShowData/ShowData';

const LoadData = () => {
    const [cards,setCard] = useState([]);
    const [showAll,setShowAll] = useState(false)
    const [uniqueId, setId] = useState(null)
    const [modalPr,setModalPr] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res=>res.json())
        .then(data=>setCard(data.data.tools))
    },[])
    const handleModal = (id) =>{
        setId(id);
    }
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res=>res.json())
        .then(data=>setModalPr(data.data))
    },[uniqueId])
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'> 
            {
                cards.slice(0,showAll?12:6).map(card=>(<ShowData key={card.id} card={card} handleModal={handleModal}></ShowData>))
            }
            
        </div>
        {
            !showAll && (
                <span onClick={()=>setShowAll(true)}><Button>See More</Button></span>
            )
        }
        <Modal modalPr={modalPr}></Modal>
        </>
        
    );
};

export default LoadData;