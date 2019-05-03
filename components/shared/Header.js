import Link from 'next/link'
import '../../styles/main.scss'

const Header = () => {
  return (
    <>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/portforlios">
        <a>Portforlios</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/cv">
        <a>Cv</a>
      </Link>
    </>
  )
}

export default Header
