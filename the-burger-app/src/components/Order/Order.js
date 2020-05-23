import React from 'react'
import classes from './Order.css'

const order = (props) => {
   const ingredients = [];

   for(let ingredientsName in props.ingredients){
       ingredients.push({
           name:ingredientsName,
           amount:props.ingredients[ingredientsName]
       }
           
       )
   }

   const ingredientOutput = ingredients.map(igkey => {
       return <span 
            style={{
                textTransform:'capitalize',
                display:'inline-block',
                margin:'0 8px',
                border:'1px solid #ccc',
                padding:'5px'

            }}
            key={igkey.name}>{igkey.name} ({igkey.amount})</span>;

       
   })

    return(
        <div className={classes.Order}>
        <p>Ingredients: {ingredientOutput}</p>
        <p>Price: <strong> USD {props.price}</strong></p>
    </div>

    )
}
    
    


export default order