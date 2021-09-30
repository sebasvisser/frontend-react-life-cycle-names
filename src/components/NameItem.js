import React, {useEffect} from 'react';

function NameItem({ name, activeName, setActiveName }) {

    useEffect(
        () => {
            console.log(`${name} is in de Dom geplopt.`);
        },
        [name]
    )

    useEffect(
        () =>{
            if( activeName ){
                console.log(`${activeName} wilt graag een pilsje bestellen.`);
            }
        },
        [activeName]
    )

  return (
    <li>
      <h3>{name}</h3>
      <button type="button" onClick={() => setActiveName(`${name}`)}>
        Geef een rondje!
      </button>
    </li>
  );
}

export default NameItem;