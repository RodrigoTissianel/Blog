import React from 'react';
import { IContactIconsProps } from '../../interface';

const ContactIcons = ({
    src,
    alt,
    path,
}: IContactIconsProps): React.ReactElement => {
    return (
        <a href={path} className="mr-2">
            <img src={src} alt={alt} className="icon-s"></img>
        </a>
    );
};

export default ContactIcons;
