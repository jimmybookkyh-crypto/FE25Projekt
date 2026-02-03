import './ContentBox.css';

function ContentBox({ title, children }) {
  return (
    <div className="content-box">
      {title && <h2 className="content-box-title">{title}</h2>}
      <div className="content-box-body">
        {children}
      </div>
    </div>
  );
}

export default ContentBox;