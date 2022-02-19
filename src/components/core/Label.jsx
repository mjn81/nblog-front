
export const Label = ({src , text}) => {
    return (
        <label for={src} className="capitalize">
            {text} :
        </label>
    );
};

