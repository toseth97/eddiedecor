import React from "react";

interface ChildProps {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MenuIcon: React.FC<ChildProps> = ({ setMenu, menu }) => {
    return (
        <div
            onClick={() => setMenu((prev) => !prev)}
            className="text-white dark__bg light__text z-30 sticky right-5 top-5 "
        >
            {menu === false ? (
                <i className="bx menu__btn lg:hidden block text-3xl bx-menu-alt-right border p-2 rounded-lg dark__bg light__text"></i>
            ) : (
                <i className="bx menu__btn lg:hidden block text-3xl bx-x border p-2 rounded-lg dark__bg light__text"></i>
            )}
        </div>
    );
};
