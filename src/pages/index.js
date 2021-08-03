import Head from 'next/head'
import Layout from '../components/Layout/layout'
import Link from 'next/link'
import Image from 'next/image'
import PLACEHOLDER_IMG from '../../public/images/placeholder-180.webp'
import { Counter } from '../components/Counter'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js Base Website</title>
      </Head>

        <h1>Hello Next.js!</h1>
        <p>
          <Link href="#">
            <a className="link">This is a link</a>
          </Link>
          {' '} inside a paragraph.
        </p>
        <Image src={PLACEHOLDER_IMG} alt="Placeholder image" />

        <Counter />
    </Layout>
  )
}
