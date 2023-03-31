import React, { useState } from "react";
import contactStyle from "../resources/css/pages/Contact.module.css";
import { Link } from "react-router-dom";

import kakaoLogo from '../resources/images/logos/kakaoLogo.png';
import velogLogo from '../resources/images/logos/velogLogo.jpg';
import notionLogo from '../resources/images/logos/notionLogo.png';
import kakaoQR from '../resources/images/kakaoQR.jpg';

function Contact() {

    const [contactInfo, setContactInfo] = useState([
        { title: "PHONE", info: "010-4195-1928", isHovering: false },
        { title: "EMAIL", info: "juny_0429@naver.com", isHovering: false },
        { title: "VELOG", info: "velog.io/@juny_0429" },
        { title: "GITHUB", info: "github.com/juny0429" },
        { title: "NOTION", info: "notion study log" },
    ]);

    const handleMouseOver = (index) => {
        const newContactInfo = [...contactInfo];
        newContactInfo[index].isHovering = true;
        setContactInfo(newContactInfo);
    };

    const handleMouseLeave = (index) => {
        const newContactInfo = [...contactInfo];
        newContactInfo[index].isHovering = false;
        setContactInfo(newContactInfo);
    };

    return (
        <div className={contactStyle.contactMain}>
            <div className={contactStyle.textMain}>
            {contactInfo.map((item, index) => (
                <div
                key={index}
                className={contactStyle.myinfoText}
                onMouseOver={() => handleMouseOver(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                >
                <span
                    className={`${contactStyle.firstText} ${
                    item.isHovering ? contactStyle.hideText : ""
                    }`}
                >
                    {item.title}
                </span>
                <span
                    className={`${contactStyle.secondText} ${
                    item.isHovering ? contactStyle.showText : ""
                    }`}
                >
                </span>
                </div>
            ))}
            </div>
            <div className={contactStyle.footer}>
                <div className={contactStyle.footerText}>
                    저의 포트폴리오는 계속해서 업데이트 하고 있습니다.  
                    <Link 
                        to="https://asked.kr/juny0429"
                        style={{color:"#C18FFF"}}    
                    >많은 의견 남겨주시면 감사하겠습니다.</Link>
                </div>
                    <span className={contactStyle.footerText} style={{float:"right"}}>[ 본 포트폴리오는 1920 * 1080에 최적화되어 있습니다 ]</span>
            </div>
        </div>
    );
}

export default Contact;
