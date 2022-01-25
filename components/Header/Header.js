import { ExternalLink } from "react-feather";

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
            <div className="flex justify-between mb-4 md:m-32 flex-col lg:flex-row sm:max-w-xl lg:max-w-full">
                <div className="max-w-full sm:max-w-xl mb-16 md:mb-0">
                    <h1 className="font-Syncopate text-3xl sm:text-5xl text-gray-100 !leading-relaxed">Understanding Social Media Interaction</h1>
                    <p className="font-Inter text-sm text-gray-300 leading-8">{`The way that we interact with social media today is poorly thought out and not tailored to how we interact in real life. The purpose of this research is to explore the different ways that we currently interact and look at new ways to improve how we interact and how it is received. Please have a look through the interaction examples below and then click the "Provide Feedback" button to fill out a questionnaire.`}</p>
                </div>
                <div>
                    <a href="https://forms.gle/moPz5c9aGucYjkas9" target="_blank" rel="noreferrer" className="bg-primary flex items-center py-4 px-8 rounded-full no-underline tracking-wider transition-colors hover:bg-primary-700">PROVIDE FEEDBACK <ExternalLink size={14} className="ml-auto md:ml-4"/></a>
                </div>
            </div>
            <nav className="flex justify-center text-lg border-b-2 border-gray-600">
                <ul className="list-none p-0">
                    <li className="inline-block"><button className={"font-bold tracking-wide p-4 transition-colors hover:text-gray-100 " + (isInteraction ? "text-gray-100" : "text-gray-600")} onClick={handleIntClick}>Interaction</button></li>
                    <li className="inline-block mx-4"><p className="font-bold text-gray-600">/</p></li>
                    <li className="inline-block"><button className={"font-bold tracking-wide p-4 transition-colors hover:text-gray-100 " + (!isInteraction ? "text-gray-100" : "text-gray-600")} onClick={handleResClick}>Response</button></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header