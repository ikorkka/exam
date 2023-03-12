import React from "react";
import style from "./Header.module.scss";
import logo from "../../assets/logo.png";
import list from "../../assets/list.png";
import pen from "../../assets/pen.png";
import Searchinput from "../Searchinput/Searchinput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { smilelist } from "../../constans/smilelist";
import { isDisabled } from "@testing-library/user-event/dist/utils/misc/isDisabled";

const Header = () => {
    const [sortsActive, setSortsActive] = useState(false);
    const sortsActiveAdd = () => {
        setSortsActive(true);
    };
    
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.main}>
                    <div className={style.logo}>
                        <span>
                            <img src={logo} alt="logo" />
                        </span>
                        <h1>Дневник</h1>
                    </div>
                    <div
                        className={
                            sortsActive ? style.sortsActive : style.sorts
                        }
                    >
                        <Searchinput />
                        <select>
                            <option style={{ fontSize: 30 }}>☺</option>
                            {smilelist.map((option) => {
                                return (
                                    <option key={option.id}>
                                        {option.smile}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className={style.tools}>
                        <div>
                            <img src={list} alt="list" />
                            <Link onClick={() => setSortsActive(true)} to="/">
                                Список
                            </Link>
                        </div>
                        <div>
                            <img src={pen} alt="pen" />
                            <Link to="./record" onClick={sortsActiveAdd}>
                                Запись
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
