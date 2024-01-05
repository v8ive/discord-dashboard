import React from "react";
import { DiFirefox, DiUbuntu } from "react-icons/di";
import { FaAtlassian, FaCanadianMapleLeaf, FaGithub } from "react-icons/fa";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                        bg-white dark:bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaCanadianMapleLeaf size="28" />} />
            <Divider />
            <SideBarIcon icon={<DiUbuntu size="28" />} />
            <SideBarIcon icon={<FaAtlassian size="28" />} />
            <SideBarIcon icon={<DiFirefox size="28" />} />
            <Divider />
            <SideBarIcon icon={<FaGithub size="28" />} />
        </div>
    )
};

const SideBarIcon = ({ icon, text = 'tooltips 💡' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltips group-hover:scale-100">
            {text}
        </span>
    </div>
)

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar; 