import { Heart, MessageSquare } from 'react-feather';

const ResponseTwo = () => {
    return (
        <article className="bg-secondary-800 w-full h-[800px] rounded-lg p-4 flex flex-col overflow-y-hidden">
            {
                [...Array(8)].map((elementInArray, index) => (
                    <div className="mb-4" key={index}>
                        <div className="flex mb-4">
                            <span className="w-[38px] h-[38px] bg-secondary-600 rounded-full aspect-square mr-6"></span>
                            <div className="max-w-md w-full">
                                <span className="block w-3/4 h-4 bg-secondary-600 rounded-full mb-2"></span>
                                <span className="block w-32 h-3 bg-secondary-700 rounded-full"></span>
                            </div>
                            {}
                            <span className="w-[16px] h-[16px] bg-primary rounded-full aspect-square"></span>
                        </div>
                        <div>
                        {Math.floor((Math.random() * 100) + 1) % 2 == 0 ?
                            <div className="flex items-center mb-4">
                                <span className="flex items-center mr-2"><Heart className="mr-1" fill="currentColor" size={18}/></span>                                
                                <p className="m-0"><b className="font-medium">Liked on of your recent posts</b></p>
                            </div>
                            : <div className="flex items-center mb-4">
                                <span className="flex items-center mr-4"><MessageSquare className="mr-1" fill="currentcolor" size={18}/></span>
                                
                                <p className="m-0"><b className="font-medium">Commented on your post</b> {`"That is such a..."`}</p>
                            </div>
                        }
                        </div>
                        <hr className="my-0"/>
                    </div>
                ))
            }
        </article>
    )
}
export default ResponseTwo;