import Link from "next/link"
import styles from "../../styles/lists.module.css"
import About from "../../components/about"
import Form from "../../components/form"
import Pagenation from "../../components/Pagenation"
import { Image } from "@chakra-ui/react"

import { useState } from "react";
import { client } from "../../libs/client"


export default function useIndex({works, absolutes, amount}) {
    const useQuery = () => useState("");

    const [query, setQuery] = useQuery();
    const reversedworks = [...works].reverse();
    const searchQuery = reversedworks.filter((work) => 
        work.title.toLocaleLowerCase().includes(query)
        || work.description.toLocaleLowerCase().includes(query)
        || work.sub_title.toLocaleLowerCase().includes(query)
        || work.sub_description.toLocaleLowerCase().includes(query)
        || work.tag_01.toLocaleLowerCase().includes(query)
        || work.tag_02 !== undefined && (work.tag_02.toLocaleLowerCase().includes(query))
        || work.tag_03 !== undefined && (work.tag_03.toLocaleLowerCase().includes(query))
    );


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
                        <p>施工事例</p>
                    </div>

                    <div className="search">
                        <button><Image src="/images/search.svg" alt="絞り込み検索" width='2.685rem' height='2.685rem'/></button>
                        <input type="text" placeholder="絞り込み検索" 
                        onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}/>
                    </div>
                </div>

                <div className={styles.wrap}>
                    <div className={styles.content} data-aos="fade-up">
                        <Image className={styles.img} src={getMediaURL(absolutes.media.url)} alt={absolutes.title}/>
                        <div>
                            <p className={styles.date}>{new Date(absolutes.date).toLocaleDateString()}</p>
                            <h2>{absolutes.title}</h2>
                            <div className={styles.tags}>
                                <p>＃{absolutes.tag_01}</p>
                                <p>
                                    {absolutes.tag_02 !== undefined && (
                                    "＃" + absolutes.tag_02
                                    )}
                                </p>
                                <p>
                                    {absolutes.tag_03 !== undefined && (
                                    '＃' +  absolutes.tag_03
                                    )}
                                </p>
                            </div>
                        </div>
                        <Link href='/works/absolute' as='/works/absolute'>
                            <a>詳しく見る</a>
                        </Link>
                    </div>

                    {/* data-aos-delay={(amount.pagination.total - work.id)*400+400} */}

                    {searchQuery.slice((0),(7)).map((work) =>(
                        <div key={work.id} className={styles.content}  data-aos="fade-up" >
                            <Image className={styles.img} src={getMediaURL(work.media.url)} alt={work.title}/>
                            <div>
                                <p className={styles.date}>{new Date(work.date).toLocaleDateString()}</p>
                                <h2>{work.title}</h2>
                                <div className={styles.tags}>
                                    <p>＃{work.tag_01}</p>
                                    <p>{work.tag_02 !== undefined &&(
                                        '＃' + work.tag_02
                                    )}</p>
                                    <p>{work.tag_03 !== undefined &&(
                                        '＃' + work.tag_03
                                    )}</p>
                                </div>
                            </div>
                            <Link href={`/works/${work.id}`} as={`/works/${work.id}`}>
                                <a>詳しく見る</a>
                            </Link>
                        </div>
                    ))}
                </div>
                {/* <Pagenation totalCount={amount.pagination.total} currentPageNumber={Math.ceil(amount.pagination.total / 8)} /> */}

                <About/>

                <Form/>
            </main>
        </div>
    );
}

// export async function getStaticPaths (){
//     // 外部APIエンドポイントを呼び出しデータ取得
//     const posts = ['1','2','3','4','5']
//     const paths = posts.map((post) => {
//         return{
//             params: {
//                 id: post,
//             },
//         };
//     })

//     return { paths, fallback: false };
// }

export function getMediaURL(media){
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "" ;
    const mediaUrl = API_URL + media;
    return mediaUrl;
}

export async function getStaticProps(){
    const data = await client.get({endpoint: 'works'})
    const absolutes = await client.get({endpoint: 'absolute', contentId: 'uol4lxir12'})

    return{
        props: {
            works: data.contents,
            absolutes: absolutes,
            amount: data,
        },
    }
}