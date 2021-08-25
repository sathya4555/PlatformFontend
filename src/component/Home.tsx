import { useState } from "react";
import { useEffect } from "react";



export const Home = (props: { name: string }) => {
    const [name, setName] = useState('');
 
    return (
        <div>
              {props.name ? 'Hi ' + props.name : 'You are not logged in'}

              
        </div>
    )
}
