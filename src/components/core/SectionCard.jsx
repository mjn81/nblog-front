import React from 'react';
import {TitleSeparator} from "./Seprator";

export const SectionCard = ({children}) => {
    return (
        <section className="w-full">
            <TitleSeparator title="latest news" />
            <div>
                {children}
            </div>
        </section>
    );
};


