import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Todo App Tutorial </title>
        <meta name="description" content="This page is Tutorial Todo App." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ページ一覧</h1>
      <ul>
        <li><Link href="/todo">ToDo（step1）</Link></li>
        <li><Link href="/todo2">ToDo（step2）</Link></li>
        <li><Link href="/mock">ToDo（mock）</Link></li>
      </ul>
    </>
  )
}
