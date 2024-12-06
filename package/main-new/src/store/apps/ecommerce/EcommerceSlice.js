// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = '/api/data/ecommerce/Shopitems';

// // Initial state for the products and selected category
// const initialState = {
//     products: [],
//     selectedCategory: 'Ice-cream',
//     filteredProducts: [],
// };

// export const ecommerceSlice = createSlice({
//     name: 'ecommerce',
//     initialState,
//     reducers: {
//         getProducts: (state, action) => {
//             state.products = action.payload;
//             // When products are fetched, filter them based on the default category
//             state.filteredProducts = state.products.filter(
//                 (product) => product.category === state.selectedCategory
//             );
//             console.log('Updated Products:', state.products);
//             console.log('Filtered Products:', state.filteredProducts);
//         },
//         setCategory: (state, action) => {
//             state.selectedCategory = action.payload;
//             // Filter products based on the selected category
//             state.filteredProducts = state.products.filter(
//                 (product) => product.category === action.payload
//             );
//         },
//         setFilteredProducts: (state) => {
//             // Reset the filtered products when required
//             state.filteredProducts = state.products;
//         },
//     },
// });

// export const { setCategory, setFilteredProducts, getProducts } = ecommerceSlice.actions;

// // export const selectFilteredProducts = (state) => state.ecommerce.filteredProducts;
// // export const selectSelectedCategory = (state) => state.ecommerce.selectedCategory;

// export const selectFilteredProducts = (state) => state.ecommerce.filteredProducts;
// export const selectSelectedCategory = (state) => state.ecommerce.selectedCategory;


// export const fetchProducts = () => async (dispatch) => {
//     try {
//         const response = await axios.get(`${API_URL}`);
//         console.log(response.data);
//         dispatch(getProducts(response.data));

//     } catch (err) {
//         throw new Error(err);
//     }
// };


// export default ecommerceSlice.reducer;








// redux/filterSlice.js
// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = '/api/data/ecommerce/Shopitems';

// const initialState = {
//     items: [],
//     category: 'Ice-cream shop',
//     filteredItems: [],
//     sortBy: 'Price Low- High',
//     priceRange: [0, 100],

// };

// const ecommerceSlice = createSlice({
//     name: 'ecommerce',
//     initialState,
//     reducers: {
//         getProducts: (state, action) => {
//             state.items = action.payload;
//             state.filteredItems = action.payload.filter((product) => product.category === state.category);
//         },
//         setCategoryFilter: (state, action) => {
//             state.category = action.payload;
//             // Filter items based on the selected category
//             state.filteredItems = state.items.filter((product) => product.category === action.payload);
//         },


//     },
// });

// export const { getProducts, setCategoryFilter, setSortBy, setPriceRange } = ecommerceSlice.actions;
// export default ecommerceSlice.reducer;



// export const fetchShopItems = () => async (dispatch) => {

//     try {
//         // Assuming you are using the mock API
//         const response = await axios.get('/api/data/ecommerce/Shopitems');
//         dispatch(getProducts(response.data)); // Dispatch success with the fetched data
//     } catch (error) {
//         throw new Error(err);
//     }
// };





import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = '/api/data/ecommerce/Shopitems';

const initialState = {
    items: [],               // All fetched items
    filteredItems: [],       // Items after applying filters
    category: 'Ice-cream shop', // Default category
    sortBy: 'Price Low-High',  // Default sorting (Price Low to High)
    priceRange: [0, 10000],    // Default price range (0 to 10000)
};

const ecommerceSlice = createSlice({
    name: 'ecommerce',
    initialState,
    reducers: {
        // Store fetched products and apply the default filter
        getProducts: (state, action) => {
            state.items = action.payload;
            state.filteredItems = filterItems(state);  // Apply filters after fetching
        },

        // Set the category filter and apply it
        setCategoryFilter: (state, action) => {
            state.category = action.payload;
            state.filteredItems = filterItems(state);  // Reapply filters
        },

        // Set the sorting filter and apply it
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
            state.filteredItems = filterItems(state);  // Reapply sorting
        },

        // Set price range filter and apply it
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
            state.filteredItems = filterItems(state);  // Reapply price range filter
        },
    },
});

export const { getProducts, setCategoryFilter, setSortBy, setPriceRange } = ecommerceSlice.actions;
export default ecommerceSlice.reducer;

// Function to apply category, price range, and sort filters
const filterItems = (state) => {
    let filteredItems = state.items.filter(
        (item) =>
            item.category === state.category &&   // Filter by selected category
            parseFloat(item.price.replace('$', '')) >= state.priceRange[0] &&   // Filter by price range (low to high)
            parseFloat(item.price.replace('$', '')) <= state.priceRange[1]
    );

    // Apply sorting based on the selected option
    if (state.sortBy === 'Price Low-High') {
        filteredItems.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));  // Sort by price low to high
    } else if (state.sortBy === 'Price High-Low') {
        filteredItems.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));  // Sort by price high to low
    } else if (state.sortBy === 'Popular') {
        filteredItems.sort((a, b) => b.star.length - a.star.length);  // Sort by popularity (number of stars)
    } else if (state.sortBy === 'Brand') {
        filteredItems.sort((a, b) => a.title.localeCompare(b.title));  // Sort by title (if it's a brand, otherwise by name)
    }

    return filteredItems;
};


// Fetch products from the API and apply default filters
export const fetchShopItems = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL);
        dispatch(getProducts(response.data));  // Dispatch products and apply filters
    } catch (error) {
        console.error("Error fetching shop items:", error);
    }
};
