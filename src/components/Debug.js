import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Hotkeys from 'react-hot-keys';

const Debug = () => {

    const [ubication, setUbication] = useState('');
    const [state, setState] = useState('');

    function onKeyUp(keyName, e, handle){
        console.log("test:onKeyUp", e, handle);
        setState('');
    }
    function onKeyDown(keyName, e, handle) {
        console.log("test:onKeyDown", keyName, e, handle)
        setState(`Ubicación: ${ubication}`);
        
    }

    // Obtener ubicación
    useEffect(() => {
        const consultarAPI = async () => {
            //API para obtener el IP: https://api.ipify.org?format=jsonp?callback=?
            const url = `https://json.geoiplookup.io/`;

            const result = await axios.get(url);

            setUbication(result.data.city);
        }
        consultarAPI();
    }, []);



    return (
        <Fragment>
            <Hotkeys
                keyName="shift+a,alt+s"
                onKeyDown={onKeyDown.bind(this)}
                onKeyUp={onKeyUp.bind(this)}
            >
                <div style={{ padding: "50px" }}>
                <div className="debug">{state}</div>
                </div>
            </Hotkeys>
        </Fragment>
    );
}

export default Debug;