import { Link } from 'react-router-dom';
import { IContentProps } from '../../interface';

const MostSeen = ({ content }: IContentProps) => {
    return (
        <>
            <div className="grid-4 card p-0">
                <div className="hidden thumb">
                    <Link to={'/Post/' + content.id}>
                        <img
                            src={content.imageUrl}
                            alt="Posts mais vistos"
                        ></img>
                    </Link>
                </div>
                <div className="px-2">
                    <h6 className="color-gray mt-2">{content.date}</h6>
                    <h6 className="uppercase color-primary">
                        {content.category}
                    </h6>
                    <Link to={'/Post/' + content.id}>
                        <h4 className="">{content.title}</h4>
                    </Link>
                    <p className="mt-1">{content.resume}</p>

                    <div className="my-3">
                        <Link
                            to={'/Post/' + content.id}
                            className="color-primary"
                        >
                            Ler mais
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MostSeen;
