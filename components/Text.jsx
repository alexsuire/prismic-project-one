import { PrismicText } from "@prismicio/react";


const Text = ({ field, className }) => {
    return (
    field && (
        <div className={className}>
            <PrismicText field ={field}/>
        </div>
        )
    
    )
}   

export default Text