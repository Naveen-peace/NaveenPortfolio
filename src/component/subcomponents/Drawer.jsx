import React from 'react';
import { Icon } from "@iconify/react";

const Drawer = ({ isOpen, onClose, children }) => {
    return (
        <div className={`drawer-overlay ${isOpen ? 'open' : ''}`}>
            <div className="drawer-content">
                <button className="drawer-close" onClick={onClose}>
                    <Icon icon="carbon:close" width="24" height="24" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Drawer;
