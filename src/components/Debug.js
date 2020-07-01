import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Debug = () => {

    const [ubication, setUbication] = useState({});

    useEffect(()=>{
        
        const consultarAPI = async() => {
            
            const url = 'http://gd.geobytes.com/GetCityDetails';
            
            const result = await axios.get(url);

            setUbication(result.data);
        }
        consultarAPI();

    },[]);

    return ( 
        <div className="debug">holas</div>
     );
}
 
export default Debug;