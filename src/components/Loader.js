import React from 'react'

function Loader() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-80'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    margin: "auto",
                    background: "rgb(255, 255, 255)",
                    display: "block",
                    shapeRendering: "auto"
                }}
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle cx={30} cy={50} fill="#ef2f2f" r={20}>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="1.1494252873563218s"
                        keyTimes="0;0.5;1"
                        values="30;70;30"
                        begin="-0.5747126436781609s"
                    />
                </circle>
                <circle cx={70} cy={50} fill="#e0eafa" r={20}>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="1.1494252873563218s"
                        keyTimes="0;0.5;1"
                        values="30;70;30"
                        begin="0s"
                    />
                </circle>
                <circle cx={30} cy={50} fill="#ef2f2f" r={20}>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="1.1494252873563218s"
                        keyTimes="0;0.5;1"
                        values="30;70;30"
                        begin="-0.5747126436781609s"
                    />
                    <animate
                        attributeName="fill-opacity"
                        values="0;0;1;1"
                        calcMode="discrete"
                        keyTimes="0;0.499;0.5;1"
                        dur="1.1494252873563218s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>

        </div>
    )
}

export default Loader