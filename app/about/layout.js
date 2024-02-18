import Aboutnav from "../components/aboutnav/aboutnav";

export const metadata = {
    title:'Food App/About Us'
}
export default function AboutLayout({ children }) {
    return (
        <section className='antialiased font-Poppins'>
            <Aboutnav/>
            <div>{children}</div>
        
            
        </section>
    )
}