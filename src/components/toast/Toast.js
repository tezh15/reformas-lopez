import React, { useState, useEffect } from 'react';
import { ImCheckmark, ImCancelCircle, ImInfo, ImWarning } from "react-icons/im";
import './Toast.css';
const Toast = (props) => {
    const { typeToast, changeError, textToast } = props;
    const [list, setList] = useState([]);

    const deleteToast = id => {
        const index = list.findIndex(e => e.id === id);
        list.splice(index, 1);
        setList([...list]);
        changeError();
    }

    const setToastList = () => {
        switch (typeToast) {
            case "done":
                setList([
                    {
                        id: 1,
                        description: textToast,
                        backgroundColor: '#5cb85c',
                        icon: <ImCheckmark style={{ width: 50, height: 50 }} />
                    }
                ]);
                setTimeout(() => {
                    deleteToast(1);
                }, 2000);
                break;
            case "error":
                setList([
                    {
                        id: 2,
                        description: textToast,
                        backgroundColor: '#d9534f',
                        icon: <ImCancelCircle style={{ width: 50, height: 50 }} />
                    }
                ]);
                setTimeout(() => {
                    deleteToast(2);
                }, 2000);
                break;
            case "info":
                setList([
                    {
                        id: 3,
                        description: textToast,
                        backgroundColor: '#5bc0de',
                        icon: <ImInfo style={{ width: 50, height: 50 }} />
                    }
                ]);
                setTimeout(() => {
                    deleteToast(3);
                }, 2000);
                break;
            case "warning":
                setList([
                    {
                        id: 4,
                        description: textToast,
                        backgroundColor: '#f0ad4e',
                        icon: <ImWarning style={{ width: 50, height: 50 }} />
                    }
                ]);
                setTimeout(() => {
                    deleteToast(4);
                }, 2000);
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        setToastList();
    }, [typeToast]);

    return (
        <>
            <div className="notification-container bottom-right">
                {
                    list.map((toast, i) =>
                        <div
                            key={i}
                            className="alert alert-dismissible fade show notification toast bottom-right"
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <div className="notification-image">
                                {toast.icon}
                            </div>
                            <div style={{ textAlign:'center' }}>
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default Toast;