import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDropdown } from '../../../store/uireducer';
import '../UserHomePage.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import tempProf from '../../../static/temp-prof.png'

const ProfileIcon = () => {
  const dispatch = useDispatch();
  const isDropdownOpen = useSelector(state => state.ui.isDropdownOpen);

  // Detect click outside of menu to close it
  const dropdownRef = useRef(null);

  useEffect(()=> {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        dispatch(toggleDropdown())
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [isDropdownOpen, dispatch])

  const handleClick =() => {
    dispatch(toggleDropdown());
  };

  return (
    <div>
      <div onClick={handleClick}>
        <img
          src={tempProf} 
          alt='temp-prof-pic'
          className='userbar-profile-pic'
        />
      </div>
      { isDropdownOpen && <div ref={dropdownRef}><DropdownMenu /></div> }
    </div>
  );

};

export default ProfileIcon;