
const Sidebar = () => {
    return (
        <div 
            className="Sidebar w-4/12 px-16 py-8 flex flex-col"
            style={{
                background: "linear-gradient(90deg, #4900D8 0%, #130D23 140.5%)"
            }}
        >
            <h1 className="font-Syncopate font-bold text-6xl leading-relaxed text-slate-50 mb-56">Understanding Social Media Interaction</h1>
            <div className="mb-auto">
                <p className="text-slate-300 leading-8 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus lacinia diam amet enim. Ante id ipsum pharetra aenean. Faucibus vulputate pretium mauris dui a, interdum. Enim pretium blandit ridiculus feugiat mi dui enim vestibulum. Pellentesque eros.</p>
                <p className="text-slate-100 text-bold text-lg">Like a post to begin your first scenario</p>
            </div>
            <div className="mt-auto">
                <p className="text-slate-400"><a href="#" className="text-slate-300">Terms & Conditions</a> // <a href="#" className="text-slate-300">Privacy Policy</a></p>
                <p className="text-slate-300 font-light">© Understanding Social Media Interaction</p>
            </div>
        </div>
    )
}
export default Sidebar