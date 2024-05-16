
import { technologies } from "../../../data/technologies";

import { TechCard } from "./TechCard"

export const TechList = () => {
    return (
        <ul className="container tech">
            {technologies.map(tecnologia => (
                <TechCard key={tecnologia.id} tecnologia={tecnologia} /> 
            ))}     

        </ul>
    );
};