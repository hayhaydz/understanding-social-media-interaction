import { Heart, Award, Image } from 'react-feather';

const ResponseFive = () => {
    return (
        <article className="bg-secondary-800 w-full h-[800px] rounded-lg p-6 flex flex-col overflow-hidden">
            <div className="flex items-center mb-4">
                <span className="bg-secondary-700 flex items-center justify-center w-[56px] h-[56px] aspect-square rounded-full mr-2"><Award stroke="#E7B419" fill="#E7B419"/></span>
                <p className="font-medium">Your post earned a gold trophy</p>
                <span className="ml-auto bg-secondary-700 flex items-center justify-center p-6 aspect-square rounded-lg"><Image size={56} strokeWidth={1.4} color="#44307D"/></span>
            </div>
            <div className="flex items-center mb-4">
                <span className="bg-secondary-700 flex items-center justify-center w-[56px] h-[56px] aspect-square rounded-full mr-2"><Heart stroke="#E43A4A" fill="#E43A4A"/></span>
                <p className="font-medium">Your post received a new like</p>
                <span className="ml-auto bg-secondary-700 flex items-center justify-center p-6 aspect-square rounded-lg"><Image size={56} strokeWidth={1.4} color="#44307D"/></span>
            </div>
            <div className="flex items-center mb-4">
                <span className="bg-secondary-700 flex items-center justify-center w-[56px] h-[56px] aspect-square rounded-full mr-2"><Award stroke="#818083" fill="#818083"/></span>
                <p className="font-medium">Your post earned a silver trophy</p>
                <span className="ml-auto bg-secondary-700 flex items-center justify-center p-6 aspect-square rounded-lg"><Image size={56} strokeWidth={1.4} color="#44307D"/></span>
            </div>
            {
                [...Array(2)].map((elementInArray, index) => (
                    <div className="flex items-center mb-4" key={index}>
                        <span className="bg-secondary-700 flex items-center justify-center w-[56px] h-[56px] aspect-square rounded-full mr-2"><Heart stroke="#E43A4A" fill="#E43A4A"/></span>
                        <p className="font-medium">Your post received a new like</p>
                        <span className="ml-auto bg-secondary-700 flex items-center justify-center p-6 aspect-square rounded-lg"><Image size={56} strokeWidth={1.4} color="#44307D"/></span>
                    </div>
                ))
            }
            <div className="flex items-center mb-4">
                <span className="bg-secondary-700 flex items-center justify-center w-[56px] h-[56px] aspect-square rounded-full mr-2"><Award stroke="#A86C31" fill="#A86C31"/></span>
                <p className="font-medium">Your post earned a bronze trophy</p>
                <span className="ml-auto bg-secondary-700 flex items-center justify-center p-6 aspect-square rounded-lg"><Image size={56} strokeWidth={1.4} color="#44307D"/></span>
            </div>
            <div className="flex items-center">
                <span className="bg-secondary-700 flex items-center justify-center w-[56px] h-[56px] aspect-square rounded-full mr-2"><Heart stroke="#E43A4A" fill="#E43A4A"/></span>
                <p className="font-medium">Your post received a new like</p>
                <span className="ml-auto bg-secondary-700 flex items-center justify-center p-6 aspect-square rounded-lg"><Image size={56} strokeWidth={1.4} color="#44307D"/></span>
            </div>
        </article>
    )
}
export default ResponseFive;