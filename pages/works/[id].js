import { Image } from "@chakra-ui/react"
import Link from "next/link"
import { client } from "../../libs/client"
import styles from "../../styles/work.module.css"

// post：getStaticPropsから取得したデータ
export default function work ({ works }) {
    return (
      <div>
        <main>
            <div className='kv'>
                <h2>施工事例</h2>
            </div>

            <div className="breadcrumb">
                <div className="left">
                    <Link href='/' as='/'>
                        <a>TOP</a>
                    </Link>
                    <p className="arrow">＞</p>
                    <Link href='/works' as='/works'>
                        <a>施工事例</a>
                    </Link>
                    <p className="arrow">＞</p>
                    <p>{works.title}</p>
                </div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.top}>
                    <Image src={getMediaURL(works.media.url)} alt={works.title}/>
                    <div className={styles.content}>
                        <div>
                            <p>{new Date(works.date).toLocaleDateString()}</p>
                            <p>＃{works.tag_01}</p>
                            <p>{works.tag_02 !== undefined && ('＃' + works.tag_02)}</p>
                            <p>{works.tag_03 !== undefined && ('＃' + works.tag_03)}</p>
                        </div>

                        <h2>{works.title}</h2>
                        <p>{works.description}</p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <Image src={getMediaURL(works.sub_media.url)} alt={works.sub_title}/>
                    <div>
                        <h3>{works.sub_title}</h3>
                        <p>{works.sub_description}</p>
                    </div>
                </div>

                <div className={styles.links}>
                    <Link href='/#contact' as='/#contact'>
                        <a>施工依頼をする</a>
                    </Link>

                    <Link href='/works' as='/works'>
                        <a>一覧はこちら</a>
                    </Link>
                </div>
            </div>
        </main>
      </div>
    )
}
  
export async function getStaticPaths (){
    // 外部APIエンドポイントを呼び出しデータ取得
    const data = await client.get({ endpoint: 'works' })
    const paths = data.contents.map((content) => `/works/${content.id}/`)

    return { paths, fallback: false };
}

export function getMediaURL(media){
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "" ;
    const mediaUrl = API_URL + media;
    return mediaUrl;
}


export async function getStaticProps(context){
    const id = context.params.id;
    const data = await client.get({ endpoint: 'works', contentId: id })
    // const paths = `/works/page/${data.id}`

    return{
        props: {
            works: data,
            // paths:{
            //     params: paths,
            // },
        },
    }
}