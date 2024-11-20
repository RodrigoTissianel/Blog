import React, { useEffect, useState } from 'react';
import { IContentProps, IUsers } from '../../interface';
import api from '../../../../services/api';

const MostRecent = ({ content }: IContentProps): React.ReactElement => {
    const [user, setUser] = useState<IUsers | null>(null);

    useEffect(() => {
        if (content) {
            api.get(`/user/${content.id_user}`).then((response) => {
                setUser(response.data);
            });
        }
    }, []);

    console.log(content);

    function parseDate(dateString: string): { day: string; month: string } {
        const [day, month] = dateString.split(' ');
        const formattedMonth =
            month.charAt(0).toUpperCase() + month.slice(1).toLowerCase(); // Formatar o mês
        return { day, month: formattedMonth };
    }
    const { day, month } = parseDate(content.date);

    return (
        <>
            <div className="grid-4 card p-0 hidden ">
                <div className="row">
                    <div className=" grid-nobreak-3">
                        <h6 className="color-gray uppercase mb-2 text-center">
                            {month}
                        </h6>
                        <h3 className="color-primary bt-black pt-2 text-center">
                            {day}
                        </h3>
                    </div>

                    <div className="grid-nobreak-9">
                        <h6 className="uppercase color-primary">
                            {content.category}
                        </h6>
                        <a href="" className="link-title">
                            <h4 className="mt-1">{content.title}</h4>
                        </a>

                        <p className="my-2 ">{content.content}</p>

                        <div className="flex-start-row mt-2">
                            <div className="profile">
                                <img
                                    src={user?.ImageProfile}
                                    className="profile-img"
                                    alt={user?.name}
                                />
                            </div>

                            <div className="ml-1">
                                <h6 className="color-primary">{user?.name}</h6>
                                <h6 className="color-gray">@{user?.user}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MostRecent;
