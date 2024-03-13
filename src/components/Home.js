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
                        padding: "0.5rem",
                        borderRadius: "1rem",
                        width: "25rem",
                        }}
                    >
                        <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                            <h5>{item.name}</h5>
                            <p>Rating : {item.rating}</p>
                        </div>
                        <div>
                            <p>{item.address}</p>
                        </div>
                        <div>
                            <p>{item.outcode}</p>
                            <p>{item.postcode}</p>
                        </div>
                        <div>
                            <p>{item.type_of_food}</p>
                            <a href={item.URL}>Visit menu</a>
                        </div>
                        
                        
                    </div>
                    );
                })}
             </div>
        </div>
    )
}

export default Home