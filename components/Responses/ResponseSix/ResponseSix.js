import { Image } from 'react-feather';

const ResponseSix = () => {
    return (
        <article className="bg-secondary-800 w-full h-[800px] rounded-lg p-6 flex flex-col overflow-hidden">
            <div className="flex mb-4">
                <span className="w-[38px] h-[38px] bg-secondary-600 rounded-full aspect-square mr-6"></span>
                <div className="max-w-md w-full">
                    <span className="block w-3/4 h-4 bg-secondary-600 rounded-full mb-2"></span>
                    <span className="block w-32 h-3 bg-secondary-700 rounded-full"></span>
                </div>
            </div>
            <div className="mb-8">
                <h3 className="m-0 text-sm font-bold mb-2 tracking-wide">Level 142</h3>
                <div className="bg-secondary-700 w-full h-8 rounded-full flex items-center relative">
                    <p className="text-xs font-medium m-0 pl-4 absolute">56%</p>
                    <span className="bg-primary w-[56%] h-full rounded-full"></span>
                </div>
            </div>
            <div className="mb-8">
                <h3 className="m-0 text-sm font-bold mb-2 tracking-wide">Total Experience Earned</h3>
                <span className="text-5xl font-bold">32,104<span className="text-sm font-normal ml-2">pts</span></span>
            </div>
            <div className="mb-8">
                <h3 className="m-0 text-sm font-bold mb-2 tracking-wide">Achievements</h3>
                <div className="bg-secondary-700 p-4 w-full rounded-lg flex flex-col gap-2">
                    <div className="flex gap-2 justify-between">
                        {
                            [...Array(8)].map((elementInArray, index) => (
                                <span className="w-[42px] h-[42px] bg-secondary-600 rounded-full aspect-square" key={index}></span>
                            ))
                        }
                    </div>
                    <div className="flex gap-2 justify-between">
                        {
                            [...Array(7)].map((elementInArray, index) => (
                                <span className="w-[42px] h-[42px] bg-secondary-600 rounded-full aspect-square" key={index}></span>
                            ))
                        }
                        <span className="w-[42px] h-[42px] bg-secondary-600 opacity-50 rounded-full aspect-square flex items-center justify-center text-sm">+12</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="m-0 text-sm font-bold mb-2 tracking-wide">Best Posts</h3>
                <div className="grid grid-rows-3 grid-cols-3 gap-2">
                    {
                        [...Array(9)].map((elementInArray, index) => (
                            <span className="bg-secondary-700 flex items-center justify-center aspect-square rounded-lg w-full" key={index}><Image size={56} strokeWidth={1.4} color="#44307D"/></span>
                        ))
                    }
                </div>
            </div>

        </article>
    )
}
export default ResponseSix;