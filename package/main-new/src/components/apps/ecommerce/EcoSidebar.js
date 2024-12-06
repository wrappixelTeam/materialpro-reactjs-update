import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter, setSortBy, setPriceRange } from '../../../store/apps/ecommerce/EcommerceSlice';


const EcoSidebar = () => {

  const dispatch = useDispatch();
  const category = useSelector((state) => state.ecommerce.category);
  const sortBy = useSelector((state) => state.ecommerce.sortBy);
  const priceRange = useSelector((state) => state.ecommerce.priceRange);

  const handleCategoryChange = (category) => {
    dispatch(setCategoryFilter(category));
  };

  const handleSortChange = (sortOption) => {
    dispatch(setSortBy(sortOption));
  };

  const handlePriceRangeChange = (e) => {
    const newRange = e.target.value.split(',').map(Number);
    dispatch(setPriceRange(newRange));
  };
  return (
    <div className="p-4">
      <h5 className="mb-4">Category</h5>
      <FormGroup>
        <Label className="cursor-pointer">
          <Input type="radio" name="radio1" className="me-2" onChange={() => handleCategoryChange('Ice-cream shop')} checked={category === 'Ice-cream shop'} /> Ice-cream
        </Label>
      </FormGroup>
      <FormGroup>
        <Label className="cursor-pointer">
          <Input type="radio" name="radio1" className="me-2" onChange={() => handleCategoryChange('Vegitables shop')} /> Vegitables
        </Label>
      </FormGroup>
      <FormGroup>
        <Label className="cursor-pointer">
          <Input type="radio" name="radio1" className="me-2" onChange={() => handleCategoryChange('Toy shop')} /> Toy
        </Label>
      </FormGroup>
      <FormGroup>
        <Label className="cursor-pointer">
          <Input type="radio" name="radio1" className="me-2" onChange={() => handleCategoryChange('AtoZ shop')} /> A to Z
        </Label>
      </FormGroup>
      <br />
      <h5 className="mb-4">Sort By</h5>
      <FormGroup>
        <Label className="cursor-pointer">
          <Input type="radio" name="radio2" className="me-2" onChange={() => handleSortChange('Price Low-High')} checked={sortBy === 'Price Low-High'} /> Price Low- High
        </Label>
      </FormGroup>
      <FormGroup>
        <Label className="cursor-pointer">
          <Input type="radio" name="radio2" className="me-2" onChange={() => handleSortChange('Price High-Low')} checked={sortBy === 'Price High-Low'} /> Price High - Low
        </Label>
      </FormGroup>
      <FormGroup>
        <Label className="cursor-pointer">
          <Input type="radio" name="radio2" className="me-2" onChange={() => handleSortChange('Popular')} /> Popular
        </Label>
      </FormGroup>
      <FormGroup>
        <Label className="cursor-pointer">
          <Input type="radio" name="radio2" className="me-2" onChange={() => handleSortChange('Brand')} /> Brand
        </Label>
      </FormGroup>
      <br />
      <h5 className="mb-4">Price Range</h5>
      <FormGroup>
        <Input id="exampleRange" name="range" type="range" min="0"
          max="1000"
          step="100" value={priceRange.join(',')}
          onChange={handlePriceRangeChange} />
        <div>Price: ${priceRange[0]} - ${priceRange[1]}</div>
      </FormGroup>
    </div>
  );
};

export default EcoSidebar;

// import React from 'react';
// import { FormGroup, Input, Label } from 'reactstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCategoryFilter } from '../../../store/apps/ecommerce/EcommerceSlice';

// const EcoSidebar = () => {
//   const dispatch = useDispatch();
//   const category = useSelector((state) => state.ecommerce.category);
//   const handleCategoryChange = (category) => {
//     dispatch(setCategoryFilter(category));  // Dispatch filter action on category selection
//   };

//   return (
//     <div className="p-4">
//       <h5 className="mb-4">Category</h5>
//       <FormGroup>
//         <Label className="cursor-pointer">
//           <Input type="radio" name="radio1" className="me-2" onChange={() => handleCategoryChange('Ice-cream shop')} checked={category === 'Ice-cream shop'} /> Ice-cream
//         </Label>
//       </FormGroup>
//       <FormGroup>
//         <Label className="cursor-pointer">
//           <Input type="radio" name="radio1" className="me-2" onChange={() => handleCategoryChange('Vegitables shop')} /> Vegetables
//         </Label>
//       </FormGroup>
//       <FormGroup>
//         <Label className="cursor-pointer">
//           <Input type="radio" name="radio1" className="me-2" onChange={() => handleCategoryChange('Toy shop')} /> Toy
//         </Label>
//       </FormGroup>
//       <FormGroup>
//         <Label className="cursor-pointer">
//           <Input type="radio" name="radio1" className="me-2" onChange={() => handleCategoryChange('AtoZ shop')} /> A to Z
//         </Label>
//       </FormGroup>
//       {/* Other filters... */}
//     </div>
//   );
// };

// export default EcoSidebar;
