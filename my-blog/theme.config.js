const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Agustin Gomez Del Toro
        <a href="/contact.xml">Contacto</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};
