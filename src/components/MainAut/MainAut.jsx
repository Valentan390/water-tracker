import s from "./MainAut.module.css";

const MainAut = ({ children }) => {
  return (
    <main>
      <section className={s.sectionMain}>
        <div className="container">{children}</div>
      </section>
    </main>
  );
};

export default MainAut;
