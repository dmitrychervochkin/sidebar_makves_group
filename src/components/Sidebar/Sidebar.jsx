import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const routes = [
    { title: "Home", icon: "fas-solid fa-house", path: "/" },
    { title: "Sales", icon: "chart-line", path: "/sales" },
    { title: "Costs", icon: "chart-column", path: "/costs" },
    { title: "Payments", icon: "wallet", path: "/payments" },
    { title: "Finances", icon: "chart-pie", path: "/finances" },
    { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
    { title: "Settings", icon: "sliders", path: "/settings" },
    { title: "Support", icon: "phone-volume", path: "/support" },
];

const SidebarContainer = ({ color, className }) => {
    const [isOpened, setIsOpened] = useState(true);

    const goToRoute = path => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };
    console.log(color, isOpened);
    return (
        <div
            className={className}
            style={{ width: isOpened ? "300px" : "110px" }}
        >
            <div className="header">
                <img className="header__img" src={logo} alt="TensorFlow logo" />
                {isOpened && <span className="header__title">TensorFlow</span>}
                <div
                    className="header__btn"
                    onClick={toggleSidebar}
                    style={{
                        right: isOpened ? "-20px" : "-60px",
                        backgroundColor: `var(--color-button-background-${color}-${
                            isOpened ? "active" : "default"
                        })`,
                    }}
                >
                    <FontAwesomeIcon
                        icon={isOpened ? "angle-left" : "angle-right"}
                    />
                </div>
            </div>
            <div className="routes__list">
                {routes.map(route => (
                    <div
                        style={{
                            justifyContent: isOpened ? "flex-start" : "center",
                        }}
                        className="routes__list--item"
                        key={route.title}
                        onClick={e => {
                            const activePages =
                                document.querySelectorAll(".active");
                            activePages.forEach(item =>
                                item.classList.remove("active")
                            );
                            goToRoute(route.path);
                            e.currentTarget.classList.add("active");
                        }}
                    >
                        <FontAwesomeIcon size="lg" icon={route.icon} />
                        {isOpened && <span>{route.title}</span>}
                    </div>
                ))}
            </div>
            <div className="routes__list--footer">
                {bottomRoutes.map(route => (
                    <div
                        style={{
                            justifyContent: isOpened ? "flex-start" : "center",
                        }}
                        className="routes__list--item"
                        key={route.title}
                        onClick={e => {
                            const activePages =
                                document.querySelectorAll(".active");
                            activePages.forEach(item =>
                                item.classList.remove("active")
                            );
                            goToRoute(route.path);
                            e.currentTarget.classList.add("active");
                        }}
                    >
                        <FontAwesomeIcon size="lg" icon={route.icon} />
                        {isOpened && <span>{route.title}</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

const waveIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Sidebar = styled(SidebarContainer)`
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    transition: width 0.5s;
    border-radius: 20px;
    border: 2px solid
        var(--color-sidebar-background-${({ color }) => color}-active);
    outline: 1px solid
        var(--color-sidebar-background-${({ color }) => color}-default);
    background-color: var(
        --color-sidebar-background-${({ color }) => color}-default
    );
    height: calc(100vh - 20px);

    .header {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
        padding: 40px 30px 10px 30px;
        position: relative;
        opacity: 0;
        animation: ${waveIn} 0.6s ease-out forwards;

        &__img {
            height: 50px;
        }
        &__title {
            overflow: hidden;
            width: 100%;
            font-size: 25px;
            font-weight: 600;
            color: var(--color-text-logo-${({ color }) => color}-default);
        }
        &__btn {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(
                --color-button-background-${({ color }) => color}-active
            );
            color: var(--color-text-${({ color }) => color}-default);

            &:hover {
                cursor: pointer;
                color: var(--color-text-${({ color }) => color}-hover);
            }
            &:active {
                color: var(--color-text-${({ color }) => color}-active);
            }
        }
    }

    .routes__list {
        flex: 1;
        display: flex;
        flex-direction: column;

        &--item {
            opacity: 0;
            animation: ${waveIn} 0.6s ease-out forwards;

            &:nth-child(1) {
                animation-delay: 0.1s;
            }
            &:nth-child(2) {
                animation-delay: 0.2s;
            }
            &:nth-child(3) {
                animation-delay: 0.3s;
            }
            &:nth-child(4) {
                animation-delay: 0.4s;
            }
            &:nth-child(5) {
                animation-delay: 0.5s;
            }
            &:nth-child(6) {
                animation-delay: 0.6s;
            }

            overflow: hidden;
            display: flex;
            gap: 35px;
            margin: 10px 30px;
            padding: 10px 15px;
            height: 30px;
            align-items: center;
            border-radius: 10px;
            font-weight: 600;
            color: var(--color-text-${({ color }) => color}-default);
            background-color: var(
                --color-button-background-${({ color }) => color}-default
            );
            transition: background-color 0.2s, color 0.2s, margin 0.2s,
                padding 0.2s;

            &:hover {
                padding: 10px 25px;
                cursor: pointer;
                background-color: var(
                    --color-sidebar-background-${({ color }) => color}-hover
                );
                color: var(--color-text-${({ color }) => color}-hover);
            }
            &:active {
                background-color: var(
                    --color-sidebar-background-${({ color }) => color}-active
                );
                color: var(--color-text-${({ color }) => color}-active);
            }
        }
        &--footer {
            margin-top: auto;
            border-top: 2px solid
                var(--color-sidebar-background-${({ color }) => color}-active);
        }
    }
    .active {
        background-color: var(
            --color-sidebar-background-${({ color }) => color}-active
        );
        color: var(--color-text-${({ color }) => color}-active);
    }
`;

SidebarContainer.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
};
