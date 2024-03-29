import { Button, TextField } from "@mui/material";
import { useState } from "react";

function Dashboard({store}) {
    const money = store.playerStore((state) => state.money);
    const apples = store.playerStore((state) => state.apples);
    const modApples = store.playerStore((state) => state.modApples);
    const farms = store.playerStore((state) => state.ownedFarms);
    const addFarm = store.playerStore((state) => state.addFarm);
    const [farmName, setFarmName] = useState('');

    return (
        <div style={{height: '100vh'}}>
        Money: {money} <br />
        Apples: {apples} 
        {/* <Button onClick={() => modApples(1)}>Add an apple</Button> */}
        <br />
        Farms: {farms.join(', ')}<br />
        <br />

        {/* <TextField label="Farm Name" autoComplete="false" value={farmName} onChange={e => setFarmName(e.target.value)}/> */}
        {/* <Button onClick={() => addFarm(farmName)}>Add Farm</Button> */}
        </div>
    );
}

export default Dashboard;