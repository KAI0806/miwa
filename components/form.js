import Image from 'next/image'

const form = () => {
    return (
        <div>
            <section id='contact'>
                <h2><Image src="/images/contact_title.svg" alt='お問合せ' width={100} height={27.32}/><br/><strong>お問合せ</strong></h2>
                <div className='wrap'>
                    <div className='tel'>
                        <p>お電話はこちら</p>
                        <a href='tel:070-6527-3124'>070-6527-3124</a>
                        <p><small>受付時間 10:00-20:00</small></p>
                    </div>
                    <form className="formrun" action="https://form.run/api/v1/r/s4vm24vmde41vlmvyk65xa0w" method="post">
                        <fieldset>
                            <p>お問合せ内容 <span className='red'>必須</span></p>
                            <div>
                                <label>
                                    <input type="radio" name="お問合せ内容" value="仕事の依頼について" data-formrun-required/>
                                    仕事の依頼について
                                </label>
                                <label>
                                    <input type="radio" name="お問合せ内容" value="採用・選考について" data-formrun-required/>
                                    採用・選考について
                                </label>
                                <label>
                                    <input type="radio" name="お問合せ内容" value="その他お問い合わせ" data-formrun-required/>
                                    その他お問い合わせ
                                </label>
                            </div>
                        </fieldset>

                        <div>
                            <label htmlFor="name">お名前<span className='red'>必須</span></label>
                            <input id='name' name="お名前" type="text" placeholder='山田 太郎' data-formrun-required/>
                        </div>

                        <div>
                            <label htmlFor="phone">電話番号<span className='red'>必須</span></label>
                            <input id='phone' name="電話番号" type="tel" placeholder='09012341234' data-formrun-required/>
                        </div>

                        <div>
                            <label htmlFor="mail">メールアドレス</label>
                            <input id='mail' name="メールアドレス" type="text" data-formrun-type="email" placeholder='sample@sample.com'/>
                        </div>

                        <div className='txt'>
                            <label htmlFor="content">お問合せ内容</label>
                            <textarea id='content' name="お問合せ内容" placeholder='お問合せ内容をご記載ください。'></textarea>
                        </div>

                        <div className='_formrun_gotcha'>
                            <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
                            <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex="-1"/>
                        </div>

                        <div className='button_wrap'>
                            <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信する</button>
                        </div>
                    </form>

                </div>
            </section>
        </div>
    );
}

export default form;