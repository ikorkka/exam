import React from "react";
import style from "./Main.module.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const Main = ({ todos }) => {
    const [modal, setModal] = useState(false);
    const [todoNumber, setTodoNumber] = useState(-1);

    const modalIsActive = (index) => {
        setModal(true);
        setTodoNumber(index);
    };

    const modalIsNotActive = () => {
        setModal(false);
    };

    return (
        <section>
            <div className={style.main_todos}>
                {todos.Length !== 0 ? (
                    todos.map((todo, index) => {
                        return (
                            <>
                                <div
                                    onClick={() => modalIsActive(index)}
                                    className={style.main_todo}
                                >
                                    <div className={style.background}>
                                        <img src={todo.src} alt="background" />
                                    </div>
                                    <div className={style.smile}>
                                        <span>{todo.choice}</span>
                                    </div>
                                    <div className={style.text}>
                                        <div>
                                            <h4>{todo.title}</h4>
                                            <p>{todo.date}</p>
                                        </div>
                                        <p>{todo.description}</p>
                                    </div>
                                </div>
                                {modal && todoNumber === index ? (
                                    <Modal
                                        title={todo.title}
                                        description={todo.description}
                                        date={todo.date}
                                        choice={todo.choice}
                                        src={todo.src}
                                        isNotActive={modalIsNotActive}
                                    />
                                ) : 
                                ''}
                            </>
                        );
                    })
                ) : (
                    <h1>Туду нет!</h1>
                )}
            </div>
        </section>
    );
};

export default Main;
