const Footer = () => {
    return ( 
        <footer className="text-center p-4 bg-[var(--background-color)] w-full">
            <p className="text-gray-600">
                @ {new Date().getFullYear()} Tukusalifya Sichali.
            </p>
         </footer>
     );
}
 
export default Footer;