import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <Image 
        src="/isotipo.png" 
        alt="isotipo"
        width={150}
        height={150}
      />
        <div>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <ul>
                <li>Av.Lapislázuli #2529 Local 6 #44580 Guadalajara, Jalisco.</li>
                <li>Lunes-Viernes: 9am - 6pm <br/>Sabados: 9am - 3pm</li>
                <li>Tel: 33 2615 4992</li>
                <li>anantara.bodyspa@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
