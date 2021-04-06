import React from 'react';



class WhyAreWe extends React.Component{
    render() {
        return (
            <div className="container why-are-we">
            <p>Почему мы?</p>
            <h2>Мы обучаем самым востребованным на сегодняшний день IT-специальностям. Занятия в Myfreedom — 30% теории,
                70% практики и 99% удовольствия</h2>
            <div className="why-are-we-flex-wrapper">
                <div className="html-css">
                    <h2> HTML и CSS</h2>
                    <p>Для того, чтобы сделать сайт, нужно знать много разных веб языков. Языки HTML и CSS предназначены
                        для верстки сайтов.</p>
                </div>
                <div className="bootstap-framework">
                    <h2> Bootstrap Framework</h2>
                    <p>Bootstrap — это свободный набор инструментов для создания сайтов и веб-приложений.</p>
                </div>
                <div className="javascript">
                    <h2> JavaScript</h2>
                    <p>JavaScript применяется к HTML документу, и может обеспечить динамическую интерактивность на
                        веб-сайтах.</p>
                </div>
                </div>
                </div> 
        )
    }
}
export default WhyAreWe;