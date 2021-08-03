import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js Base Website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            "Next.js Base Website"
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="Next.js Base Website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>     

        {children}
        
    </div>
  )
}