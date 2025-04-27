import { createSlice } from '@reduxjs/toolkit'

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        items: []
    },
    reducers: {
        addProductIdToCart: (state, action) => {
            let item = action.payload;

            let itemsClone = [...state.items]


            let itemCloneIndex = itemsClone.findIndex((itemClone) => itemClone.id == item.id);

            if (itemCloneIndex == -1) {
                itemsClone.push(
                    {
                        "id": item.id,
                        "name": item.name,
                        "img": item.img,
                        "price": item.price,
                        "qty": 1
                    }
                )
            }
            else {
                itemsClone[itemCloneIndex].qty++;
            }
            state.items = itemsClone;
        },
        removeProductIdFromCart: (state, action) => {
            let itemId = action.payload;

            let itemsClone = [...state.items]

            let itemCloneIndex = itemsClone.findIndex((itemClone) => itemClone.id == itemId);

            if (itemCloneIndex > -1) {

                itemsClone[itemCloneIndex].qty--;

                if (itemsClone[itemCloneIndex].qty == 0) {

                    itemsClone.splice(itemCloneIndex, 1)

                }
            }

            state.items = itemsClone;
        },
        clearCart: (state) => {
            state.items = []
        }
    }

})

export const { addProductIdToCart, removeProductIdFromCart, clearCart } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer;
