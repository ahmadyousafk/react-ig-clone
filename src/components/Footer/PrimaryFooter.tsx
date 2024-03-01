import './Footer.css'

export function PrimaryFooter() {
  return (
    <footer>
      <p>
        Built with
        <span className="footer__emoji" aria-label="love">
          &nbsp;💙&nbsp;
        </span>
        by&nbsp;
        <a href="https://github.com/mirayatech" target="_blank">
          Ahmad
        </a>
      </p>
    </footer>
  )
}
