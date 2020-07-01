import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Debug = () => {

    const [ubication, setUbication] = useState('');

    // Obtener ubicación
    useEffect(()=>{        
        const consultarAPI = async() => {
            //API para obtener el IP: https://api.ipify.org?format=jsonp?callback=?
            const url = `https://json.geoiplookup.io/`;
            
            const result = await axios.get(url);

            setUbication(result.data.city);
        }
        consultarAPI();
    },[]);

    return ( 
        <div className="debug">Ubicación: {ubication}</div>
     );
}
 
export default Debug;