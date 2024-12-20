import Logo from "/src/assets/logo.png"

export default function Header() {
    return (
        <>
            <nav className="flex justify-center items-center h-40">
                <img src={Logo} alt="chef logo" className=" h-full" />
            </nav>
        </>
    )
}