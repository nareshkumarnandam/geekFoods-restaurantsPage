import React from 'react';
import {data} from './Data';
import { useState } from 'react';

const Home = () => {
    const [food, setFood] = useState(data);

    function filterData(name) {
        let filterData = data.filter((item) => {
          if (item.name.toLowerCase().includes(name.trim())) {
            return true;
          }
          return false;
        });
        setFood(filterData);
      }

    function updateRating(e) {
        let obj = [...food];
    
        obj[0].rating = e.target.value;
    
        setFood(obj);
    }

    return (
        <div className='homeDiv'>
             <div className='inputs'>
                <div>
                    <input
                    type="text"
                    name="search"
                    placeholder="Search restaurants..."
                    onChange={(e) => {
                        filterData(e.target.value);
                    }}
                    />
                </div>
                <div>
                    <label htmlFor='rating' >Minimum rating: </label>
                    <input id='rating'
                    type="number"
                    name="rating"
                    placeholder="0"
                    onChange={updateRating}
                    />
                </div>
                
             </div>
             <div className='cards'>
             {food.map((item) => {
                    return (
                    <div
                        key={item._id.$oid}
                        style={{
                        border: "1px solid black",
                        padding: "0",
                        borderRadius: "10px",
                        width: "25rem",
                        border:"none",

                        }}
                    >
                        <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', padding:' 0 20px', gap:'30px'}}>
                            <h4>{item.name}</h4>
                            <p>Rating : {item.rating}</p>
                        </div>
                        <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', padding:' 0 20px', gap:'30px'}}>
                            <p>{item.address}</p>
                        </div>
                        <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', padding:' 0 20px', gap:'20px'}}>
                            <p>{item.outcode}</p>
                            <p>{item.postcode}</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'flex-start',borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px', padding:'10px 20px', gap:'0px', backgroundColor:'lightgray', width:'90%', margin:'0'}}>
                            <p>{item.type_of_food}</p>
                            <a href={item.URL} style={{textDecoration:'none', color:'#3B82F6', cursor:'pointer'}}>Visit menu</a>
                        </div>
                        
                        
                    </div>
                    );
                })}
             </div>
        </div>
    )
}

export default Home