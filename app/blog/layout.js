import Blognav from "../components/blognav/blognav";
import Footer from "../components/footer/footer";
export const metadata = {
  title: 'Food App/Blog'
}
export default function BlogLayout ( { children } ) {
  return (
    <section className='antialiased font-Poppins'>
      <Blognav />
      <div>{ children }</div>
      <Footer />

    </section>
  )
}