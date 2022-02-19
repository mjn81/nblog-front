import React from 'react';
import {TitleSeparator} from "./Separator";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export const SectionCard = ({title , children}) => {
    return (
        <section className="w-full">
            <TitleSeparator title={title} icon={faBars}  />
            <div>
                {children}
            </div>
        </section>
    );
};


