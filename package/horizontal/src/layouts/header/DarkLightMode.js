import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ChangeDarkMode,
} from '../../store/customizer/CustomizerSlice';
import { Button } from 'reactstrap';

const DarkLightMode = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.customizer.isDark);
    const handleMode = () => {
      if(isDarkMode){
        dispatch(ChangeDarkMode(false)) && window.location.reload(false);
      }else{
        dispatch(ChangeDarkMode(true))
      }
    }
  return (
    <Button
    className="d-none d-lg-flex mx-1 dropdown-item-data"
    onClick={handleMode}
  >
    <i className={`bi ${isDarkMode?'bi-brightness-high':'bi-moon'} fs-5 text-white`}></i>
  </Button>
  )
}

export default DarkLightMode