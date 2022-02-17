export const SquareButton = ({onClick , children , bgColor=null, adclass=null}) => {
    return (  
        <button onClick={onClick} className={'px-2 py-1 rounded-lg ' +
            (bgColor ?? 'bg-gray-200') + ' ' + (adclass ?? '')}>
            {children}
        </button>
    );
}
 
export const FullButton = () => {
    return (
        <button>

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