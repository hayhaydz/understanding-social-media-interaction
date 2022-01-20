
const Button = ({ children, className }) => {
    return (
        <button className={"flex items-center bg-primary-700 px-3 py-2 w-full rounded-lg transition-colors hover:bg-primary-600 " + className}>{children}</button>
    )
}
export default Button