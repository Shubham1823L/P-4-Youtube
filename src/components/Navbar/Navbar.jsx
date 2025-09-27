import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdMic } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { BsPlusLg } from "react-icons/bs";
import { TbBell } from "react-icons/tb";

const Tooltip = ({ text }) => {
    return <p className="tooltip">{text}</p>
}


const Navbar = () => {
    const [searchText, setSearchText] = useState("")
    const [textFocus, setTextFocus] = useState(false)

    const textSearchRef = useRef(null)

    // const handleTextSearch = () => {
    //     let input = textSearchRef.current
    //     console.log(input)
    // }
    // handleTextSearch()
    const handleTextInput = (e) => {
        setSearchText(e.target.value)
    }
    const handleTextInputFocus = () => {
        setTextFocus(!textFocus)
    }

    const handleClearSearch = () => {
        setSearchText("")
        textSearchRef.current.focus()
    }
    const [voiceSearchTooltip, setVoiceSearchTooltip] = useState(false)
    const toggleVoiceSearchTooltip = () => {
        setVoiceSearchTooltip(!voiceSearchTooltip)
    }
    const [notificationTooltip, setNotificationTooltip] = useState(false)
    const toggleNotificationTooltip = () => {
        setNotificationTooltip(!notificationTooltip)
    }





    // const clearSearchRef = useRef(null)
    // useEffect(() => {
    //     let clear = clearSearchRef.current
    //   if(searchText!==""){
    //     clear.style.display="block"
    //   }
    //   else{
    //     clear.style.display="none"
    //   }

    // }, [searchText])----> BAD , redundant cuz ofc 




    return (
        <nav>
            <ul>
                <li className='navLeft shrink-0'>
                    <button className='unFilledBtnHover cursor'>
                        <RxHamburgerMenu size="1.4rem" />
                    </button>
                    <img src="../../assets/svgs/yt-logo.svg" alt="" />

                </li>
                <li className='SearchQueryWrapper'>
                    <div className="searchBarWrapper">
                        <div>
                            <div>
                                {textFocus && <CiSearch size="1.25rem" className='smallSearchIcon shrink-0' />}
                                <input className='searchBar' type="text" placeholder='Search' value={searchText} onChange={handleTextInput} onFocus={handleTextInputFocus} onBlur={handleTextInputFocus} ref={textSearchRef} />
                            </div>
                            {searchText && <button className="clearSearch">
                                <TfiClose size="1.2rem" strokeWidth=".001" className='cursor ' onClick={handleClearSearch} />
                            </button>}
                        </div>
                        <span>
                            <CiSearch size="1.5rem" className='cursor shrink-0' />
                        </span>
                    </div>
                    <button title='HELLO' className="voiceSearch cursor filledBtnHover" onMouseEnter={toggleVoiceSearchTooltip} onMouseLeave={toggleVoiceSearchTooltip}><MdMic size="1.5rem" />
                        {voiceSearchTooltip && <Tooltip text={"Search with your voice"} />}
                    </button>
                </li>
                <li className='navRight'>
                    <button className='createBtn filledBtnHover'  ><BsPlusLg strokeWidth={.0001} size="1.5rem" />Create</button>
                    <button className='unFilledBtnHover notifications' onMouseEnter={toggleNotificationTooltip} onMouseLeave={toggleNotificationTooltip}>
                        <TbBell size="1.5rem" />
                        {notificationTooltip && <Tooltip text={"Notifications"} />}
                    </button>
                    <button
                        className='profileBtn '>
                        S
                    </button>

                </li>
            </ul>
        </nav>
    )
}

export default Navbar
