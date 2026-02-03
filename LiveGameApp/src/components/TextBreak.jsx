function TextBreak({ text, chunkSize = 50, className = '' }) {
  if (!text) return null;
  const words = text.split(" ");
  const chunks = [];
  let current = "";

  words.forEach(word => {
    if ((current + word).length > chunkSize) {
      chunks.push(current.trim());
      current = "";
    }
    current += word + " ";
  });

  if (current.trim().length > 0) {
    chunks.push(current.trim());
  }

  return (
    <div className={className}>
      {chunks.map((line, i) => (
        <p key={i} className={`${className}-line`}>
          {line}
        </p>
      ))}
    </div>
  );
}

export default TextBreak;