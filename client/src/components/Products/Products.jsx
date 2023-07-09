import React, { useEffect, useState } from 'react'
import './Products.css'
import { UseFetch } from '../../utils/UseFetch'
import MyItem from '../Item/MyItem';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const Products = () => {
    const [rickAndMortyData, setRickAndMortyData] = useState([]);
    const urlRickAndMorty = 'https://rickandmortyapi.com/api/character'
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const [aliveChecked, setAliveChecked] = useState(true);
  const [deadChecked, setDeadChecked] = useState(true);
  const [unknownChecked, setUnknownChecked] = useState(true);
  const [filtedData, setFilteredData] = useState([]);
    const fetchingData = async() =>{
        try{
        setLoading(true);
        const result = await UseFetch(`${urlRickAndMorty}`);
        setRickAndMortyData(result.results);
        setFilteredData(result.results);
        setLoading(false);
        }catch(error){
            setError(error);
            setLoading(false);
        }
        
    }
    
   
    useEffect(() =>{
        fetchingData();
    },[])
   
    const handleAliveCheckboxChange = (event) => {
        setAliveChecked(event.target.checked);
        
       const filteringData = rickAndMortyData.filter(item => item.status === 'Alive');
       setFilteredData(filteringData);
        }
        
        
   
    
      const handleDeadCheckboxChange = (event) => {
        setDeadChecked(event.target.checked);
      };
    
      const handleUnknownCheckboxChange = (event) => {
        setUnknownChecked(event.target.checked);
      };

    
    
  return (
    <div className='products'>
        <div className='products-container'>
            <div className='filter-container'>
                <Typography variant="h2" color="initial">Filters</Typography>
                <Typography variant="h4" color="initial">Status</Typography>
                <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={aliveChecked} />}
        label="Alive"
        onChange={handleAliveCheckboxChange}
      />
      <FormControlLabel
        control={<Checkbox checked={deadChecked} />}
        label="Dead"
        onChange={handleDeadCheckboxChange}
      />
      <FormControlLabel
        control={<Checkbox checked={unknownChecked} />}
        label="unknown"
        onChange={handleUnknownCheckboxChange}
      />
    </FormGroup>
    
            </div>
            <div className='products-wrapper'>
                {loading?(<div>Loading...</div>):(
                    
                    filtedData.map(item =>(
                        <MyItem key={item.key} item={item}/>
                    ))
                    )}
            </div>
        </div>
    </div>
  )
}

export default Products