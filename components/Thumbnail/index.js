import Link from 'next/link';

const Thumbnail = ({
    imageURL = "http://via.placeholder.com/210x295?text=?",
    caption,
    href="",
    as="",
    small = false
}) => {
    return (
        <div className="thumbnail">
            <Link href={href} as={as}>
                <a>
                    <img src={imageURL} className="thumbnail__image" />
                    <h3 className="thumbnail__caption">{caption}</h3>
                </a>
            </Link>

            <style jsx>{`
               .thumbnail__image{
                 width: ${small ? '100px' : '100%'}
               },
               .thumbnail__caption{
                text-align: center;
               }                      
            `}</style>
        </div>
    );
};

export default Thumbnail;