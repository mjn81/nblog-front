export const SquareButton = ({onClick , children , bgColor=null, adclass=null}) => {
    return (  
        <button onClick={onClick} className={'px-2 py-1 rounded-lg ' +
            (bgColor ?? 'bg-gray-200') + ' ' + (adclass ?? '')}>
            {children}
        </button>
    );
}
 
export const FullButton = ({onClick ,children , bgcColor=null , disable=false,  adClass}) => {
    return (
        <button onClick={onClick} disabled={disable} className={'w-full rounded-md py-1.5 text-white border-none outline-none '
        + (disable ? ' bg-gray-400' : '') + (bgcColor ? (' ' + bgcColor) : ' bg-indigo-700') + (' ' + adClass)}>
            {children}
        </button>
    );
}
 
export const OutlineButton = ({onClick , children , adclass=null}) => {
    return (
        <button onClick={onClick} className={adclass?? ''}>
            {children}
        </button>
    );

}