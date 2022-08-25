import React from 'react'
import '../styles/globals.css'
import Image from "next/image"
import Link from "next/link"
import AOS from 'aos';
import Head from 'next/head'
import 'aos/dist/aos.css';

function getYear() {
  return new Date().getFullYear();
};

function MyApp({ works, Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out',
    });
  },[]);

  return (
    <>
      <Head>
        <title>株式会社MIWA公式ホームページ</title>
      </Head>
      <header>
        <h1><Link href='/' passHref><a>株式会社MIWA</a></Link></h1>

        <nav className='pc_flex'>
            <ul>
              <li><Link href="/#service" as='/#service' passHref><a>事業内容<Image src="/images/nav_value.svg" alt="事業内容" width={53} height={14}/></a></Link></li>
              <li><Link href="/works/index.js" as='/works' passHref><a>施工事例<Image src="/images/nav_case.svg" alt="施工事例" width={61.55} height={14}/></a></Link></li>
              <li><Link href="/#recruit" as='/#recruit' passHref><a>採用情報<Image src="/images/nav_recruit.svg" alt="採用情報" width={47.75} height={14}/></a></Link></li>
              <li><Link href="/#about" as='/#about' passHref><a>会社概要<Image src="/images/nav_about.svg" alt="会社概要" width={36.9} height={14}/></a></Link></li>
              <li><Link href="/#contact" as='/#contact' passHref><a>お問合せ<Image src="/images/nav_contact.svg" alt="お問合せ" width={38.5} height={14}/></a></Link></li>
            </ul>
        </nav>

        <div id='hamburger' className='sp_only'>
          <span id='line1' className='inner_line'></span>
          <span id='line2' className='inner_line'></span>
          <span id='line3' className='inner_line'></span>
        </div>
      </header>

      <nav id='nav' className='sp_only'>
        <div className='nav_wrap'>
          <ul>
            <li><Link href="/" as='/' passHref><a>ホーム　<Image src="/images/nav_home_white.svg" alt="ホーム" width={39} height={16.74}/></a></Link></li>
            <li><Link href="/#service" as='/#service' passHref><a>事業内容　<Image src="/images/nav_value_white.svg" alt="事業内容" width={77.5} height={14.63}/></a></Link></li>
            <li><Link href="/#recruit" as='/#recruit' passHref><a>採用情報　<Image src="/images/nav_recruit_white.svg" alt="採用情報" width={58.27} height={14.64}/></a></Link></li>
            <li><Link href="/#about" as='/#about' passHref><a>会社概要　<Image src="/images/nav_about_white.svg" alt="会社概要" width={47.3} height={18}/></a></Link></li>
          </ul>

          <div>
            <p>随時更新中</p>
            <Link href='/works' as='/works' passHref>
              <a>施工事例はこちら</a>
            </Link>
          </div>
        </div>
      </nav>

      <Component {...pageProps} />

      <footer>
        <Link href='/' as='/' passHref><a className='footer_logo'>株式会社MIWA</a></Link>
        <p>〒187-0022<br/>東京都小平市上水元町5-15-3-317</p>

        <a href='tel:070-6527-3124'>070-6527-3124</a>
        <p>受付時間 10:00-20:00</p>

        <ul>
          <li><Link href='/' as='/' passHref><a>ホーム</a></Link></li>
          <li><Link href='/#service' as='/#service' passHref><a>事業内容</a></Link></li>
          <li><Link href='/works' as='/works' passHref><a>施工事例</a></Link></li>
          <li><Link href='/#about' as='/#about' passHref><a>会社概要</a></Link></li>
        </ul>

        <p className='copy'>&copy; {getYear()} MIWA Co., ltd.</p>
      </footer>
    </>
  )
}

// if (typeof window === 'object') {
//   function hamburger(){
//     document.getElementById('line1').classList.toggle('line_1');
//     document.getElementById('line2').classList.toggle('line_2');
//     document.getElementById('line3').classList.toggle('line_3');
//     document.getElementById('nav').classList.toggle('in');
//   };
//   document.getElementById('hamburger').addEventListener('click',function(){
//     hamburger();
//   });
//   document.getElementById('nav').addEventListener('click',function(){
//     hamburger();
//   });
// }

export default MyApp;
