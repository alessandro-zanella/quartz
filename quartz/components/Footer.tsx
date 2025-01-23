import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()

    return (
      <footer class={`${displayClass ?? ""} footer`}>
        <div class="footer-column">
          <p>RAINY DAWN ENTERTAINMENT SRL</p>
          <p>rainydawnentertainment@gmail.com</p>
        </div>
        <div class="footer-column">
          <ul class="social-links">
            <li>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/static/socials/facebook.png" alt="Facebook" width="24" height="24" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/static/socials/facebook.png" alt="Instagram" width="24" height="24" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/static/socials/facebook.png" alt="YouTube" width="24" height="24" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/static/socials/facebook.png" alt="Twitter" width="24" height="24" />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <p>Let's Stick Together</p>
        </div>
        <p>© {year}</p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
