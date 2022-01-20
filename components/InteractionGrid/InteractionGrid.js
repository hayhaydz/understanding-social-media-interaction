import Masonry from 'react-masonry-css';
import { Emojione } from 'react-emoji-render';
import { 
    Heart, 
    MessageSquare, 
    Share, 
    Send, 
    Pocket, 
    ArrowUpCircle, 
    ArrowDownCircle,
    Star,
} from 'react-feather';
import { PostExample, Button } from '../';

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
            <PostExample buttonGroup={
                <div className="flex gap-2 mt-4">
                    <Button ><Heart size={18}/> <span className="font-medium ml-2">Like</span></Button>
                    <Button ><MessageSquare size={18}/> <span className="font-medium ml-2">Comment</span></Button>
                    <Button ><Share size={18}/> <span className="font-medium ml-2">Share</span></Button>
                </div>
            }/>
            <PostExample buttonGroup={
                <div className="flex gap-2 mt-4">
                    <Button className="p-0 w-11 h-11 aspect-square"><Emojione svg text="😍" className="btn-emoji" /></Button>
                    <Button className="p-0 w-11 h-11 aspect-square"><Emojione svg text="😆" className="btn-emoji" /></Button>
                    <Button className="p-0 w-11 h-11 aspect-square"><Emojione svg text="😲" className="btn-emoji" /></Button>
                    <Button className="p-0 w-11 h-11 aspect-square"><Emojione svg text="😥" className="btn-emoji" /></Button>
                    <Button className="h-11"><MessageSquare size={18}/> <span className="font-medium ml-2">Comment</span></Button>
                </div>
            }/>
            <PostExample buttonGroup={
                <div className="flex flex-col mt-4">
                    <div className="flex gap-2 mb-4">
                        <Button ><Heart size={18}/> <span className="font-medium ml-2">Like</span></Button>
                        <Button ><MessageSquare size={18}/> <span className="font-medium ml-2">Comment</span></Button>
                        <Button ><Share size={18}/> <span className="font-medium ml-2">Share</span></Button>
                    </div>
                    <div className="flex">
                        <input type="text" className="bg-secondary-800 w-full px-4 py-3 rounded-full font-medium mr-2" placeholder="Add a new comment..."/>
                        <button className="bg-secondary-800 flex items-center justify-center aspect-square w-16 rounded-full transition-colors hover:bg-primary-600"><Send size={18} /></button>
                    </div>
                </div>
            }/>
            <PostExample buttonGroup={
                <div className="flex flex-col mt-4">
                    <div className="flex gap-2 mb-4">
                        <Button ><MessageSquare size={18}/> <span className="font-medium ml-2">Comment</span></Button>
                        <Button ><Pocket size={18}/> <span className="font-medium ml-2">Save</span></Button>
                        <Button ><Share size={18}/> <span className="font-medium ml-2">Share</span></Button>
                    </div>
                    <div className="flex">
                        <input type="text" className="bg-secondary-800 w-full px-4 py-3 rounded-full font-medium mr-2" placeholder="Add a new comment..."/>
                        <button className="bg-secondary-800 flex items-center justify-center aspect-square w-16 rounded-full transition-colors hover:bg-primary-600"><Send size={18} /></button>
                    </div>
                </div>
            }/>
            <PostExample buttonGroup={
                <div className="flex gap-2 mt-4">
                    <Button className="p-0 w-11 h-11 aspect-square"><ArrowUpCircle size={18}/></Button>
                    <Button className="p-0 w-11 h-11 aspect-square"><ArrowDownCircle size={18}/></Button>
                    <Button className="h-11"><MessageSquare size={18}/> <span className="font-medium ml-2">Comment</span></Button>
                    <Button ><Share size={18}/> <span className="font-medium ml-2">Share</span></Button>
                </div>
            }/>
            <PostExample buttonGroup={
                <div className="flex mt-4">
                    <input type="text" className="bg-secondary-800 w-full px-4 py-3 rounded-full font-medium mr-2" placeholder="Add a new comment..."/>
                    <button className="bg-secondary-800 flex items-center justify-center aspect-square w-16 rounded-full transition-colors hover:bg-primary-600"><Send size={18} /></button>
                </div>
            }/>
            <PostExample buttonGroup={
                <div className="flex gap-2 mt-4">
                    <Button ><Heart size={18}/> <span className="font-medium ml-2">Like</span></Button>
                    <Button ><MessageSquare size={18}/> <span className="font-medium ml-2">Comment</span></Button>
                    <Button ><Send size={18}/> <span className="font-medium ml-2">Send</span></Button>
                </div>
            }/>
            <PostExample buttonGroup={
                <div className="flex flex-col mt-4">
                    <div className="flex gap-2 mb-4">
                        <Button ><Star size={18}/> <span className="font-medium ml-2">Favourite</span></Button>
                        <Button ><Pocket size={18}/> <span className="font-medium ml-2">Save</span></Button>
                        <Button ><Share size={18}/> <span className="font-medium ml-2">Share</span></Button>
                    </div>
                    <div className="flex">
                        <input type="text" className="bg-secondary-800 w-full px-4 py-3 rounded-full font-medium mr-2" placeholder="Add a new comment..."/>
                        <button className="bg-secondary-800 flex items-center justify-center aspect-square w-16 rounded-full transition-colors hover:bg-primary-600"><Send size={18} /></button>
                    </div>
                </div>
            }/>
            <PostExample buttonGroup={
                <div className="flex flex-col mt-4">
                    <div className="mb-4 overflow-hidden">
                        <div className="w-[400px] flex gap-2">
                            <Button className="bg-secondary-800 w-80 max-w-[140px]"><span className="text-sm truncate">You make a great point actually</span></Button>
                            <Button className="bg-secondary-800 w-80 max-w-[200px]"><span className="text-sm truncate">I love that Idea so much</span></Button>
                            <Button className="bg-secondary-800 w-80 max-w-[200px]"><span className="text-sm truncate">I should give that a try myself</span></Button>
                        </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                        <Button ><Heart size={18}/> <span className="font-medium ml-2">Like</span></Button>
                        <Button ><MessageSquare size={18}/> <span className="font-medium ml-2">Comment</span></Button>
                        <Button ><Share size={18}/> <span className="font-medium ml-2">Share</span></Button>
                    </div>
                    <div className="flex">
                        <input type="text" className="bg-secondary-800 w-full px-4 py-3 rounded-full font-medium mr-2" placeholder="Add a new comment..."/>
                        <button className="bg-secondary-800 flex items-center justify-center aspect-square w-16 rounded-full transition-colors hover:bg-primary-600"><Send size={18} /></button>
                    </div>
                </div>
            }/>
            <PostExample />
            <PostExample />
            <PostExample />
        </Masonry>
    )
}
export default InteractionGrid