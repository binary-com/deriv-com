export default (Button = ({ text }) => (
  <button className="btn">
    {text}
    <style jsx>{`
      .btn {
        background-color: var(--main-color);
      }
    `}</style>
  </button>
));
