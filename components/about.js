

function about() {
    return (
        <div>
            <section id='about'>
                <div>
                    <h2>ABOUT<br/><strong>会社概要</strong></h2>
                    <div className='wrap' data-aos="fade-up">
                        <div>
                            <h3>社名</h3><p>株式会社MIWA</p>
                        </div>
                        <div>
                            <h3>住所</h3><p>〒187-0022<br/>東京都小平市上水元町<br className="sp_only"/>5-15-3-317</p>
                        </div>
                        <div>
                            <h3>代表取締役</h3><p>三輪 義彦</p>
                        </div>
                        <div>
                            <h3>TEL</h3><p>070-6527-3124</p>
                        </div>
                    </div>
                </div>

                <iframe title='googlemaps' className='googlemaps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6094031478497!2d139.4763568!3d35.711228399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e425e1fb66fb%3A0xae6138b9e2ea4315!2z44CSMTg3LTAwMjIg5p2x5Lqs6YO95bCP5bmz5biC5LiK5rC05pys55S677yV5LiB55uu77yR77yV4oiS77yT!5e0!3m2!1sja!2sjp!4v1657177009730!5m2!1sja!2sjp" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    );
}

export default about;