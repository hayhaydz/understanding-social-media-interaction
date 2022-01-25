import { Heart, MessageSquare } from 'react-feather';

const ResponseFour = () => {
    return (
        <article className="bg-secondary-800 w-full h-[800px] rounded-lg p-4 flex flex-col overflow-hidden">
            <div className="flex mb-4">
                <span className="w-[38px] h-[38px] bg-secondary-600 rounded-full aspect-square mr-6"></span>
                <div className="max-w-md w-full">
                    <span className="block w-3/4 h-4 bg-secondary-600 rounded-full mb-2"></span>
                    <span className="block w-32 h-3 bg-secondary-700 rounded-full"></span>
                </div>
            </div>
            {
                [...Array(2)].map((elementInArray, index) => (
                    <div className="mb-6" key={index}>
                        <div className="bg-secondary-700 p-2 rounded-lg mb-4">
                            <span className="block w-full h-4 bg-secondary-600 rounded-full mb-2"></span>
                            <span className="block w-full h-4 bg-secondary-600 rounded-full mb-2"></span>
                            <span className="block w-full h-4 bg-secondary-600 rounded-full mb-2"></span>
                            <span className="block w-1/4 h-4 bg-secondary-600 rounded-full"></span>
                        </div>
                        <span className="block w-40 h-4 bg-secondary-600 rounded-full mb-2"></span>
                        <div>
                        {
                            [...Array(3)].map((elementInArray, index) => (
                                <div className="bg-secondary-700 p-2 rounded-lg flex items-center mb-2" key={index}>
                                    <span className="w-[42px] h-[42px] bg-secondary-600 rounded-full aspect-square mr-6 hidden md:block"></span>
                                    <div className="w-full">
                                        <span className="block w-48 h-4 bg-secondary-600 rounded-full mb-2"></span>
                                        {Math.floor((Math.random() * 100) + 1) % 2 == 0 ? 
                                            <div className="flex items-center">
                                                <Heart size={18} fill="currentColor" className="mr-2" />
                                                <span className="font-medium">Liked one of your recent posts</span>
                                            </div>
                                            : <div className="flex items-center">
                                                <MessageSquare size={18} fill="currentColor" className="mr-2" />
                                                <span ><b className="font-medium">Commented on your post</b> "Love this idea..."</span>
                                            </div>
                                    }
     
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </article>
    )
}
export default ResponseFour;