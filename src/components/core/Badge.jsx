export const Badge = ({children ,isWhite=true , bgColor=null , adClass=null}) => {

    return ( 
        <div className={'w-fit px-3 rounded-xl' +(isWhite ? ' text-white' : ' text-gray-700') + (bgColor ?? ' bg-indigo-800')
            + (adClass ?  (' '+adClass) : '')}>
            {children}
        </div>
     );
}
