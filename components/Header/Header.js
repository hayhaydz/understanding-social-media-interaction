
const Header = ({ isInteraction, setIsInteraction}) => {

    const handleIntClick = () => {
        if(!isInteraction) {
            setIsInteraction(true);
        }
    }

    const handleResClick = () => {
        if(isInteraction) {
            setIsInteraction(false);
        }
    }

    return (
        <header>
            <div className="flex justify-between mb-32 flex-col lg:flex-row sm:max-w-xl lg:max-w-full">
                <div className="max-w-full sm:max-w-xl">
                    <h1 className="font-Syncopate text-2xl sm:text-5xl text-gray-100 !leading-relaxed">Understanding Social Media Interaction</h1>
                    <p className="font-Inter text-gray-300 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus lacinia diam amet enim. Ante id ipsum pharetra aenean. Faucibus vulputate pretium mauris dui a, interdum. Enim pretium blandit ridiculus feugiat mi dui enim vestibulum. Pellentesque eros.</p>
                </div>
                <div>
                    <a href="#" className="bg-primary block py-4 px-8 rounded-full no-underline tracking-wider transition-colors hover:bg-primary-700">PROVIDE FEEDBACK</a>
                </div>
            </div>
            <nav className="flex justify-center text-lg border-b-2 border-gray-600">
                <ul className="list-none">
                    <li className="inline-block"><button className={"font-bold tracking-wide p-4 transition-colors hover:text-gray-100 " + (isInteraction ? "text-gray-100" : "text-gray-600")} onClick={handleIntClick}>Interaction</button></li>
                    <li className="inline-block mx-4"><p className="font-bold text-gray-600">/</p></li>
                    <li className="inline-block"><button className={"font-bold tracking-wide p-4 transition-colors hover:text-gray-100 " + (!isInteraction ? "text-gray-100" : "text-gray-600")} onClick={handleResClick}>Response</button></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header