import Contactnav from "../components/contactnav/contactnav";
import Footer from "../components/footer/footer";
export const metadata = {
    title: 'Food App/Contact Us'
}
export default function MenuLayout ( { children } ) {
    return (
        <section className=' antialiased font-Poppins overflow-x-hidden relative tablet:w-full h-dvh max-h-vh  '>
            <Contactnav />
            <div>{ children }</div>
            <Footer />

        </section>
    )
}