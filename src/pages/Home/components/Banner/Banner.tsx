import { Link } from 'react-router-dom';
import { IContentProps } from '../../interface';

const Banner = ({ content }: IContentProps) => {
    return (
        <>
            <div className="img-banner hidden">
                <img src={content.imageUrl} alt="Banner do blog"></img>
            </div>

            <div className="text-center">
                <h6 className="color-gray mt-3 ">{content.date}</h6>
                <h6 className="uppercase color-primary ">{content.category}</h6>
                <Link to={'/Post/' + content.id} className="link">
                    {' '}
                    <h2>{content.title}</h2>{' '}
                </Link>
                <p className=" mt-1">{content.resume}</p>
                <div className="my-3">
                    <Link to={'/Post/' + content.id} className="color-primary">
                        Ler mais
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Banner;
