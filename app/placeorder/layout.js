import Footer from "../components/footer/footer";
import Ordernav from "../components/ordernav/ordernav";
export const metadata = {
    title: 'Food App/The Menu'
}
export default function MenuLayout ({ children }) {
    return (
        <section className='antialiased font-Poppins'>
            <Ordernav/>
            <div>{children}</div>
            <Footer />

        </section>
    )
}