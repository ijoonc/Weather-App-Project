import {useState} from "react";
import Location from "../components/Location";

export default function Index() {
    const [newLocation, setNewLocation] = useState("");
    const [locations, setLocations] = useState<string[]>([]);

    function onAdd() {
        setLocations([...locations, newLocation]);
        setNewLocation('');
    }

    return (
        <div className="px-4 mx-auto max-w-lg">
            <div className="flex items-center py-4">
                <p className="font-bold">WeatherApp</p>
                <input className="ml-auto border border-black text-sm p-1 mr-2" 
                       type='text' placeholder="Add new location..." value={newLocation}
                       onChange={e => setNewLocation(e.target.value)}/>
                <button className="px-2 py-1 text-sm bg-black text-white" 
                onClick={onAdd}>Add</button>
            </div>

            {locations.map(d => (
                <Location location={d}/>
            ))}
        </div>
    );
}
