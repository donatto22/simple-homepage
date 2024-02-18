import './content.css'

const Content = () => {
    return (
        <div id="content">
            <div id="content-left">
                <div className='min-text uppercase'>
                    😎 Simple way to communicate
                </div>

                <div className='giant-text'>
                    Actions for Accessibility in Design
                </div>

                <div className='content-description'>
                    The fastest way to build and deploy websites with resusable components.
                </div>

                <div className='content-actions'>
                    <div className="actions uppercase">
                        <button className='uppercase button button-primary'>Get Started</button>
                    </div>

                    <div className="actions">
                        <button className='button button-ghost'>
                            <div className="underline">
                                Get live demo
                            </div>
                        </button>
                    </div>
                </div>

                <div></div>
            </div>

            <div id="content-right">
                <img src="./hero-image-simple-homepage.webp" alt="" />
            </div>
        </div>
    )
}

export default Content
