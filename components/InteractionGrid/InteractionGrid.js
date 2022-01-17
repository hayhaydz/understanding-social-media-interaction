import Masonry from 'react-masonry-css';
import { PostExample } from '../';

const InteractionGrid = () => {
    const breakpointColumns = {
        default: 3,
        1024: 3,
        768: 2,
        640: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumns}
            className="my-masonry-grid pt-8"
            columnClassName="my-masonry-grid_column"
        >
            <PostExample />
            <PostExample />
            <PostExample />
            <PostExample />
            <PostExample />
            <PostExample />
            <PostExample />
            <PostExample />
            <PostExample />
            <PostExample />
            <PostExample />
            <PostExample />
        </Masonry>
    )
}
export default InteractionGrid