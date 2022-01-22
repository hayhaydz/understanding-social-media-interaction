import { Heart, MessageSquare, Image } from 'react-feather';

const ResponseThree = () => {
    return (
        <article className="bg-secondary-800 w-full h-[800px] rounded-lg p-6 flex flex-col">
            <div className="flex mb-4">
                <span className="w-[38px] h-[38px] bg-secondary-600 rounded-full aspect-square mr-6"></span>
                <div className="max-w-md w-full">
                    <span className="block w-3/4 h-4 bg-secondary-600 rounded-full mb-2"></span>
                    <span className="block w-32 h-3 bg-secondary-700 rounded-full"></span>
                </div>
            </div>
            {
                [...Array(6)].map((elementInArray, index) => (
                    <div className="flex mb-4" key={index}>
                        <div className="mr-4">
                            <span className="bg-secondary-700 flex items-center justify-center w-[104px] h-[104px] aspect-square rounded-lg"><Image size={48} strokeWidth={1.4} color="#44307D" /></span>
                        </div>
                        <div className="flex flex-col w-full max-w-[300px]">
                            <div className="flex w-full mb-2">
                                <Heart fill="currentColor" size={18} className="mr-2"/>
                                <span className={"bg-secondary-700 w-full h-3 rounded-full after:content-[''] after:block after:bg-primary after:h-full after:rounded-full slider-" + (Math.floor(Math.random() * (4 - 1 + 1)) + 1) + "_4"}></span>
                            </div>
                            <div className="flex w-full mb-2">
                                <MessageSquare fill="currentColor" size={18} className="mr-2"/>
                                <span className={"bg-secondary-700 w-full h-3 rounded-full after:content-[''] after:block after:bg-primary after:w-1/2 after:h-full after:rounded-full slider-" + (Math.floor(Math.random() * (4 - 1 + 1)) + 1) + "_4"}></span>
                            </div>
                            <h3 className="text-xs m-0 mb-1.5 font-medium">Top Comment</h3>
                            <div className="bg-secondary-700 rounded-lg p-2">
                                <p className="text-xs truncate m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tristique sollicitudin ultrices faucibus tristique. Gravida senectus adipiscing blandit laoreet sapien nec.</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </article>
    )
}
export default ResponseThree;