// Specific ingredient item
import { isEditable } from '@testing-library/user-event/dist/utils'
import EditIngredientForm from '../EditIngredientForm/EditIngredientForm'
export default function Ingredient({ingredient, user, addToOrder, removeFromOrder, isInNewOrder, isEditing}){
    // console.log("<<<<Ingredient>>>>")
    // console.log(ingredient)
    return(
        <>
            {/* <h4>Ingredient</h4> */}
            <p>{ingredient.name}</p>

            {isEditing ?           
                <EditIngredientForm />
                :
                isInNewOrder ?
                    <button onClick={() => removeFromOrder(ingredient._id)}>--</button>
                    :
                    <button onClick={() => addToOrder(ingredient._id)}>➕</button>
            }
        </>
    )
}