
import style from "./Hero.module.css"

/*import styleModule from "./style.module.css"*/

export const Hero = () => {
    return (
        <section className={style.hero}> 
            <h1 className= {style.title}>Get Premium free for 1 month</h1>
            <p className={style.success}>Just ₹119/month after. Debit and Credit cards accepted. Cancel anytime</p>
            <button>Get started</button>
            <button>See other plans</button>
            <div>
                <a href="#">Terms and conditions apply</a>
                1 month free not available for users who have already tried Premium.
            </div>
            </section>
    )
}