// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Form from "../components/form";
import About from "../components/about";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from '@chakra-ui/react';

import { client } from '../libs/client';


export async function getStaticProps(){
  const infosData = await client.get({endpoint: 'news'})
  const worksData = await client.get({endpoint: 'works'})

  return {
      props:{
          infos: infosData.contents,
          works: worksData.contents,
      },
  };
}

export default function Home({infos,works}) {
  const reversedinfos = [...infos].reverse();
  const reversedworks = [...works].reverse();


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    className: "worlsSlider",
    responsive:[
      {
        breakpoint: 767,
          settings: {
            slidesToShow: 1.2,
            centerMode: true,
        }
      },
    ],
  };

  return (
    <div className={styles.container}>
      <main>
        <section id={styles.mv}>
          <h2 className={styles.mv_title}  data-aos="fade-up">
            <span>施工管理<small>で</small></span><br/>
            <span>品質重視<small>の</small>信頼<small>を</small>獲得<small>する</small></span>
          </h2>

          <div className={styles.txt} data-aos="fade-up" data-aos-delay="500">
          </div>
        </section>
        
        <section id={styles.news}>
          <div className={styles.left} data-aos="fade-up">
            <h2><Image src="/images/news_title.svg" alt='お知らせ' width='5.3rem' height='2.89rem' /><br/><strong>お知らせ</strong></h2>

            {reversedinfos.slice(0, 3).map((info) =>(
              <div key={info.id} className={styles.content}>
                <p>{new Date(info.date).toLocaleDateString()}</p>
                <p>{info.description}</p>
              </div>
            ))}
          </div>
          
          <div className={styles.right} data-aos="fade-up" data-aos-delay="500">
            <p>仲間と自由に働ける場所</p>
            <Image src="/images/news_right_txt.svg" alt='求人情報' width='43.3rem' height='6.95rem' />
            <a href='#recruit'>求人情報｜ENTRY</a>
          </div>
        </section>

        <section id={styles.service}>
          <h2><Image src="/images/service_title.svg" alt='事業内容' width='12.47rem' height='2.54rem' />事業内容</h2>

          <div id='service' className={styles.wrap} data-aos="fade-up">
            <Image src="/images/service01.jpg" alt='サービス1' width='52rem' height='39.61rem'/>

            <div className={styles.txt}>
              <h2>
                建物<small>は</small>進化<small>する</small><br/>
                MIWA<small>は、</small><br/>
                品質<small>を</small>磨<small>き</small>続<small>ける</small>
              </h2>
            </div>
          </div>

          <div className={styles.wrap} data-aos="fade-up" data-aos-delay="250">
          <Image src="/images/service02.jpg" alt='サービス2' width='52rem' height='39.22rem'/>

            <div className={styles.txt}>
              <h3>クロス張り替え工事</h3>
              <p>新築クロス工事、住宅、アパート等のクロス貼り替え工事を承ります。</p>

              <h3>リフォーム工事</h3>
              <p>一般工事、店舗、事務所などの内装全般の工事を承ります。</p>
            </div>
          </div>
        </section>

        <section id={styles.works}>
          <h2><Image src="/images/works_title.svg" alt='施工事例' width='12.76rem' height='3.21rem' /><br/><strong>施工事例</strong></h2>

          <p>スライドをクリックすると<br className='sp_only'/>事例詳細ページに遷移いたします。</p>
          <Slider {...settings}>
            {reversedworks.slice(0, 5).map((work) =>(
              <a className='slide' key={work.id} href={`/works/${work.id}`}>
                <Image src={getMediaURL(work.media.url)} alt={work.title} />
              </a>
            ))}
          </Slider>
          
          <Link href="/works" as="/works">
            <a className={styles.more}>詳しく見る</a>
          </Link>
        </section>

        <section id={styles.recruit}>
          <h2 className='sp_only'><Image src="/images/recruit_title.svg" alt='採用情報' width='7.064rem' height='1.964rem' /><br/><strong>採用情報</strong></h2>
          <div id='recruit' className={styles.left}>
            <h2 className='pc_only'><Image src="/images/recruit_title.svg" alt='採用情報' width='9.9rem' height='2.753rem' /><br/><strong>採用情報</strong></h2>
            
            <div className={styles.wrap} data-aos="fade-up">
              <ul>
                <li><small>◆</small>応募資格<br/><span>・普通自動車免許</span></li>
                <li><small>◆</small>勤務地<br/><span>・神奈川県、東京都</span></li>
                <li><small>◆</small>勤務時間<br/><span>・8:00〜18:00</span></li>
                <li><small>◆</small>休日休暇<br/><span>・毎週日曜日、GW、夏期、年末年始</span></li>
                <li><small>◆</small>給与<br/><span>・能力に応じて</span></li>
              </ul>

              <div>
                <h3>
                  経験豊富な職人さん大歓迎！<br/>
                  人柄重視、クオリティ第一主義
                </h3>
              </div>
            </div>
          </div>

          <Image className={styles.recruit_img} src="/images/recruit.jpg" alt='担当者から一言' width='60.5rem' height='54.4rem'/>
        </section>

        <About/>

        <Form />

        <div className={styles.cta}>
          <Link href="/#contact" as="/#contact">
            <a>お問合せ｜CONTACT</a>
          </Link>
          <Link href="/#recruit" as="/#recruit">
            <a>採用情報｜ENTRY</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export function getMediaURL(media){
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "" ;
  const mediaUrl = API_URL + media;
  return mediaUrl;
}