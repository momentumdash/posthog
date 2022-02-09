import React from 'react'
import './InfoMessage.scss'
import { IconInfo } from '../icons'

/** An informative message. */
export function InfoMessage({
    children,
    style,
}: {
    children: string | JSX.Element
    style?: React.CSSProperties
}): JSX.Element {
    return (
        <div className="info-message" style={style}>
            <IconInfo className="info-message__icon" />
            <div>{children}</div>
        </div>
    )
}
