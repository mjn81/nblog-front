
export const Label = ({src , text}) => {
    return (
        <label htmlFor={src} className="capitalize">
            {text} :
        </label>
    );
};

