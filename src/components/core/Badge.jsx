export const Badge = ({children , bgColor=null , adClass=null}) => {

    return ( 
        <div className={'w-fit px-3 rounded-xl text-white' + (bgColor ?? ' bg-indigo-800')
            + (adClass ?  (' '+adClass) : '')}>
            {children}
        </div>
     );
}
