
const PostExample = ({ buttonGroup }) => {
    return (
        <div>
            <article className="bg-secondary-800 w-full h-[490px] rounded-lg p-6 flex flex-col">
                <div className="flex mb-4">
                    <span className="w-[48px] h-[48px] bg-secondary-600 rounded-full aspect-square mr-6"></span>
                    <div>
                        <span className="block w-64 h-5 bg-secondary-600 rounded-full mb-2"></span>
                        <span className="block w-32 h-4 bg-secondary-700 rounded-full"></span>
                    </div>
                </div>
                <div className="mb-4">
                    {
                        [...Array(4)].map((elementInArray, index) => ( 
                            <span className="block w-full h-5 bg-secondary-600 rounded-full mb-2" key={index}></span>
                        ))
                    }
                    <span className="block w-40 h-5 bg-secondary-600 rounded-full"></span>
                </div>
                <div className="w-full h-full">
                    <span className="block w-full h-full bg-secondary-700 rounded-lg"></span>
                </div>
            </article>
            { buttonGroup }
        </div>
    )
}
export default PostExample