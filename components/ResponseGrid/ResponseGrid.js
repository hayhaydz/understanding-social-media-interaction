import Masonry from 'react-masonry-css';
import { ResponseOne, ResponseTwo, ResponseThree, ResponseFour, ResponseFive, ResponseSix, } from '../Responses/';

const ResponseGrid = () => {
    const breakpointColumns = {
        default: 3,
        1115: 2,
        767: 1,
        640: 1
    };

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumns}
                className="my-masonry-grid pt-8"
                columnClassName="my-masonry-grid_column"
            >
                <ResponseOne />
                <ResponseTwo />
                <ResponseThree />
                <ResponseFour />
                <ResponseFive />
                <ResponseSix />
            </Masonry>
        </div>
    )
}
export default ResponseGrid;