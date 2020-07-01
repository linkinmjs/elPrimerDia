import React, { useState, useEffect } from "react";
import { getDataUser } from "../../axios/getUserData";
import Hotkeys from "react-hot-keys";

const Debug = () => {
  const [ubication, setUbication] = useState("");
  const [state, setState] = useState("");

  function onKeyUp(keyName, e, handle) {
    console.log("test:onKeyUp", e, handle);
    setState("");
  }
  function onKeyDown(keyName, e, handle) {
    console.log("test:onKeyDown", keyName, e, handle);
    setState(`Ubicación: ${ubication}`);
  }

  useEffect(() => {
    const getData = async () => {
      const { city } = await getDataUser();
      setUbication(city);
    };
    getData();
  }, []);

  return (
    <>
      <Hotkeys
        keyName="shift+a,alt+s"
        onKeyDown={onKeyDown.bind(this)}
        onKeyUp={onKeyUp.bind(this)}
      >
        <div style={{ padding: "50px" }}>
          <div className="debug">{state}</div>
        </div>
      </Hotkeys>
    </>
  );
};

export default Debug;
